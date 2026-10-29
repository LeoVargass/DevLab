// El Mojón — menú digital
// Render de categorías, pestañas, búsqueda y scroll-spy.
// Scroll optimizado: nada que haga scrollIntoView sobre el documento,
// handlers de scroll con rAF, y el tab bar solo se mueve horizontalmente.

(() => {
  const data = window.MENU_DATA;
  if (!data) return;

  const money = (n) => '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 0 });

  // Iconos (categorías y placeholder de imagen).
  const icons = {
    empanada: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a8 8 0 0 1 16 0c0 2-2 4-8 4s-8-2-8-4z"/><path d="M6 14c1 1 2 1.5 3 1.5M10 14c.6 1 1.4 1.5 2 1.5M14 14c.6 1 1.4 1.5 2 1.5"/></svg>',
    pot:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/><path d="M2 10h20M8 7c0-2 1-3 1-3M12 7c0-2 1-3 1-3M16 7c0-2 1-3 1-3"/></svg>',
    crescent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15a8 8 0 1 1-6-13 7 7 0 0 0 6 13z"/></svg>',
    pizza:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 22h20z"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="12" cy="18" r="1"/></svg>',
    cake:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16v-6H4z"/><path d="M4 14c2 2 4 2 6 0s4 2 6 0 4 2 4 2M8 7V3M12 7V3M16 7V3M6 11h12v3H6z"/></svg>',
    glass:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l-1 10a5 5 0 0 1-10 0z"/><path d="M12 18v3M9 21h6"/></svg>',
    wine:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l-1 8a4 4 0 0 1-8 0z"/><path d="M12 15v6M8 21h8"/></svg>',
    beer:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h12v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M16 10h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3M8 11v6M12 11v6"/></svg>',
    plate:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/></svg>',
  };
  const icon = (k) => icons[k] || icons.plate;

  const toolbar = document.getElementById('toolbar');
  const tabsInner = document.getElementById('tabsInner');
  const menu = document.getElementById('menu');
  const emptyBanner = document.getElementById('emptyResults');
  const search = document.getElementById('search');
  const clear = document.getElementById('searchClear');
  const toTop = document.getElementById('toTop');

  // ─── Build tabs ─────────────────────────────────────────
  data.categories.forEach((cat, i) => {
    const btn = document.createElement('a');
    btn.href = '#cat-' + cat.id;
    btn.className = 'tab';
    btn.dataset.cat = cat.id;
    btn.setAttribute('aria-current', String(i === 0));
    btn.innerHTML = icon(cat.icon) + '<span>' + cat.name + '</span>';
    tabsInner.appendChild(btn);
  });

  // ─── Build sections ─────────────────────────────────────
  data.categories.forEach((cat) => {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'cat-' + cat.id;
    section.dataset.cat = cat.id;
    section.innerHTML = `<h2 class="section__title">${cat.name}</h2>`;

    cat.dishes.forEach((d) => {
      const article = document.createElement('article');
      article.className = 'dish';
      article.dataset.search = (d.name + ' ' + (d.desc || '')).toLowerCase();

      const media = d.img
        ? `<img src="${d.img}" alt="${d.name}" loading="lazy" decoding="async">`
        : icon(cat.icon);

      article.innerHTML = `
        <div class="dish__info">
          <h3 class="dish__name">
            ${d.name}
            ${d.badge ? `<span class="dish__badge">${d.badge}</span>` : ''}
          </h3>
          ${d.desc ? `<p class="dish__desc">${d.desc}</p>` : ''}
          <span class="dish__price">${money(d.price)}</span>
        </div>
        <div class="dish__media" aria-hidden="true">${media}</div>
      `;
      section.appendChild(article);
    });

    menu.insertBefore(section, emptyBanner);
  });

  // ─── Scroll helpers ─────────────────────────────────────
  const toolbarH = () => toolbar.getBoundingClientRect().height;

  function scrollToSection(id) {
    const target = document.getElementById('cat-' + id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - toolbarH() - 8;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // Scroll the horizontal tab bar WITHOUT touching page scroll.
  function centerChip(id, smooth = true) {
    const chip = tabsInner.querySelector(`.tab[data-cat="${id}"]`);
    if (!chip) return;
    const target = chip.offsetLeft - (tabsInner.clientWidth - chip.offsetWidth) / 2;
    tabsInner.scrollTo({ left: Math.max(0, target), behavior: smooth ? 'smooth' : 'auto' });
  }

  function setActive(id) {
    if (setActive.last === id) return;
    setActive.last = id;
    tabsInner.querySelectorAll('.tab').forEach((t) =>
      t.setAttribute('aria-current', String(t.dataset.cat === id))
    );
    centerChip(id);
  }

  // ─── Tab clicks ────────────────────────────────────────
  tabsInner.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const id = tab.dataset.cat;
      setActive(id);
      scrollToSection(id);
    });
  });

  // ─── rAF-throttled scroll handler + spy ────────────────
  const sections = Array.from(document.querySelectorAll('.section'));

  function updateSpy() {
    const threshold = toolbarH() + 24;
    let active = sections[0];
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top <= threshold) active = sec;
      else break;
    }
    if (active) setActive(active.dataset.cat);
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      toolbar.classList.toggle('is-stuck', y > 240);
      toTop.classList.toggle('is-visible', y > 600);
      updateSpy();
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // ─── Buscador ──────────────────────────────────────────
  let searchTimer;
  const applyFilter = () => {
    const q = search.value.trim().toLowerCase();
    clear.hidden = q.length === 0;
    let total = 0;
    sections.forEach((sec) => {
      let visible = 0;
      sec.querySelectorAll('.dish').forEach((d) => {
        const match = !q || d.dataset.search.includes(q);
        d.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      sec.style.display = visible === 0 && q ? 'none' : '';
      total += visible;
    });
    emptyBanner.hidden = total > 0 || !q;
  };
  search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applyFilter, 80);
  });
  clear.addEventListener('click', () => {
    search.value = '';
    applyFilter();
    search.focus();
  });

  // ─── Volver arriba ─────────────────────────────────────
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
