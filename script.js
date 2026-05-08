/* ──────────────────────────────────────────────────────────
   CUSTOM CURSOR
   ────────────────────────────────────────────────────────── */
const cur = document.getElementById('cur');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a,button,.cap-item,.project-item').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('lh'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('lh'));
});

/* ──────────────────────────────────────────────────────────
   GLOW · BACKGROUND CURSOR HALO
   ────────────────────────────────────────────────────────── */
const glow = document.getElementById('glow');
let gX = innerWidth * .5, gY = innerHeight * .5, gTX = gX, gTY = gY;
let bgX = 50;
let bgY = 0;
const updateBgLighting = () => {
  document.documentElement.style.setProperty('--bg-x', `${bgX}%`);
  document.documentElement.style.setProperty('--bg-y', `${bgY}%`);
};
updateBgLighting();

/* ──────────────────────────────────────────────────────────
   PROJECT IMAGE REVEAL · cursor-following thumbnail
   - position:fixed, so coords are pure viewport (clientX/Y)
   - seeded at cursor on mouseenter to prevent fly-in from corner
   - lerped at 10% per frame inside loop()
   ────────────────────────────────────────────────────────── */
let activeImg = null;
let rvCX = 0, rvCY = 0, rvTX = 0, rvTY = 0;
const RW = 130, RH = 90; /* half of 260×180 */

document.querySelectorAll('.project-item').forEach(item => {
  const img = item.querySelector('.proj-reveal-img');
  if (!img) return;

  item.addEventListener('mouseenter', e => {
    activeImg = img;
    rvCX = rvTX = e.clientX;
    rvCY = rvTY = e.clientY;
    img.style.left = (rvCX - RW) + 'px';
    img.style.top  = (rvCY - RH) + 'px';
  });
  item.addEventListener('mouseleave', () => { activeImg = null; });
});

/* ──────────────────────────────────────────────────────────
   UNIFIED MOUSEMOVE · feeds glow + reveal targets
   ────────────────────────────────────────────────────────── */
document.addEventListener('mousemove', e => {
  gTX = e.clientX; gTY = e.clientY;
  bgX = Math.max(20, Math.min(80, (e.clientX / window.innerWidth) * 100));
  bgY = Math.max(0, Math.min(20, (e.clientY / window.innerHeight) * 16));
  updateBgLighting();
  if (activeImg) { rvTX = e.clientX; rvTY = e.clientY; }
});

/* ──────────────────────────────────────────────────────────
   SMOOTH SCROLL · ease 0.08
   ────────────────────────────────────────────────────────── */
let sC = 0, sT = 0;
const ease = 0.08;
const maxS = () => document.documentElement.scrollHeight - innerHeight;
window.addEventListener('wheel', e => {
  e.preventDefault();
  sT = Math.max(0, Math.min(sT + e.deltaY, maxS()));
}, { passive: false });
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); sT = Math.max(0, Math.min(el.offsetTop - 80, maxS())); }
  });
});

/* ──────────────────────────────────────────────────────────
   CAT CLOCK · UTC+2
   ────────────────────────────────────────────────────────── */
const labTime = document.getElementById('lab-time');
const tick = () => {
  const cat = new Date(Date.now() + 2 * 3600 * 1000);
  labTime.textContent =
    [cat.getUTCHours(), cat.getUTCMinutes(), cat.getUTCSeconds()]
    .map(v => String(v).padStart(2,'0')).join(':') + ' CAT';
};
tick(); setInterval(tick, 1000);

/* Hide the fixed MALAWI/clock badge once the footer scrolls into view
   so it stops overlapping the footer copyright text. */
const lab = document.getElementById('lab');
const footerEl = document.querySelector('footer');
if (lab && footerEl && 'IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      lab.style.opacity = e.isIntersecting ? '0' : '';
      lab.style.transition = 'opacity .25s ease';
    });
  }, { threshold: 0.05 }).observe(footerEl);
}

/* ──────────────────────────────────────────────────────────
   RAF LOOP · scroll · glow · reveal · one unified pass
   ────────────────────────────────────────────────────────── */
(function loop() {
  const d = sT - sC;
  if (Math.abs(d) > 0.08) { sC += d * ease; window.scrollTo(0, sC); }

  gX += (gTX - gX) * 0.04;
  gY += (gTY - gY) * 0.04;
  glow.style.left = gX + 'px';
  glow.style.top  = gY + 'px';

  if (activeImg) {
    rvCX += (rvTX - rvCX) * 0.1;
    rvCY += (rvTY - rvCY) * 0.1;
    activeImg.style.left = (rvCX - RW) + 'px';
    activeImg.style.top  = (rvCY - RH) + 'px';
  }

  requestAnimationFrame(loop);
})();

/* Background brightness parallax (scroll-triggered) */
const setBgBrightness = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? (window.scrollY / max) : 0;
  bgY = Math.max(0, Math.min(20, p * 16));
  updateBgLighting();
};
window.addEventListener('scroll', setBgBrightness, { passive: true });
setBgBrightness();
