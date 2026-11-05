/* 大明 · 帝王世系与官职品级 —— 前端交互 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const CN_NUM = '一二三四五六七八九';
const RANK_TIERS = [
  { id: 0, label: '超品' },
  { id: 1, label: '一品·绯' },
  { id: 2, label: '二至三品·绯' },
  { id: 3, label: '四至七品·青' },
  { id: 4, label: '八至九品·黄' },
  { id: 5, label: '未入流·素' },
];

/** 按明代补子服色把品级归入六档 */
function rankTier(rank) {
  if (!rank) return 5;
  if (rank.includes('超品')) return 0;
  if (rank.includes('未入流') || rank.includes('无品级')) return 5;
  const m = /([正从])?([一二三四五六七八九])品/.exec(rank);
  if (!m) return 5;
  const n = CN_NUM.indexOf(m[2]) + 1;
  if (n === 1) return 1;
  if (n <= 3) return 2;
  if (n <= 7) return 3;
  return 4;
}

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

/* ───────────────────────────── 分页切换 ───────────────────────────── */

const tabs = $$('.tab');
const panels = {
  lineage: $('#panel-lineage'),
  princes: $('#panel-princes'),
  officials: $('#panel-officials'),
  ranks: $('#panel-ranks'),
  exams: $('#panel-exams'),
};

function showPanel(name, focus = false) {
  for (const tab of tabs) {
    const on = tab.dataset.panel === name;
    tab.setAttribute('aria-selected', String(on));
    panels[tab.dataset.panel].hidden = !on;
  }
  if (focus) panels[name].focus({ preventScroll: true });
  history.replaceState(null, '', `#${name}`);
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => showPanel(tab.dataset.panel));
  tab.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(tab);
    if (e.key === 'ArrowRight') tabs[(i + 1) % tabs.length].focus();
    if (e.key === 'ArrowLeft') tabs[(i - 1 + tabs.length) % tabs.length].focus();
  });
});

/* ───────────────────────────── 数据载入 ───────────────────────────── */

let DATA = null;

