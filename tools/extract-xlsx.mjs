/**
 * 从 doc/明朝帝王世系&官职品级.xlsx 抽取结构化数据集，生成 src/data/ming.ts
 *
 * 零依赖：内置最小 ZIP 读取器 + SpreadsheetML 解析。
 * 用法：npm run extract
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const XLSX = path.join(ROOT, 'doc', '明朝帝王世系&官职品级.xlsx');
const OUT = path.join(ROOT, 'src', 'data', 'ming.ts');

/** 生成文件顶部的类型声明 */
const HEADER = `/**
 * 明朝帝王世系与官职品级数据集
 *
 * 本文件由 \`npm run extract\` 自动生成，请勿手工编辑。
 * 数据源：doc/明朝帝王世系&官职品级.xlsx
 */
export interface Emperor {
  /** 庙号 */
  temple: string;
  /** 名讳 */
  name: string;
  /** 年号 */
  era: string;
  /** 在位 */
  reign: string;
  /** 谥号 */
  posthumous: string;
}

export interface GenerationPoem {
  /** 王府支派 */
  branch: string;
  /** 字辈诗 */
  verse: string;
}

export interface EmperorChildren {
  /** 皇帝（含名讳） */
  emperor: string;
  /** 年号 */
  era: string;
  /** 子女条目 */
  items: string[];
}

export interface Peerage {
  title: string;
  /** 封爵序列 */
  order: string;
}

export interface RankList {
  id: string;
  title: string;
  group: string;
  /** 品级 → 散官/勋阶名称 */
  grades: string[];
}

export interface ExamStage {
  stage: string;
  text: string;
}

export interface ExamRow {
  stage: string;
  place: string;
  time: string;
  level: string;
  result: string;
}

export interface OfficialRow {
  /** 官属 */
  group: string;
  /** 官职 */
  office: string;
  /** 品级 */
  rank: string;
  /** 人数 */
  count: string;
  /** 隶属 */
  affiliation: string;
  /** 职事 */
  duty: string;
}

export interface OfficialSection {
  id: string;
  title: string;
  region: string;
  columns: string[];
  rows: OfficialRow[];
}

export interface MingDataset {
  meta: { title: string; source: string };
  emperors: Emperor[];
  southMing: Emperor[];
  generationPoems: GenerationPoem[];
  children: EmperorChildren[];
  peerages: Peerage[];
  rankLists: RankList[];
  examStages: ExamStage[];
  examRows: ExamRow[];
  officialSections: OfficialSection[];
}

`;

// ---------------------------------------------------------------- ZIP 读取
function readZipEntries(buf) {
  // 定位 End of Central Directory
  let eocd = -1;
  for (let i = buf.length - 22; i >= 0 && i > buf.length - 22 - 65536; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('不是合法的 ZIP 文件');
  const count = buf.readUInt16LE(eocd + 10);
  let off = buf.readUInt32LE(eocd + 16);
  const files = new Map();
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(off) !== 0x02014b50) throw new Error('中央目录损坏');
    const method = buf.readUInt16LE(off + 10);
    const compSize = buf.readUInt32LE(off + 20);
    const nameLen = buf.readUInt16LE(off + 28);
    const extraLen = buf.readUInt16LE(off + 30);
    const commentLen = buf.readUInt16LE(off + 32);
    const localOff = buf.readUInt32LE(off + 42);
    const name = buf.toString('utf8', off + 46, off + 46 + nameLen);
    files.set(name, { method, compSize, localOff });
    off += 46 + nameLen + extraLen + commentLen;
  }
  const read = (name) => {
    const e = files.get(name);
    if (!e) throw new Error(`ZIP 中缺少 ${name}`);
    const lo = e.localOff;
    if (buf.readUInt32LE(lo) !== 0x04034b50) throw new Error('本地文件头损坏');
    const nameLen = buf.readUInt16LE(lo + 26);
    const extraLen = buf.readUInt16LE(lo + 28);
    const start = lo + 30 + nameLen + extraLen;
    const raw = buf.subarray(start, start + e.compSize);
    return e.method === 0 ? raw : zlib.inflateRawSync(raw);
  };
  return { names: [...files.keys()], read };
}

// ------------------------------------------------------------ SpreadsheetML
const unescapeXml = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
   .replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
   .replace(/&amp;/g, '&');

