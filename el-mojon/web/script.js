// ──────────────────────────────────────────────────────────
// El Mojón · script
// Smooth scroll (Lenis), intro curtain, reveals,
// hero carousel, nav state, menu tabs, today hours.
// ──────────────────────────────────────────────────────────

(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Intro curtain
  const intro = document.getElementById('intro');
  const hero = document.querySelector('.hero');
  const dismissIntro = () => {
    if (!intro) return;
    intro.classList.add('is-done');
    hero && hero.classList.add('is-ready');
    setTimeout(() => intro && intro.remove(), 1000);
  };
  if (prefersReduced) {
    requestAnimationFrame(dismissIntro);
  } else {
    setTimeout(dismissIntro, 1500);
  }

  // Lenis smooth scroll
  let lenis;
  if (window.Lenis && !prefersReduced) {
    lenis = new window.Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      smoothWheel: true,
    });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  // Anchor click → smooth scroll (via Lenis if present)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = id === '#top' ? document.body : document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: id === '#top' ? 0 : -70, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // close mobile nav
      document.getElementById('nav')?.classList.remove('is-menu-open');
      document.getElementById('burger')?.setAttribute('aria-expanded', 'false');
    });
  });

  // Nav scroll state
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile burger
  const burger = document.getElementById('burger');
  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-menu-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  // Intersection reveals
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Hero carousel (cross-fade)
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length > 1 && !prefersReduced) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 5500);
  }

  // Menu tabs
  const tabs = document.querySelectorAll('.menu__tabs button');
  const panels = document.querySelectorAll('.menu__panel');
  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      tabs.forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
      panels.forEach((p) => {
        const active = p.dataset.panel === key;
        p.classList.toggle('is-active', active);
        if (active) {
          p.removeAttribute('hidden');
        } else {
          p.setAttribute('hidden', '');
        }
      });
    });
  });

  // Today's hours (quick helper)
  const hoursEl = document.getElementById('todayHours');
  if (hoursEl) {
    const d = new Date().getDay(); // 0 = Sun … 6 = Sat
    let txt;
    if (d === 1) txt = 'Cerrado hoy';
    else if (d === 0) txt = '11:00 – 15:00';
    else txt = '11:00 – 15:00  ·  20:00 – 00:00';
    hoursEl.textContent = txt;
  }

  // Subtle hero parallax on pointer move
  const heroEl = document.querySelector('.hero');
  const heroMedia = document.querySelector('.hero__media');
  if (heroEl && heroMedia && !prefersReduced && window.matchMedia('(hover:hover)').matches) {
    heroEl.addEventListener('pointermove', (e) => {
      const r = heroEl.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroMedia.style.transform = `translate3d(${x * -14}px, ${y * -14}px, 0) scale(1.04)`;
    });
    heroEl.addEventListener('pointerleave', () => {
      heroMedia.style.transform = '';
    });
  }
})();