async function boot() {
  try {
    const res = await fetch('/api/data', { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    DATA = await res.json();
  } catch (err) {
    document.querySelector('main').innerHTML =
      `<section class="panel"><div class="empty-note">数据载入失败：${err.message}。请稍后重试。</div></section>`;
    return;
  }

  renderStats();
  renderReignStrip();
  renderEmperors();
  renderPoems();
  renderPrinces();
  renderOfficials();
  renderRanks();
  renderExams();
  renderConfig();
  wireSearch();

  const hash = location.hash.slice(1);
  if (panels[hash]) showPanel(hash);
}

async function renderStats() {
  try {
    const s = await (await fetch('/api/stats')).json();
    for (const [key, value] of Object.entries(s)) {
      const node = $(`[data-stat="${key}"]`);
      if (node) node.textContent = value;
    }
  } catch { /* 统计失败不影响主体 */ }
}

/**
 * 页脚个人配置：源码仓库地址由部署时的环境变量提供，
 * 未配置时对应链接保持隐藏，站点仍可独立使用。
 */
async function renderConfig() {
  let cfg;
  try {
    cfg = window.__siteConfig
      ? await window.__siteConfig
      : await (await fetch('/api/config')).json();
  } catch {
    return;
  }
  const gh = $('#footer-github');
  if (gh && cfg.github) {
    gh.href = cfg.github;
    gh.hidden = false;
  }
  // 勘误：指向仓库的新建 Issue 页面
  const repo = (cfg.github || '').trim().replace(/\/+$/, '').replace(/\.git$/, '');
  const errata = $('#footer-errata');
  if (errata && repo) {
    errata.href = `${repo}/issues/new`;
    errata.hidden = false;
  }
}

/* ───────────────────────────── 帝王印带 ───────────────────────────── */

function renderReignStrip() {
  const strip = $('#reign-strip');
  const all = [
    ...DATA.emperors.map((e) => ({ ...e, dynasty: 'ming' })),
    ...DATA.southMing.map((e) => ({ ...e, dynasty: 'nanming' })),
  ];
  for (const e of all) {
    const btn = el('button', 'reign');
    btn.type = 'button';
    btn.dataset.dynasty = e.dynasty;
    btn.dataset.temple = e.temple;
    btn.title = `${e.temple} ${e.name}　${e.era}　${e.posthumous}`;
    btn.append(el('span', 'reign-seal', e.temple), el('span', 'reign-era', e.era));
    btn.addEventListener('click', () => {
      showPanel('lineage');
      const row = $(`#emperors-table tbody tr[data-temple="${CSS.escape(e.temple)}"]`);
      if (row) flash(row);
    });
    strip.append(btn);
  }
}

function flash(node) {
  node.classList.add('is-hit');
  node.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => node.classList.remove('is-hit'), 2400);
}

/* ───────────────────────────── 帝王世系 ───────────────────────────── */

function emperorRow(e) {
  const tr = el('tr');
  tr.dataset.temple = e.temple;
  tr.append(
    el('td', 'temple-cell', e.temple),
    el('td', null, e.name),
    el('td', 'era-cell', e.era),
    el('td', 'reign-cell', e.reign),
    el('td', 'posthumous-cell', e.posthumous),
  );
  return tr;
}

function renderEmperors() {
  const body = $('#emperors-table tbody');
  for (const e of DATA.emperors) body.append(emperorRow(e));
  const south = $('#south-table tbody');
  for (const e of DATA.southMing) south.append(emperorRow(e));
}

function renderPoems() {
  const list = $('#poem-list');
  for (const p of DATA.generationPoems) {
    const li = el('li', 'poem');
    li.append(el('span', 'poem-branch', p.branch + '房'), el('span', 'poem-verse', p.verse));
    list.append(li);
  }
}

/* ───────────────────────────── 皇族子嗣 ───────────────────────────── */

function renderPrinces() {
  const wrap = $('#prince-groups');
  DATA.children.forEach((c, idx) => {
    const group = el('div', 'prince-group');
    group.dataset.open = idx < 3 ? 'true' : 'false';

    const head = el('button', 'prince-head');
    head.type = 'button';
    head.setAttribute('aria-expanded', group.dataset.open);
    head.append(
      el('span', 'prince-caret', '▸'),
      el('span', 'prince-name', c.emperor),
      el('span', 'prince-era', c.era),
      el('span', 'prince-count', `子女 ${c.items.length}`),
    );
    head.addEventListener('click', () => {
      const open = group.dataset.open !== 'true';
      group.dataset.open = String(open);
      head.setAttribute('aria-expanded', String(open));
    });

    const items = el('div', 'prince-items');
    for (const raw of c.items) {
      const m = /^(\S+)\s*(.*)$/.exec(raw);
      const ord = m ? m[1] : '';
      const rest = m ? m[2] : raw;
      const parts = rest.split(/\s+/);
      const who = parts.shift() || '';
      const title = parts.join(' ');
      const chip = el('div', 'prince-item');
      chip.dataset.raw = raw;
      chip.append(el('span', 'ord', ord), el('span', 'who', who));
      if (title) chip.append(el('span', 'title', title));
      items.append(chip);
    }

    group.append(head, items);
    wrap.append(group);
  });
}

/* ───────────────────────────── 官职品级 ───────────────────────────── */

const state = { section: 'all', rank: 'all', text: '' };

function renderOfficials() {
  const sectionSelect = $('#filter-section');
  sectionSelect.append(new Option('全部区块', 'all'));
  for (const s of DATA.officialSections) {
    sectionSelect.append(new Option(`${s.title}（${s.rows.length}）`, s.id));
  }

  const ranks = [...new Set(DATA.officialSections.flatMap((s) => s.rows.map((r) => r.rank).filter(Boolean)))];
  ranks.sort((a, b) => rankTier(a) - rankTier(b) || a.localeCompare(b, 'zh'));
  const rankSelect = $('#filter-rank');
  rankSelect.append(new Option('全部品级', 'all'));
  for (const r of ranks) rankSelect.append(new Option(r, r));

  const host = $('#official-sections');
  for (const s of DATA.officialSections) {
    const sec = el('section', 'official-section');
    sec.dataset.section = s.id;

    const head = el('div', 'section-head');
    head.append(
      el('h3', 'section-title', s.title),
      el('span', 'section-region', s.region),
      el('span', 'section-count', ''),
    );
    sec.append(head);

    const table = el('div', 'official-table');
    const headRow = el('div', 'official-head');
    for (const c of s.columns) headRow.append(el('span', null, c));
    table.append(headRow);

    const groups = [];
    for (const row of s.rows) {
      let g = groups.at(-1);
      if (!g || g.name !== row.group) {
        g = { name: row.group, rows: [] };
        groups.push(g);
      }
      g.rows.push(row);
    }

    let offset = 0;
    for (const g of groups) {
      const groupBox = el('div', 'official-group');
      groupBox.dataset.open = 'true';

      const gh = el('button', 'group-head');
      gh.type = 'button';
      gh.setAttribute('aria-expanded', 'true');
      gh.append(
        el('span', 'group-caret', '▾'),
        el('span', 'group-name', g.name || '未分类'),
        el('span', 'group-total', `${g.rows.length} 职`),
      );
      gh.addEventListener('click', () => {
        const open = groupBox.dataset.open !== 'true';
        groupBox.dataset.open = String(open);
        gh.setAttribute('aria-expanded', String(open));
      });

      const rows = el('div', 'official-rows');
      for (const row of g.rows) {
        rows.append(officialRow(row, s.id, offset++));
      }
      groupBox.append(gh, rows);
      table.append(groupBox);
    }
    sec.append(table);
    host.append(sec);
  }

  sectionSelect.addEventListener('change', () => { state.section = sectionSelect.value; applyFilters(); });
  rankSelect.addEventListener('change', () => { state.rank = rankSelect.value; applyFilters(); });
  $('#filter-text').addEventListener('input', (e) => { state.text = e.target.value.trim(); applyFilters(); });
  applyFilters();
}

function officialRow(row, sectionId, index) {
  const wrap = el('div', 'official-row');
  wrap.dataset.section = sectionId;
  wrap.dataset.index = String(index);
  wrap.dataset.office = row.office;
  wrap.dataset.rank = row.rank;
  wrap.dataset.affiliation = row.affiliation;

  const rank = el('span', `rank-badge rank-${rankTier(row.rank)}`, row.rank || '—');
  wrap.append(el('span', 'office', row.office || '—'));
  wrap.append(rank);
  wrap.append(el('span', 'count', row.count || ''));
  wrap.append(el('span', 'affiliation', row.affiliation || ''));

  if (row.duty) {
    const duty = el('div', 'duty', row.duty);
    duty.hidden = true;
    const toggle = el('button', 'duty-toggle', '职事 ▾');
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = duty.hidden;
      duty.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '职事 ▴' : '职事 ▾';
    });
    wrap.append(toggle, duty);
  }
  return wrap;
}

