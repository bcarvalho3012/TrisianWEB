/* Trisian home and secondary pages: the motion layer (design/v3). No libraries.
   CSS draws; this file adds classes and numbers. Reveals on scroll, the hero entrance, the product render's rebuild loop,
   the pinned three-truths story, the accordion, two stat counters, the nav's scrolled state and the zero-markup row pairing.
   Under prefers-reduced-motion: no loops, no counters, no entrance; every scene rests on its end frame. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIO = 'IntersectionObserver' in window;
  const ease = t => 1 - Math.pow(1 - t, 3);

  const watch = (els, cb, threshold = 0.15) => {
    if (!hasIO) { els.forEach(e => cb(e)); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { cb(en.target); io.unobserve(en.target); } }), { threshold });
    els.forEach(e => io.observe(e));
  };

  /* ---------- enter-view: reveals and staggers ---------- */
  $$('[data-stagger]').forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--i', Math.min(i, 7))));
  const tall = e => e.getBoundingClientRect().height > innerHeight * 3;
  const blocks = $$('[data-reveal],[data-stagger],.cert');
  const onIn = e => { e.classList.add('in'); if (e.hasAttribute('data-stagger')) setTimeout(() => e.classList.add('settled'), 1600); };
  watch(blocks.filter(e => !tall(e)), onIn, 0.2);
  watch(blocks.filter(tall), onIn, 0.05);
  watch($$('.anim,[data-viz]'), e => e.classList.add('in'), 0.35);

  /* ---------- hero: the line, the paragraph and the render come in once ---------- */
  const hero = $('.hero');
  if (hero) {
    $$('.hero-in > *, .hero-row > *', hero).forEach((c, i) => c.style.setProperty('--i', i));
    setTimeout(() => hero.classList.add('go'), 60);
  }

  /* ---------- scenes that play once, as they scroll into view (the comparison, one partner) ---------- */
  const playScene = c => { c.classList.remove('play'); void c.getBoundingClientRect(); c.classList.add('play'); };
  const onceScenes = $$('.scene-card[data-scene],.versus[data-scene]').filter(c => !c.hasAttribute('data-loop') && !c.closest('.story-visual'));
  if (reduce || !hasIO) onceScenes.forEach(c => c.classList.add('play'));
  else onceScenes.forEach(c => watch([c], playScene, c.getBoundingClientRect().height > innerHeight * 0.85 ? 0.25 : 0.5));
  if (!reduce) onceScenes.filter(c => c.hasAttribute('data-once')).forEach(c => c.addEventListener('click', e => { if (c.classList.contains('play') && !e.target.closest('.s3-row')) playScene(c); }));
  $$('[data-replay]').forEach(b => b.addEventListener('click', () => { const t = $(b.dataset.replay); if (t) playScene(t); }));

  /* ---------- the product render: the clean-start cycle, looped while on screen, six cycles then rest ---------- */
  const CYCLE = { 'a-clean-start': 5000, 'same-foundation': 4200, 'zero-markup': 4400 };
  const MAX_CYCLES = 6;
  $$('[data-loop]').forEach(el => {
    if (reduce) { el.classList.add('play'); return; }
    const ms = CYCLE[el.dataset.scene] || 5000;
    let running = false, count = 0, timer = 0, visible = !hasIO, hover = false;
    const cycle = () => { el.classList.remove('play', 'is-rest'); void el.getBoundingClientRect(); el.classList.add('play'); count++; timer = setTimeout(() => { running = false; sync(); }, ms + 200); };
    const sync = () => {
      if (count >= MAX_CYCLES) { el.classList.add('is-rest'); return; }
      if (visible && !hover && !running) { running = true; cycle(); }
    };
    if (hasIO) new IntersectionObserver(es => es.forEach(en => { visible = en.intersectionRatio > 0.4; sync(); }), { threshold: [0, 0.4] }).observe(el);
    else sync();
    el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
    el.addEventListener('pointerleave', () => { hover = false; sync(); });
  });

  /* ---------- the three truths: a pinned stage on wide screens; the scene for the truth in view is the one showing ----------
     The figures live in .story-visual. Under 900px they move back beside their copy, so the phone reads top to bottom. */
  const story = $('.story');
  if (story) {
    const figs = $$('.story-visual .ans-viz', story), arts = $$('.story-copy .ans', story);
    const narrow = matchMedia('(max-width: 899px)');
    const place = () => {
      if (narrow.matches) figs.forEach(f => { const a = $('#' + f.dataset.for); if (a && f.parentElement !== a) a.appendChild(f); })
      else { const stage = $('.story-stage', story); figs.forEach(f => { if (f.parentElement !== stage) stage.appendChild(f); }); }
    };
    place(); narrow.addEventListener('change', place);
    const played = new Set();
    const activate = i => {
      figs.forEach((f, k) => f.classList.toggle('is-active', k === i));
      const sc = $('.scene-card[data-scene]', figs[i]);
      if (sc && !played.has(sc)) { played.add(sc); if (reduce) sc.classList.add('play'); else playScene(sc); }
    };
    if (hasIO && !narrow.matches) {
      const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) activate(arts.indexOf(en.target)); }), { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
      arts.forEach(a => io.observe(a));
      activate(0);
    } else {
      figs.forEach(f => f.classList.add('is-active'));
      figs.forEach(f => { const sc = $('.scene-card[data-scene]', f); if (sc) { if (reduce || !hasIO) sc.classList.add('play'); else watch([sc], playScene, 0.5); } });
    }
    if (!reduce) figs.forEach(f => { const sc = $('.scene-card[data-scene]', f); if (sc) sc.addEventListener('click', e => { if (!e.target.closest('.s3-row')) playScene(sc); }); });
  }

  /* ---------- questions: open and close with the rows technique (css), not a height tween ---------- */
  $$('.faq-list details').forEach(d => {
    const sum = $('summary', d);
    sum.addEventListener('click', e => {
      if (reduce) return;
      e.preventDefault();
      if (!d.open) { d.open = true; requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('is-open'))); }
      else { d.classList.remove('is-open'); setTimeout(() => { d.open = false; }, 300); }
    });
  });

  /* ---------- counters (who we are), run once. Only the numbers marked data-count count. ---------- */
  const grid = $('#rcGrid');
  if (grid && !reduce) {
    const nums = $$('[data-count]', grid);
    nums.forEach(n => { n.textContent = '0'; });
    watch([grid], () => {
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / 1200);
        nums.forEach(n => { n.textContent = Math.round(ease(p) * +n.dataset.count); });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 0.4);
  }

  /* ---------- scene 3: hover, focus or tap a row and its pair lights on the other sheet ---------- */
  const zm = $('.sc-markup');
  if (zm) {
    const set = i => { [0, 1, 2].forEach(n => zm.classList.toggle('pair-' + n, n === i)); };
    $$('.s3-row', zm).forEach(r => {
      const i = +r.dataset.row;
      r.addEventListener('pointerenter', () => set(i)); r.addEventListener('pointerleave', () => set(-1));
      r.addEventListener('focus', () => set(i)); r.addEventListener('blur', () => set(-1));
      r.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') set(i); });
    });
    document.addEventListener('pointerdown', e => { if (!e.target.closest || !e.target.closest('.s3-row')) set(-1); }, { passive: true });
  }

  /* ---------- scroll: the nav's state and progress bar, and which section the nav link points at ---------- */
  const navWrap = $('#navWrap');
  const navLinks = $$('.nav-links a').filter(a => /#(seats|offer)$/.test(a.getAttribute('href') || ''));
  const secOf = id => (id === 'seats' ? [$('#seats')] : [$('#offer'), $('#partner')]).filter(Boolean);
  let queued = false;
  const frame = () => {
    queued = false;
    const y = scrollY, H = innerHeight, max = document.documentElement.scrollHeight - H;
    if (navWrap) { navWrap.classList.toggle('scrolled', y > 24); navWrap.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : 0); }
    navLinks.forEach(a => {
      const id = a.getAttribute('href').split('#')[1];
      const on = secOf(id).some(s => { const r = s.getBoundingClientRect(); return r.top < H * .4 && r.bottom > H * .4; });
      a.classList.toggle('is-here', on);
    });
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  frame();

  /* ---------- the orphan rule: only a browser without text-wrap: pretty gets this fallback ---------- */
  if (!(window.CSS && CSS.supports && CSS.supports('text-wrap', 'pretty'))) {
    $$('main p, main li, footer p').forEach(el => {
      if (el.children.length || el.closest('.box,.tile,.seat,.stair-card,.person,.hs,.scatter,.cert')) return;
      el.innerHTML = el.innerHTML.replace(/(\S+)\s+(\S+)\s*$/, '$1&nbsp;$2');
    });
  }
})();
