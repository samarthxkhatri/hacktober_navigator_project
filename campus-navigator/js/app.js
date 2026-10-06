/* Acropolis Campus Walk — app logic (no build step, no dependencies). */
(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const NODES = window.LOCATIONS;
  const AREAS = window.AREAS;
  const byId = Object.fromEntries(NODES.map(n => [n.id, n]));

  /* ------------------------------------------------------------------ graph */
  const OPP = { forward: 'back', back: 'forward', left: 'right', right: 'left', enter: 'back' };
  const DEFAULT_AT = { forward: [50, 72], back: [50, 90], left: [18, 78], right: [82, 78], enter: [50, 66] };
  const links = {};
  NODES.forEach(n => (links[n.id] = []));

  NODES.forEach(n => (n.links || []).forEach(l => {
    if (!byId[l.to]) { console.error(`[data] ${n.id} links to unknown "${l.to}"`); return; }
    links[n.id].push({ to: l.to, dir: l.dir, at: l.at || DEFAULT_AT[l.dir] });
  }));
  NODES.forEach(n => (n.links || []).forEach(l => {
    if (!byId[l.to] || links[l.to].some(x => x.to === n.id)) return;
    const dir = l.back || OPP[l.dir];
    links[l.to].push({ to: n.id, dir, at: l.backAt || DEFAULT_AT[dir] });
  }));

  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('campusArrowOverrides') || '{}'); } catch (e) {}
  const overrides = () => Object.assign({}, window.ARROW_OVERRIDES || {}, saved);
  const posOf = (from, l) => overrides()[from + '>' + l.to] || l.at;

  function findRoute(a, b) {
    const prev = { [a]: null }, q = [a];
    while (q.length) {
      const c = q.shift();
      if (c === b) break;
      for (const l of links[c]) if (!(l.to in prev)) { prev[l.to] = c; q.push(l.to); }
    }
    if (!(b in prev)) return null;
    const path = [];
    for (let c = b; c !== null; c = prev[c]) path.push(c);
    return path.reverse();
  }

  /* ------------------------------------------------------------------ images */
  const dims = {}, cache = {};
  function load(id) {
    return cache[id] || (cache[id] = new Promise(res => {
      const im = new Image();
      im.onload = () => { dims[id] = [im.naturalWidth, im.naturalHeight]; res(im); };
      im.onerror = () => { console.warn('Missing photo for', id, byId[id].photo); res(null); };
      im.src = byId[id].photo;
    }));
  }
  const preloadNeighbours = id => links[id].forEach(l => load(l.to));

  /* ------------------------------------------------------------------ state */
  const stage = $('#stage'), layers = $('#layers'), backdrop = $('#backdrop');
  let current = null, layer = null, busy = false;
  let dest = null, route = null, walking = null, editing = false, mapArea = 'campus';

  /* ------------------------------------------------------------------ layer + arrows */
  function sizeFrame(frame, id) {
    const [w, h] = dims[id] || [3, 4];
    const k = Math.min(stage.clientWidth / w, stage.clientHeight / h);
    frame.style.width = w * k + 'px';
    frame.style.height = h * k + 'px';
    frame.style.setProperty('--u', w * k + 'px');
  }

  const ARROW_SVG = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L94 58 L67 58 L67 94 L33 94 L33 58 L6 58 Z"/></svg>';

  function nextStep() {
    if (!route || !current) return null;
    const i = route.indexOf(current);
    return i >= 0 && i < route.length - 1 ? route[i + 1] : null;
  }

  function buildArrows(frame, id) {
    frame.querySelectorAll('.arrow').forEach(a => a.remove());
    const step = nextStep();
    links[id].forEach(l => {
      const [x, y] = posOf(id, l);
      const b = document.createElement('button');
      b.className = `arrow dir-${l.dir}`;
      if (dest) b.classList.add(l.to === step ? 'route' : 'dim');
      b.style.left = x + '%'; b.style.top = y + '%';
      b.dataset.to = l.to; b.dataset.dir = l.dir;
      b.setAttribute('aria-label', `${l.dir === 'enter' ? 'Enter' : 'Go ' + l.dir}: ${byId[l.to].name}`);
      b.innerHTML = `<span class="glyph">${ARROW_SVG}</span><span class="tag"></span>`;
      b.querySelector('.tag').textContent = byId[l.to].name;
      b.addEventListener('click', e => { if (!editing) go(l.to, l.dir, [x, y]); else e.preventDefault(); });
      b.addEventListener('pointerdown', e => editing && startDrag(e, b, id, l));
      frame.appendChild(b);
    });
  }

  function makeLayer(id) {
    const wrap = document.createElement('div');
    wrap.className = 'layer';
    const frame = document.createElement('div');
    frame.className = 'frame';
    const img = document.createElement('img');
    img.src = byId[id].photo; img.alt = byId[id].name; img.draggable = false;
    frame.appendChild(img);
    wrap.appendChild(frame);
    sizeFrame(frame, id);
    buildArrows(frame, id);
    layers.appendChild(wrap);
    return { wrap, frame };
  }

  /* ------------------------------------------------------------------ movement */
  async function go(id, dir, at, instant) {
    if (busy || id === current) return;
    busy = true;
    await load(id);
    const old = layer, prevId = current;
    current = id;
    if (dest) route = findRoute(current, dest);   // re-route if you wander off the path
    const next = makeLayer(id);

    backdrop.style.backgroundImage = `url("${byId[id].photo}")`;

    if (old && !instant && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const zoomOut = dir === 'back';
      const z = { forward: 1.55, enter: 2.1, left: 1.35, right: 1.35, back: .82 }[dir] || 1.4;
      const [ox, oy] = at || [50, 60];
      old.frame.classList.add('leaving');
      old.frame.style.transformOrigin = `${ox}% ${oy}%`;
      const dur = 700, ease = 'cubic-bezier(.55,.05,.3,1)';
      const a1 = old.frame.animate(
        [{ transform: 'scale(1)', opacity: 1 }, { transform: `scale(${z})`, opacity: 0 }],
        { duration: dur, easing: ease, fill: 'forwards' });
      next.frame.animate(
        [{ transform: `scale(${zoomOut ? 1.25 : .9})`, opacity: 0 }, { transform: 'scale(1)', opacity: 1 }],
        { duration: dur, easing: ease, fill: 'backwards' });
      await a1.finished.catch(() => {});
    }
    if (old) old.wrap.remove();
    layer = next;
    busy = false;

    mapArea = byId[id].area;
    refreshHud();
    preloadNeighbours(id);
    if (dest && current === dest) arrive();
    else if (walking) scheduleWalk();
    return prevId;
  }

  function arrive() {
    const name = byId[dest].name;
    stopWalking();
    $('#bannerTitle').textContent = `You’ve arrived at ${name}`;
    $('#bannerSub').textContent = 'Enjoy the walk — pick another place any time.';
    $('#banner').classList.add('arrived');
    $('#autoBtn').hidden = true;
    toast(`✓ Arrived: ${name}`);
    setTimeout(() => { if (dest === current) cancelNav(); }, 4200);
  }

  /* ------------------------------------------------------------------ navigation mode */
  function startNav(id) {
    closeAll();
    if (id === current) { toast('You’re already here'); return; }
    const r = findRoute(current, id);
    if (!r) { toast('No walkable route found yet'); return; }
    dest = id; route = r;
    $('#banner').classList.remove('arrived');
    $('#autoBtn').hidden = false;
    buildArrows(layer.frame, current);
    mapArea = byId[current].area;
    refreshHud();
  }
  function cancelNav() {
    dest = null; route = null; stopWalking();
    $('#banner').classList.remove('arrived');
    if (layer) buildArrows(layer.frame, current);
    refreshHud();
  }
  function scheduleWalk() {
    clearTimeout(walking);
    walking = setTimeout(() => {
      const n = nextStep(); if (!n) return stopWalking();
      const l = links[current].find(x => x.to === n);
      go(n, l.dir, posOf(current, l));
    }, 900);
  }
  function toggleWalk() {
    if (walking) return stopWalking();
    if (!dest) return;
    walking = true; $('#autoBtn').textContent = 'Pause'; scheduleWalk();
  }
  function stopWalking() { clearTimeout(walking); walking = null; $('#autoBtn').textContent = 'Walk me there'; }

  /* ------------------------------------------------------------------ HUD */
  function refreshHud() {
    const n = byId[current];
    $('#locName').textContent = n.name;
    $('#locArea').textContent = AREAS[n.area].label;
    const banner = $('#banner');
    if (dest && !banner.classList.contains('arrived')) {
      const left = route ? route.length - 1 : 0;
      banner.hidden = false;
      $('#bannerTitle').textContent = `Heading to ${byId[dest].name}`;
      $('#bannerSub').textContent = `${left} step${left === 1 ? '' : 's'} left — follow the yellow arrow`;
    } else if (!dest) banner.hidden = true;
    renderMap();
    renderPlaces();
    if (document.body.classList.contains('mode-walk')) {
      document.title = `${n.name} · Acropolis Campus Walk`;
      history.replaceState(null, '', '#' + current);
    }
  }

  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.hidden = false;
    t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 3200);
  }

  /* ------------------------------------------------------------------ mini map */
  const SVGNS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs = {}, parent) => {
    const e = document.createElementNS(SVGNS, tag);
    Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
    parent && parent.appendChild(e); return e;
  };

  function renderTabs() {
    const wrap = $('#mapTabs'); wrap.innerHTML = '';
    Object.entries(AREAS).forEach(([key, a]) => {
      const b = document.createElement('button');
      b.textContent = a.label; b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(key === mapArea));
      b.onclick = () => { mapArea = key; renderMap(); };
      wrap.appendChild(b);
    });
  }

  function renderMap() {
    renderTabs();
    const svg = $('#map'); svg.innerHTML = '';
    const inArea = NODES.filter(n => n.area === mapArea);
    const routeEdges = new Set();
    if (route) for (let i = 0; i < route.length - 1; i++) routeEdges.add(route[i] + '|' + route[i + 1]), routeEdges.add(route[i + 1] + '|' + route[i]);
    const routeSet = new Set(route || []);

    const drawn = new Set();
    inArea.forEach(n => links[n.id].forEach(l => {
      const m = byId[l.to]; if (m.area !== mapArea) return;
      const key = [n.id, m.id].sort().join('|'); if (drawn.has(key)) return; drawn.add(key);
      mk('line', { x1: n.map[0], y1: n.map[1], x2: m.map[0], y2: m.map[1], class: 'm-edge' + (routeEdges.has(n.id + '|' + m.id) ? ' route' : '') }, svg);
    }));
    // draw route edges on top
    svg.querySelectorAll('.m-edge.route').forEach(e => svg.appendChild(e));

    inArea.forEach(n => {
      const [x, y] = n.map;
      const cls = 'm-node' + (n.id === dest ? ' dest' : routeSet.has(n.id) ? ' route' : '');
      const g = mk('g', {}, svg);
      mk('title', {}, g).textContent = n.name;
      mk('circle', { cx: x, cy: y, r: 5, class: 'm-hit' }, g);
      mk('circle', { cx: x, cy: y, r: n.id === dest ? 3 : 2.3, class: cls }, g);
      const lab = mk('text', { x: x + 3.6, y: y + 1.1, class: 'm-label' + (n.id === current || n.id === dest ? ' on' : '') }, g);
      lab.textContent = n.name;
      g.style.cursor = 'pointer';
      g.addEventListener('click', e => { e.stopPropagation(); showCard(n.id); });
      g.addEventListener('mouseenter', () => lab.classList.add('on'));
      g.addEventListener('mouseleave', () => { if (n.id !== current && n.id !== dest) lab.classList.remove('on'); });
    });

    const cur = byId[current];
    if (cur && cur.area === mapArea) {
      mk('circle', { cx: cur.map[0], cy: cur.map[1], r: 2.3, class: 'm-ring' }, svg);
      mk('circle', { cx: cur.map[0], cy: cur.map[1], r: 2.6, class: 'm-you' }, svg);
    }
  }

  const mapWrap = $('#mapWrap');
  $('#mapExpand').onclick = () => {
    const big = mapWrap.classList.toggle('big');
    $('#mapExpand').setAttribute('aria-label', big ? 'Shrink map' : 'Expand map');
  };

  /* ------------------------------------------------------------------ info card */
  let cardId = null;
  function showCard(id) {
    cardId = id; const n = byId[id];
    $('#cardName').textContent = n.name;
    $('#cardArea').textContent = AREAS[n.area].label + (id === current ? ' · you are here' : '');
    $('#cardDesc').textContent = n.desc || '';
    const tg = $('#cardTags'); tg.innerHTML = '';
    (n.tags || []).forEach(t => { const s = document.createElement('span'); s.textContent = t; tg.appendChild(s); });
    $('#cardGo').hidden = id === current;
    $('#cardJump').hidden = id === current;
    $('#card').hidden = false;
  }
  $('#cardClose').onclick = () => ($('#card').hidden = true);
  $('#cardGo').onclick = () => { $('#card').hidden = true; mapWrap.classList.remove('big'); startNav(cardId); };
  $('#cardJump').onclick = () => { $('#card').hidden = true; mapWrap.classList.remove('big'); cancelNav(); go(cardId, 'forward', [50, 60]); };

  /* ------------------------------------------------------------------ places drawer */
  function renderPlaces() {
    const box = $('#placesList'); box.innerHTML = '';
    Object.entries(AREAS).forEach(([key, a]) => {
      const h = document.createElement('div'); h.className = 'p-group'; h.textContent = a.label; box.appendChild(h);
      NODES.filter(n => n.area === key).forEach(n => {
        const row = document.createElement('div'); row.className = 'p-row' + (n.id === current ? ' here' : '');
        const go1 = document.createElement('button'); go1.className = 'p-go'; go1.textContent = n.name;
        go1.title = 'Navigate here'; go1.onclick = () => (n.id === current ? showCard(n.id) : startNav(n.id));
        const jump = document.createElement('button'); jump.className = 'p-jump'; jump.textContent = 'Jump';
        jump.onclick = () => { closeAll(); cancelNav(); go(n.id, 'forward', [50, 60]); };
        row.append(go1, jump); box.appendChild(row);
      });
    });
  }
  $('#placesBtn').onclick = () => {
    const p = $('#places'); p.hidden = !p.hidden;
    $('#placesBtn').setAttribute('aria-expanded', String(!p.hidden));
  };
  $('#placesClose').onclick = () => { $('#places').hidden = true; };

  /* ------------------------------------------------------------------ search */
  const q = $('#q'), list = $('#results');
  let hits = [], sel = -1;
  const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function score(n, term) {
    const name = norm(n.name);
    if (name === term) return 100;
    if (name.startsWith(term)) return 90;
    if (name.split(' ').some(w => w.startsWith(term))) return 80;
    if (name.includes(term)) return 70;
    if ((n.keywords || []).some(k => norm(k).startsWith(term))) return 60;
    if ((n.keywords || []).some(k => norm(k).includes(term))) return 50;
    if (norm((n.tags || []).join(' ')).includes(term)) return 40;
    if (norm(n.desc || '').includes(term)) return 20;
    // every word matches somewhere
    const hay = norm([n.name, ...(n.keywords || []), ...(n.tags || [])].join(' '));
    if (term.split(' ').every(w => hay.includes(w))) return 30;
    return 0;
  }

  function renderResults() {
    const term = norm(q.value);
    hits = term
      ? NODES.map(n => ({ n, s: score(n, term) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 7).map(x => x.n)
      : [];
    list.innerHTML = '';
    if (!term) { list.hidden = true; q.setAttribute('aria-expanded', 'false'); return; }
    if (!hits.length) {
      list.innerHTML = '<li class="none">No place matches that yet</li>';
    } else {
      hits.forEach((n, i) => {
        const li = document.createElement('li'); li.setAttribute('role', 'option'); li.id = 'r' + i;
        const re = new RegExp('(' + term.split(' ').filter(Boolean).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
        li.innerHTML = `<span class="r-name">${esc(n.name).replace(re, '<mark>$1</mark>')}</span><span class="r-sub">${esc(AREAS[n.area].label)}${n.id === current ? ' · you are here' : ''}</span>`;
        li.addEventListener('mousedown', e => { e.preventDefault(); choose(i); });
        list.appendChild(li);
      });
    }
    sel = hits.length ? 0 : -1; markSel();
    list.hidden = false; q.setAttribute('aria-expanded', 'true');
  }
  function markSel() {
    [...list.children].forEach((li, i) => li.setAttribute('aria-selected', String(i === sel)));
    if (sel >= 0) q.setAttribute('aria-activedescendant', 'r' + sel); else q.removeAttribute('aria-activedescendant');
  }
  function choose(i) {
    const n = hits[i]; if (!n) return;
    q.value = ''; list.hidden = true; q.blur();
    startNav(n.id);
  }
  q.addEventListener('input', renderResults);
  q.addEventListener('focus', renderResults);
  q.addEventListener('blur', () => setTimeout(() => (list.hidden = true), 120));
  q.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(hits.length - 1, sel + 1); markSel(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); markSel(); }
    else if (e.key === 'Enter') { e.preventDefault(); choose(Math.max(sel, 0)); }
    else if (e.key === 'Escape') { q.value = ''; list.hidden = true; q.blur(); }
    e.stopPropagation();
  });

  /* ------------------------------------------------------------------ banner buttons */
  $('#cancelBtn').onclick = cancelNav;
  $('#autoBtn').onclick = toggleWalk;

  /* ------------------------------------------------------------------ keyboard */
  function closeAll() { $('#card').hidden = true; $('#places').hidden = true; mapWrap.classList.remove('big'); }
  const KEYDIR = { ArrowUp: 'forward', ArrowDown: 'back', ArrowLeft: 'left', ArrowRight: 'right', Enter: 'enter' };
  addEventListener('keydown', e => {
    if (document.body.classList.contains('mode-landing')) return;
    if (e.target.tagName === 'INPUT' || e.metaKey || e.ctrlKey) return;
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') return;
    if (e.key === '/') { e.preventDefault(); q.focus(); return; }
    if (e.key === 'Escape') { closeAll(); if (dest) cancelNav(); return; }
    if (e.key.toLowerCase() === 'e') { toggleEdit(); return; }
    const dir = KEYDIR[e.key];
    if (!dir || editing) return;
    const step = nextStep();
    const cands = links[current].filter(l => l.dir === dir);
    const l = cands.find(x => x.to === step) || cands[0];
    if (l) { e.preventDefault(); go(l.to, l.dir, posOf(current, l)); }
  });

  /* ------------------------------------------------------------------ view mode switching */
  function switchViewMode(mode, targetPhotoId) {
    if (mode === 'walk') {
      document.body.classList.remove('mode-landing');
      document.body.classList.add('mode-walk');
      window.scrollTo(0, 0);
      const toId = targetPhotoId || current || window.START_ID || NODES[0].id;
      if (layer && layer.frame) sizeFrame(layer.frame, current);
      if (toId !== current) {
        go(toId, 'forward', [50, 60]);
      } else {
        refreshHud();
      }
    } else {
      document.body.classList.remove('mode-walk');
      document.body.classList.add('mode-landing');
      stopWalking();
      document.title = 'Acropolis Campus Navigator · 2D Map & Virtual Walk';
      history.replaceState(null, '', window.location.pathname);
    }
  }

  window.switchViewMode = switchViewMode;
  window.CampusWalk = {
    jumpToPhoto: (photoId) => switchViewMode('walk', photoId),
    switchMode: switchViewMode
  };

  // Wire up Landing <-> Walk Buttons
  const homeBtn = $('#homeBtn');
  if (homeBtn) homeBtn.onclick = () => switchViewMode('landing');

  const navWalkBtn = $('#nav-btn-start-walk');
  if (navWalkBtn) navWalkBtn.onclick = () => switchViewMode('walk');

  const heroWalkBtn = $('#hero-btn-walk');
  if (heroWalkBtn) heroWalkBtn.onclick = () => switchViewMode('walk');

  /* ------------------------------------------------------------------ edit mode (drag arrows) */
  function toggleEdit(force) {
    editing = typeof force === 'boolean' ? force : !editing;
    document.body.classList.toggle('editing', editing);
    $('#edit').hidden = !editing;
    stopWalking();
    if (editing) toast('Edit mode: drag arrows into place');
  }
  function startDrag(e, el, fromId, l) {
    e.preventDefault();
    const frame = layer.frame;
    el.setPointerCapture(e.pointerId);
    const move = ev => {
      const r = frame.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((ev.clientX - r.left) / r.width) * 100));
      const y = Math.max(0, Math.min(100, ((ev.clientY - r.top) / r.height) * 100));
      el.style.left = x + '%'; el.style.top = y + '%';
      saved[fromId + '>' + l.to] = [Math.round(x), Math.round(y)];
    };
    const up = () => {
      el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up);
      try { localStorage.setItem('campusArrowOverrides', JSON.stringify(saved)); } catch (err) {}
    };
    el.addEventListener('pointermove', move); el.addEventListener('pointerup', up);
  }
  $('#editDone').onclick = () => toggleEdit(false);
  $('#editReset').onclick = () => {
    saved = {}; try { localStorage.removeItem('campusArrowOverrides'); } catch (e) {}
    buildArrows(layer.frame, current); toast('Arrow positions reset');
  };
  $('#editCopy').onclick = async () => {
    const json = JSON.stringify(saved, null, 2);
    try { await navigator.clipboard.writeText(json); toast('Copied — paste into ARROW_OVERRIDES in js/data.js'); }
    catch (e) { prompt('Copy this and paste into ARROW_OVERRIDES in js/data.js', json); }
  };

  /* ------------------------------------------------------------------ resize + boot */
  addEventListener('resize', () => { if (layer) sizeFrame(layer.frame, current); });
  stage.addEventListener('click', e => { if (e.target === stage || e.target.classList.contains('layer')) { $('#places').hidden = true; } });

  (async function boot() {
    const hash = location.hash.slice(1);
    const isDirectWalk = byId[hash] || hash === 'walk';
    const startId = byId[hash] ? hash : window.START_ID || NODES[0].id;

    if (isDirectWalk) {
      document.body.classList.remove('mode-landing');
      document.body.classList.add('mode-walk');
    } else {
      document.body.classList.remove('mode-walk');
      document.body.classList.add('mode-landing');
    }

    await load(startId);
    await go(startId, 'forward', null, true);
    $('#loader').classList.add('done');
    setTimeout(() => $('#loader').remove(), 600);
    NODES.forEach(n => load(n.id));   // warm the cache in the background
  })();
})();
