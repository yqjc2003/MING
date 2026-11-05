# 大明 · 帝王世系与官职品级

把 `doc/明朝帝王世系&官职品级.xlsx` 解析成一个可检索的网页：十七帝与南明年号谥号、
二十三房字辈诗、皇族子嗣、宗室封爵与文武散阶勋阶、科举取士，
以及六部诸司至厂卫王府的五百余条职官品级。

站点跑在 Cloudflare Workers 上：静态页面由 Workers Assets 提供，
Worker 负责 `/api/*` 的数据与检索接口。

线上：<https://ming.yqjc2003.workers.dev>

## 目录

```
doc/明朝帝王世系&官职品级.xlsx   数据源
tools/extract-xlsx.mjs          零依赖解析器 → src/data/ming.ts
tools/deploy.mjs                读环境变量注入站点配置并部署
src/data/ming.ts                生成的数据集（勿手工编辑）
src/index.ts                    Worker：/api/data /api/stats /api/search …
public/                         页面：index.html · styles.css · app.js
```

## 本地运行

```bash
npm install
cp .dev.vars.example .dev.vars   # 填入自己的配置（可留空）
npm run dev                      # http://localhost:8787
```

## 重新解析 Excel

```bash
npm run extract      # doc/*.xlsx → src/data/ming.ts
```

解析器是自带的（`tools/extract-xlsx.mjs`）：内置最小 ZIP 读取器与 SpreadsheetML 解析，
不依赖任何第三方库，也不执行 xlsx 内的任何内容。源表并非规整表格——八张官职表、
一张科举表、地方官表、帝王世系、字辈与子嗣各自以合并单元格并排铺开，
因此按区块逐段抽取，再归一为统一的六字段行结构（官属 / 官职 / 品级 / 人数 / 隶属 / 职事）。

## 站点配置走环境变量

备案号、源码仓库地址这类**个人配置不写在代码里**，由部署时的环境变量注入：

| 变量 | 用途 |
| --- | --- |
| `SITE_GITHUB` | 页脚 GitHub 图标链接（同时供「勘误」链接到 `issues/new`），留空则不显示 |
| `SITE_BAIDU_ID` | 百度统计站点 ID，留空则不加载 `hm.baidu.com` 统计脚本 |

```bash
SITE_GITHUB="https://github.com/xxx/repo" \
SITE_BAIDU_ID="b80b7cc6dc04b7948b52dbf3cc2ccc10" \
npm run deploy
```

`tools/deploy.mjs` 把这些变量作为 Worker 的 vars 传下去；
前端通过 `GET /api/config` 读取，取不到时对应元素保持隐藏，站点仍可独立使用。
本地开发时把同样的键值写进 `.dev.vars`（已 gitignore）。

### 百度统计

统计代码装在 `public/index.html` 的 `<head>` 里（全站只有这一处页面模板，装一次全站生效），
站点 ID 从 `SITE_BAIDU_ID` 读，不写死在代码里：

```js
var _hmt = _hmt || [];
fetch('/api/config').then(r => r.json()).then(cfg => {
  if (!cfg.baidu) return;                    // 未配置则不加载
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?' + cfg.baidu;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
});
```

未配置 `SITE_BAIDU_ID` 时不会向百度发起任何请求。

## 接口

| 路径 | 说明 |
| --- | --- |
| `GET /api/data` | 完整数据集 |
| `GET /api/stats` | 各部分条目数 |
| `GET /api/config` | 站点个人配置（仓库地址、统计 ID） |
| `GET /api/search?q=指挥使` | 跨帝王、官职、皇族的检索 |
| `GET /api/sections/:id` | 单个官职区块 |
| `GET /api/emperors` | 帝王与南明列表 |

## 部署

```bash
npx wrangler login     # 或设置 CLOUDFLARE_API_TOKEN
npm run deploy
```

`wrangler.jsonc` 中 `assets.directory` 指向 `public/`，
`run_worker_first: ["/api/*"]` 让接口走 Worker，其余路径走静态资源。

## 配色

取自明代宫廷：朱漆 `#A62A20`、泥金 `#BE9640`、宣纸 `#EFE8D8`、乌木 `#16110D`。
官品服色依明代补子制度分为绯、青、黄、素四档，用来标出品级高低。

## 许可

本项目采用 Unlicense 释出至公有领域（见 `LICENSE`）。