function colIndex(ref) {
  let letters = '';
  for (const ch of ref) { if (ch >= 'A' && ch <= 'Z') letters += ch; else break; }
  let n = 0;
  for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n - 1;
}

function parseWorkbook(zip) {
  const shared = [];
  const ssXml = zip.read('xl/sharedStrings.xml').toString('utf8');
  for (const si of ssXml.matchAll(/<si>([\s\S]*?)<\/si>/g)) {
    let text = '';
    for (const t of si[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)) text += t[1];
    shared.push(unescapeXml(text));
  }

  const sheetXml = zip.read('xl/worksheets/sheet1.xml').toString('utf8');
  const grid = [];
  for (const rm of sheetXml.matchAll(/<row[^>]*\br="(\d+)"[^>]*>([\s\S]*?)<\/row>/g)) {
    const arr = grid[Number(rm[1]) - 1] || (grid[Number(rm[1]) - 1] = []);
    const cellRe = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g;
    for (const cm of rm[2].matchAll(cellRe)) {
      const attrs = cm[1];
      const inner = cm[2] ?? '';
      const refM = /r="([A-Z]+\d+)"/.exec(attrs);
      if (!refM) continue;
      const type = (/t="([^"]+)"/.exec(attrs) || [, 'n'])[1];
      let value = '';
      if (type === 'inlineStr') {
        for (const t of inner.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)) value += t[1];
        value = unescapeXml(value);
      } else {
        const raw = (/<v>([\s\S]*?)<\/v>/.exec(inner) || [, ''])[1];
        value = type === 's' ? (shared[Number(raw)] ?? '') : unescapeXml(raw);
      }
      arr[colIndex(refM[1])] = value;
    }
  }
  return { grid };
}

// ------------------------------------------------------------------ 抽取
const zip = readZipEntries(fs.readFileSync(XLSX));
const { grid } = parseWorkbook(zip);

const G = (r, c) => (grid[r - 1] || [])[c] ?? '';
const clean = (s) => (s ?? '').replace(/\r/g, '').trim();
const lines = (s) => clean(s).split('\n').map((x) => x.trim()).filter(Boolean);

/**
 * 读取「官职表」区块。
 * map 依次给出 官属/官职/品级/人数/隶属/职事 各自所在的列号，null 表示该表无此列。
 */
function readOfficialTable(from, to, map) {
  const rows = [];
  let group = '';
  for (let r = from; r <= to; r++) {
    const raw = map.map((c) => (c == null ? '' : G(r, c)));
    if (raw.every((v) => !clean(v))) continue;
    const g = clean(raw[0]);
    if (g) group = g;
    const row = {
      group,
      office: clean(raw[1]),
      rank: clean(raw[2]),
      count: clean(raw[3]),
      affiliation: clean(raw[4]),
      duty: lines(raw[5]).join('\n'),
    };
    if (row.office || row.rank || row.count || row.duty) rows.push(row);
  }
  return rows;
}

const FULL = [0, 1, 2, 3, 4, 5];
const SECTION_DEFS = [
  { id: 'assistants', title: '皇帝辅臣', region: '中央官制 · 辅弼', map: FULL, from: 4, to: 47 },
  { id: 'central', title: '中央政府', region: '中央官制 · 六部与诸司', map: FULL, from: 51, to: 403 },
  { id: 'local', title: '地方行政', region: '地方官制 · 布政按察与府州县', map: [6, 7, 8, 9, 10, 11], from: 51, to: 132 },
  { id: 'jimi', title: '羁縻州司', region: '地方官制 · 土司', map: [6, 7, 8, 9, 10, 11], from: 136, to: 163 },
  { id: 'garrison', title: '卫所', region: '地方官制 · 卫所', map: [6, 7, 8, 9, 10, 11], from: 166, to: 189 },
  { id: 'military', title: '军事机构', region: '军事卫戍 · 京师与王府', map: [12, 13, 14, 15, 16, 17], from: 51, to: 81 },
  { id: 'factories', title: '厂卫', region: '军事卫戍 · 厂卫特务', map: [12, 13, 14, 15, 16, 17], from: 86, to: 107 },
  { id: 'regional-officers', title: '派驻地方官', region: '军事卫戍 · 派驻', map: [12, 13, 14, null, null, 15], from: 112, to: 132 },
];

const officialSections = SECTION_DEFS.map((s) => ({
  id: s.id,
  title: s.title,
  region: s.region,
  columns: ['官职', '品级', '人数', '隶属', '职事'],
  rows: readOfficialTable(s.from, s.to, s.map),
}));