function applyFilters() {
  const q = state.text.toLowerCase();
  let shown = 0;
  let shownSections = 0;

  for (const sec of $$('.official-section')) {
    let secShown = 0;
    for (const row of $$('.official-row', sec)) {
      const text = `${row.dataset.office} ${row.dataset.rank} ${row.dataset.affiliation} ${row.textContent}`.toLowerCase();
      const ok =
        (state.section === 'all' || row.dataset.section === state.section) &&
        (state.rank === 'all' || row.dataset.rank === state.rank) &&
        (!q || text.includes(q));
      row.style.display = ok ? '' : 'none';
      if (ok) secShown++;
    }
    // 整组被过滤掉时，连同组标题一并隐藏
    for (const groupBox of $$('.official-group', sec)) {
      const any = $$('.official-row', groupBox).some((r) => r.style.display !== 'none');
      groupBox.style.display = any ? '' : 'none';
    }
    sec.style.display = secShown ? '' : 'none';
    if (secShown) shownSections++;
    shown += secShown;
    const count = $('.section-count', sec);
    if (count) count.textContent = `${secShown} 职`;
  }

  $('#filter-count').textContent = `合 ${shown} 职，分布于 ${shownSections} 个区块`;
}

/* ───────────────────────────── 封爵散阶 ───────────────────────────── */

