/**
 * 部署脚本：把站点个人配置从环境变量读出来，注入为 Worker 的 vars。
 *
 * 这样代码与仓库里不写死仓库地址、统计 ID 等个人配置，换人部署只需换环境变量。
 *
 * 用法：
 *   SITE_GITHUB="https://github.com/xxx/repo" \
 *   SITE_BAIDU_ID="b80b7cc6dc04b7948b52dbf3cc2ccc10" npm run deploy
 *
 * 未设置的环境变量不会注入：页脚链接保持隐藏（见 public/app.js 的 renderConfig），
 * 百度统计脚本也不会加载（见 public/index.html 的 <head>）。
 * 本地开发时把同样的键值写进 .dev.vars（已被 .gitignore 忽略）即可。
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** 允许注入到 Worker 的配置项 */
const VAR_KEYS = ['SITE_GITHUB', 'SITE_BAIDU_ID'];

const args = [];
for (const key of VAR_KEYS) {
  const value = process.env[key];
  if (value) {
    args.push(`--var=${key}:${value}`);
    console.log(`注入 ${key}`);
  }
}
if (!args.length) {
  console.log('未检测到 SITE_* 环境变量，页脚将不显示仓库链接，也不会加载统计脚本。');
}

const wrangler = path.join(ROOT, 'node_modules', 'wrangler', 'bin', 'wrangler.js');
const res = spawnSync(process.execPath, [wrangler, 'deploy', ...args], {
  cwd: ROOT,
  stdio: 'inherit',
});
process.exit(res.status ?? 1);