const readEmperors = (from, to) => {
  const list = [];
  for (let r = from; r <= to; r++) {
    const temple = clean(G(r, 19));
    if (!temple) continue;
    list.push({
      temple,
      name: clean(G(r, 20)),
      era: clean(G(r, 21)),
      reign: clean(G(r, 22)),
      posthumous: lines(G(r, 23)).join(' '),
    });
  }
  return list;
};

const emperors = readEmperors(4, 20);
const southMing = readEmperors(24, 28);

const generationPoems = [];
for (let r = 31; r <= 60; r++) {
  const v = clean(G(r, 19));
  if (!v) continue;
  const m = /^(.+?)房[:：]\s*(.+)$/.exec(v);
  generationPoems.push({ branch: m ? m[1] : v, verse: m ? m[2] : '' });
}

// 标题行（AC 合并至 AF）写「XX子嗣--年号」，其后的行在 AC~AF 四列平铺子女条目
const children = [];
let current = null;
for (let r = 1; r <= 60; r++) {
  const ac = clean(G(r, 28));
  const cells = [28, 29, 30, 31].map((c) => clean(G(r, c))).filter(Boolean);
  if (ac.includes('子嗣')) {
    const m = /^(.+?)子嗣[-—]+(.+)$/.exec(ac);
    current = { emperor: m ? m[1].trim() : ac, era: m ? m[2].trim() : '', items: [] };
    children.push(current);
    continue;
  }
  if (current && cells.length) current.items.push(...cells.map((t) => t.replace(/\s+/g, ' ').trim()));
}

const peerages = [
  { title: '皇子', order: clean(G(12, 7)) },
  { title: '皇女', order: clean(G(13, 7)) },
];

const rankLists = [
  { id: 'wen-shan', title: '文散阶', group: '散官', grades: [] },
  { id: 'wu-shan', title: '武散阶', group: '散官', grades: [] },
  { id: 'wen-xun', title: '文勋十级', group: '勋级', grades: [] },
  { id: 'wu-xun', title: '武勋十二级', group: '勋级', grades: [] },
];
for (let r = 16; r <= 33; r++) {
  const w = clean(G(r, 6)), b = clean(G(r, 9));
  if (w) rankLists[0].grades.push(w);
  if (b) rankLists[1].grades.push(b);
}
for (let r = 36; r <= 47; r++) {
  const w = clean(G(r, 6)), b = clean(G(r, 9));
  if (w) rankLists[2].grades.push(w);
  if (b) rankLists[3].grades.push(b);
}

const examStages = [
  { from: 29, to: 34, stage: '殿试' },
  { from: 36, to: 37, stage: '会试' },
  { from: 39, to: 41, stage: '乡试' },
  { from: 43, to: 47, stage: '童试' },
].map(({ from, to, stage }) => ({ stage, text: lines(G(from, 11)).join('\n') }));

const examRows = [];
for (let r = 29; r <= 47; r++) {
  const place = clean(G(r, 12));
  const time = clean(G(r, 13));
  const level = clean(G(r, 14));
  const result = clean(G(r, 16));
  if (!place && !time && !level && !result) continue;
  const stage = examStages.find((s) => {
    const range = { 殿试: [29, 34], 会试: [36, 37], 乡试: [39, 41], 童试: [43, 47] }[s.stage];
    return r >= range[0] && r <= range[1];
  })?.stage ?? '';
  examRows.push({ stage, place, time, level, result });
}

const dataset = {
  meta: {
    title: '大明 · 帝王世系与官职品级',
    source: 'doc/明朝帝王世系&官职品级.xlsx',
  },
  emperors,
  southMing,
  generationPoems,
  children,
  peerages,
  rankLists,
  examStages,
  examRows,
  officialSections,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${HEADER}export const dataset: MingDataset = ${JSON.stringify(dataset, null, 1)};\n`, 'utf8');

const officialCount = officialSections.reduce((a, s) => a + s.rows.length, 0);
console.log('✓ src/data/ming.ts');
console.log(`  帝王 ${emperors.length} · 南明 ${southMing.length} · 字辈 ${generationPoems.length} · 子嗣 ${children.length} 组`);
console.log(`  官职条目 ${officialCount} · 科举 ${examRows.length} 行`);
console.log(`  ${(fs.statSync(OUT).size / 1024).toFixed(1)} KB`);
