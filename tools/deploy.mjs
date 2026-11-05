/**
 * 部署脚本：把站点个人配置从环境变量读出来，注入为 Worker 的 vars。
 *
 * 这样代码与仓库里不写死备案号、仓库地址等个人配置，换人部署只需换环境变量。
 *
 * 用法：
 *   SITE_BEIAN="苏ICP备XXXXXXXX号-1" SITE_GITHUB="https://github.com/xxx/repo" npm run deploy
 *
 * 未设置的环境变量不会注入，页面对应的链接会保持隐藏（见 public/app.js 的 renderConfig）。
 * 本地开发时把同样的键值写进 .dev.vars（已被 .gitignore 忽略）即可。
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** 允许注入到 Worker 的配置项 */
const VAR_KEYS = ['SITE_BEIAN', 'SITE_GITHUB'];

const args = [];
for (const key of VAR_KEYS) {
  const value = process.env[key];
  if (value) {
    args.push(`--var=${key}:${value}`);
    console.log(`注入 ${key}`);
  }
}
if (!args.length) {
  console.log('未检测到 SITE_* 环境变量，页脚将不显示备案号与仓库链接。');
}

const wrangler = path.join(ROOT, 'node_modules', 'wrangler', 'bin', 'wrangler.js');
const res = spawnSync(process.execPath, [wrangler, 'deploy', ...args], {
  cwd: ROOT,
  stdio: 'inherit',
});
process.exit(res.status ?? 1);
