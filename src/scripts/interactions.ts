/**
 * All client-side interactivity for the portfolio. Everything here is
 * progressive enhancement: the page is fully readable without JS.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ---------- Live Ottawa clock ---------- */
function initClock() {
  const el = document.querySelector<HTMLTimeElement>('[data-clock]');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: el.dataset.tz || undefined,
  });
  const tick = () => {
    const now = new Date();
    el.textContent = fmt.format(now);
    el.dateTime = now.toISOString();
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- Arrow that follows the cursor ---------- */
function initArrow() {
  const el = document.querySelector<HTMLElement>('[data-arrow]');
  if (!el || reduceMotion) return;
  let frame = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const deg = (Math.atan2(e.clientY - r.top - r.height / 2, e.clientX - r.left - r.width / 2) * 180) / Math.PI;
        el.style.transform = `rotate(${deg}deg)`;
      });
    },
    { passive: true },
  );
}

/* ---------- Scroll reveal + about curve ---------- */
function drawCurve(host: Element) {
  const curve = host.querySelector('[data-curve]');
  if (curve) setTimeout(() => curve.classList.add('drawn'), 250);
}

function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-curve]').forEach((c) => c.classList.add('drawn'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove('is-hidden');
        drawCurve(entry.target);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.15 },
  );
  els.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      drawCurve(el);
      return;
    }
    el.classList.add('is-hidden');
    // Enable the transition only after the hidden state has applied.
    requestAnimationFrame(() => el.classList.add('reveal-ready'));
    io.observe(el);
  });
}

/* ---------- Magnetic buttons ---------- */
function initMagnet() {
  if (!finePointer || reduceMotion) return;
  document.querySelectorAll<HTMLElement>('[data-magnet]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener('mouseleave', () => (el.style.transform = ''));
  });
}

/* ---------- Project logo parallax ---------- */
function initParallax() {
  if (!finePointer || reduceMotion) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = `translate(${x * 28}px, ${y * 22}px) rotate(${x * 10}deg) scale(1.12)`;
    });
    el.addEventListener('mouseleave', () => (img.style.transform = ''));
  });
}

/* ---------- "How I work" stripes ---------- */
function initStripes() {
  const list = document.querySelector('[data-stripes]');
  if (!list) return;
  const stripes = [...list.querySelectorAll<HTMLElement>('.stripe')];
  const activate = (target: HTMLElement) => {
    stripes.forEach((s) => {
      const on = s === target;
      s.classList.toggle('active', on);
      s.querySelector('button')?.setAttribute('aria-expanded', String(on));
    });
  };
  stripes.forEach((s) => {
    s.addEventListener('mouseenter', () => finePointer && activate(s));
    s.querySelector('button')?.addEventListener('click', () => activate(s));
  });
}

/* ---------- Draggable chips ---------- */
function initDrag() {
  document.querySelectorAll<HTMLElement>('[data-drag]').forEach((el) => {
    let x = 0;
    let y = 0;
    el.addEventListener('pointerdown', (e) => {
      const sx = e.clientX - x;
      const sy = e.clientY - y;
      el.style.zIndex = '5';
      el.style.cursor = 'grabbing';
      el.setPointerCapture(e.pointerId);
      const move = (ev: PointerEvent) => {
        x = ev.clientX - sx;
        y = ev.clientY - sy;
        el.style.transform = `translate(${x}px,${y}px) ${getComputedStyle(el).getPropertyValue('--rot')} scale(1.08)`;
      };
      const up = () => {
        el.style.cursor = '';
        el.style.transform = `translate(${x}px,${y}px) ${getComputedStyle(el).getPropertyValue('--rot')}`;
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerup', up);
        el.removeEventListener('pointercancel', up);
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    });
  });
}

/* ---------- Copy email ---------- */
function initCopyEmail() {
  const btn = document.querySelector<HTMLAnchorElement>('[data-copy-email]');
  const toast = document.querySelector<HTMLElement>('[data-toast]');
  const label = btn?.querySelector<HTMLElement>('[data-copy-label]');
  if (!btn || !toast || !label || !navigator.clipboard) return;
  let timer = 0;
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(btn.dataset.copyEmail ?? '');
    } catch {
      window.location.href = btn.href; // fall back to mailto
      return;
    }
    label.textContent = 'Copied ✓';
    toast.hidden = false;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      toast.hidden = true;
      label.textContent = 'Copy';
    }, 1800);
  });
}

initClock();
initArrow();
initReveal();
initMagnet();
initParallax();
initStripes();
initDrag();
initCopyEmail();
