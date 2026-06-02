/* ─── CUSTOM CURSOR (desktop only) ─── */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  function animRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();
}

/* ─── NAV SCROLL STATE ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── HAMBURGER MENU ─── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  nav.classList.toggle('menu-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  nav.classList.remove('menu-open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ─── PARTICLES ─── */
const particlesEl = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    top: ${20 + Math.random() * 60}%;
    --dur: ${6 + Math.random() * 8}s;
    --delay: -${Math.random() * 10}s;
    width: ${1 + Math.random() * 3}px;
    height: ${1 + Math.random() * 3}px;
    opacity: ${0.3 + Math.random() * 0.5};
  `;
  particlesEl.appendChild(p);
}

/* ─── SCROLL REVEAL ─── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(r => revealObserver.observe(r));

/* ─── PROCESS TIMELINE GLOW ─── */
const glowEl        = document.getElementById('processGlow');
const processSection = document.getElementById('process');
const glowObserver  = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) glowEl.classList.add('active');
}, { threshold: 0.3 });
glowObserver.observe(processSection);

/* ─── SMOOTH ANCHOR SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});