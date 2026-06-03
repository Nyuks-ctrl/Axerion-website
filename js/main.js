/* ============================================================
   AXERION — main.js
   Mobile-aware: touch events, reduced motion, pointer checks
   ============================================================ */

/* ─── UTILS ─── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = () => window.matchMedia('(pointer: coarse)').matches;

/* ─── HAMBURGER MENU ─── */
const hamburger     = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose   = document.getElementById('mobileClose');

function openMenu() {
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);

// Close when a nav link is tapped
mobileOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape key (keyboard / desktop)
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// Close on overlay background tap (outside the nav links)
mobileOverlay.addEventListener('click', e => {
  if (e.target === mobileOverlay) closeMenu();
});

/* ─── NAV SCROLL STATE ─── */
const navbar = document.querySelector('.navbar');

function handleNavScroll() {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(5, 8, 22, 0.97)'
    : 'rgba(8, 13, 31, 0.85)';
}

// Use passive listener — never blocks scroll on mobile
window.addEventListener('scroll', handleNavScroll, { passive: true });

/* ─── SMOOTH ANCHOR SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    // Respect reduced motion — jump instead of scroll
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });
});

/* ─── SCROLL REVEAL ─── */
// Skip animation entirely if user prefers reduced motion
const revealEls = document.querySelectorAll(
  '.why-card, .portfolio-item, .pipeline-step, .team-card, ' +
  '.about-left, .about-right, .contact-content, .contact-form, .section-header'
);

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        // Unobserve after reveal — saves memory on long pages
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,          // slightly lower — easier to trigger on small screens
    rootMargin: '0px 0px -40px 0px'  // reveal slightly before fully in view
  });

  revealEls.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(28px)';
    // Stagger cards in the same row on tablet/desktop
    el.style.transition = `opacity 0.7s ease ${i * 0.05}s, transform 0.7s ease ${i * 0.05}s`;
    observer.observe(el);
  });
} else {
  // Reduced motion: just make sure everything is visible
  revealEls.forEach(el => { el.style.opacity = '1'; });
}

/* ─── ACTIVE NAV LINK ON SCROLL ─── */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle(
          'active',
          a.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, {
  threshold: 0.35
});

sections.forEach(s => sectionObserver.observe(s));

/* ─── FORM SUBMIT FEEDBACK ─── */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.contact-btn');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#22c55e';
    btn.disabled = true;
    // Reset after 4s
    setTimeout(() => {
      btn.textContent = 'Start Your Project';
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 4000);
  });
}