function renderRanks() {
  const host = $('#peerages');
  for (const p of DATA.peerages) {
    const box = el('div', 'peerage');
    box.append(el('h4', 'peerage-title', p.title));
    const chain = el('div', 'chain');
    const steps = p.order.split('→').map((s) => s.trim()).filter(Boolean);
    steps.forEach((s, i) => {
      if (i) chain.append(el('span', 'chain-arrow', '→'));
      chain.append(el('span', 'chain-step', s));
    });
    box.append(chain);
    host.append(box);
  }

  const lists = $('#rank-lists');
  for (const l of DATA.rankLists) {
    const box = el('div', 'rank-list');
    const head = el('div', 'rank-list-head');
    head.append(el('span', null, l.title), el('small', null, l.group));
    const ol = el('ol');
    for (const g of l.grades) {
      const li = el('li');
      const m = /^([正从]?[一二三四五六七八九]品|超品|未入流)\s*(.*)$/.exec(g);
      li.append(el('span', 'grade', m ? m[1] : ''), el('span', 'title-text', m ? m[2] : g));
      ol.append(li);
    }
    box.append(head, ol);
    lists.append(box);
  }
}

/* ───────────────────────────── 科举取士 ───────────────────────────── */

function renderExams() {
  const ladder = $('#exam-ladder');
  for (const s of DATA.examStages) {
    const li = el('li', 'ladder-step');
    const [head, ...rest] = s.text.split('\n');
    li.append(el('span', 'ladder-name', head), el('span', 'ladder-desc', rest.join(' ')));
    ladder.append(li);
  }

  const body = $('#exam-table tbody');
  for (const r of DATA.examRows) {
    const tr = el('tr');
    tr.dataset.stage = r.stage;
    tr.append(
      el('td', null, r.place),
      el('td', null, r.time),
      el('td', null, r.level),
      el('td', 'posthumous-cell', r.result),
    );
    body.append(tr);
  }
}

/* ───────────────────────────── 全局检索 ───────────────────────────── */

function wireSearch() {
  const input = $('#global-search');
  const box = $('#search-results');
  let timer = null;
  let seq = 0;

  const close = () => { box.hidden = true; box.innerHTML = ''; };

  input.addEventListener('input', () => {
    clearTimeout(timer);
    const q = input.value.trim();
    if (!q) { close(); return; }
    timer = setTimeout(async () => {
      const mine = ++seq;
      try {
        const res = await (await fetch(`/api/search?q=${encodeURIComponent(q)}`)).json();
        if (mine !== seq) return;
        renderHits(res.results || []);
      } catch { close(); }
    }, 180);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { close(); input.blur(); }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) close();
  });

  function renderHits(hits) {
    box.innerHTML = '';
    if (!hits.length) {
      box.append(el('div', 'search-empty', '没有匹配的帝王、官职或皇族。'));
      box.hidden = false;
      return;
    }
    for (const h of hits) {
      const btn = el('button', 'search-hit');
      btn.type = 'button';
      btn.append(
        el('span', 'search-hit-title', h.title),
        el('span', 'search-hit-sub', h.subtitle),
      );
      if (h.detail) btn.append(el('span', 'search-hit-sub', h.detail.slice(0, 60)));
      btn.addEventListener('click', () => {
        close();
        input.value = '';
        gotoHit(h);
      });
      box.append(btn);
    }
    box.hidden = false;
  }

  function gotoHit(hit) {
    if (hit.type === 'prince' && hit.ref?.group) {
      showPanel('princes');
      const group = $$('.prince-group').find((g) => {
        const name = $('.prince-name', g);
        return name && name.textContent.trim() === hit.ref.group;
      });
      if (!group) return;
      group.dataset.open = 'true';
      $('.prince-head', group)?.setAttribute('aria-expanded', 'true');
      const chip = hit.ref.child
        ? $$('.prince-item', group).find((c) => c.dataset.raw === hit.ref.child)
        : null;
      if (chip) flash(chip);
      else flash(group);
      return;
    }
    if (hit.type === 'emperor' && hit.ref?.temple) {
      showPanel('lineage');
      const row = $(`#emperors-table tbody tr[data-temple="${CSS.escape(hit.ref.temple)}"]`);
      if (row) { flash(row); row.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      return;
    }
    if (hit.type === 'official' && hit.ref?.sectionId) {
      showPanel('officials');
      state.section = hit.ref.sectionId;
      state.rank = 'all';
      state.text = '';
      $('#filter-section').value = hit.ref.sectionId;
      $('#filter-rank').value = 'all';
      $('#filter-text').value = '';
      applyFilters();
      const row = $(`.official-row[data-section="${hit.ref.sectionId}"][data-index="${hit.ref.index}"]`);
      if (row) {
        const group = row.closest('.official-group');
        if (group) group.dataset.open = 'true';
        flash(row);
      }
    }
  }
}

boot();
