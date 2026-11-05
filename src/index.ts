import { dataset } from './data/ming';
import type { OfficialRow } from './data/ming';

export interface Env {
  ASSETS: Fetcher;
  /** 页脚备案号，部署时由环境变量注入（见 tools/deploy.mjs） */
  SITE_BEIAN?: string;
  /** 源码仓库地址，部署时由环境变量注入 */
  SITE_GITHUB?: string;
  /** 百度统计站点 ID（hm.baidu.com/hm.js?后面那串），留空则不加载统计脚本 */
  SITE_BAIDU_ID?: string;
}

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'access-control-allow-origin': '*',
};

// 数据集在模块作用域内序列化一次，后续请求复用同一段字符串
const DATA_BODY = JSON.stringify(dataset);

const totalOfficials = dataset.officialSections.reduce((n, s) => n + s.rows.length, 0);

const stats = {
  emperors: dataset.emperors.length,
  southMing: dataset.southMing.length,
  generationPoems: dataset.generationPoems.length,
  emperorBranches: dataset.children.length,
  princeAndPrincess: dataset.children.reduce((n, c) => n + c.items.length, 0),
  officialRows: totalOfficials,
  officialSections: dataset.officialSections.length,
  rankGrades: dataset.rankLists.reduce((n, l) => n + l.grades.length, 0),
  examRows: dataset.examRows.length,
};

function json(body: string, cacheControl = 'public, max-age=300') {
  return new Response(body, {
    headers: { ...JSON_HEADERS, 'cache-control': cacheControl },
  });
}

/** 官职条目扁平索引：支持跨区块搜索 */
interface FlatOfficial extends OfficialRow {
  sectionId: string;
  sectionTitle: string;
  region: string;
  /** 该条目在其所属区块中的序号 */
  index: number;
}

const officialIndex: FlatOfficial[] = dataset.officialSections.flatMap((s) =>
  s.rows.map((r, index) => ({ ...r, sectionId: s.id, sectionTitle: s.title, region: s.region, index })),
);

interface SearchHit {
  type: 'emperor' | 'official' | 'prince';
  title: string;
  subtitle: string;
  detail: string;
  score: number;
  ref: { temple?: string; sectionId?: string; index?: number; group?: string; child?: string };
}

function search(query: string, limit = 40): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: SearchHit[] = [];

  for (const e of [...dataset.emperors, ...dataset.southMing]) {
    const haystack = `${e.temple} ${e.name} ${e.era} ${e.reign} ${e.posthumous}`.toLowerCase();
    if (!haystack.includes(q)) continue;
    hits.push({
      type: 'emperor',
      title: `${e.temple} ${e.name}`,
      subtitle: `${e.era} · ${e.reign}`,
      detail: e.posthumous,
      score: e.temple.includes(q) ? 100 : e.name.includes(q) ? 90 : e.era.includes(q) ? 80 : 60,
      ref: { temple: e.temple },
    });
  }

  for (const o of officialIndex) {
    const haystack = `${o.group} ${o.office} ${o.rank} ${o.count} ${o.affiliation} ${o.duty}`.toLowerCase();
    if (!haystack.includes(q)) continue;
    let score = 30;
    if (o.office.toLowerCase().includes(q)) score = 95;
    else if (o.group.toLowerCase().includes(q)) score = 80;
    else if (o.rank.toLowerCase().includes(q)) score = 70;
    else if (o.affiliation.toLowerCase().includes(q)) score = 50;
    hits.push({
      type: 'official',
      title: o.group && o.group !== o.office ? `${o.group} · ${o.office}` : o.office || o.group,
      subtitle: `${o.sectionTitle} · ${o.rank}${o.count ? ` · ${o.count}` : ''}`,
      detail: o.duty.split('\n')[0] || o.affiliation,
      score,
      ref: { sectionId: o.sectionId, index: o.index },
    });
  }

  for (const c of dataset.children) {
    for (const item of c.items) {
      if (!item.toLowerCase().includes(q)) continue;
      hits.push({
        type: 'prince',
        title: item,
        subtitle: `${c.emperor} 子嗣`,
        detail: '',
        score: 85,
        ref: { group: c.emperor, child: item },
      });
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/data') {
      return json(DATA_BODY, 'public, max-age=3600, stale-while-revalidate=86400');
    }

    if (path === '/api/stats') {
      return json(JSON.stringify(stats), 'public, max-age=3600');
    }

    // 站点级个人配置：来自环境变量，缺失时前端对应元素保持隐藏
    if (path === '/api/config') {
      return json(
        JSON.stringify({
          beian: env.SITE_BEIAN ?? '',
          github: env.SITE_GITHUB ?? '',
          baidu: env.SITE_BAIDU_ID ?? '',
        }),
        'public, max-age=3600',
      );
    }

    if (path === '/api/search') {
      const q = url.searchParams.get('q') ?? '';
      const limit = Math.min(Number(url.searchParams.get('limit')) || 40, 200);
      return json(JSON.stringify({ query: q, results: search(q, limit) }), 'public, max-age=60');
    }

    if (path.startsWith('/api/sections/')) {
      const id = decodeURIComponent(path.slice('/api/sections/'.length));
      const section = dataset.officialSections.find((s) => s.id === id);
      if (!section) return json(JSON.stringify({ error: '未找到该区块' }), 'public, max-age=60');
      return json(JSON.stringify(section), 'public, max-age=3600');
    }

    if (path === '/api/emperors') {
      return json(
        JSON.stringify({ emperors: dataset.emperors, southMing: dataset.southMing }),
        'public, max-age=3600',
      );
    }

    if (path.startsWith('/api/')) {
      return json(JSON.stringify({ error: '未知接口' }), 'public, max-age=60');
    }

    // 其余路径交给静态资源（SPA 的 index.html）
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
