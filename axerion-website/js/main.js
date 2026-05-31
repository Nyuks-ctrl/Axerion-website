/* ─────────────────────────────────────
   Axerion (Pty) Ltd – Main JavaScript
   Authors: Comfort Minyuku & Tshegofatso Marema
   ───────────────────────────────────── */

/* ─── MOBILE MENU TOGGLE ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* ─── CONTACT FORM SUBMISSION ─── */
// TODO: Replace this with a real form handler (e.g. Formspree, EmailJS, or your own API endpoint)
function handleSubmit() {
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!fname || !email || !service || !message) {
    alert('Please fill in all required fields before sending.');
    return;
  }

  // --- Example: send to Formspree ---
  // fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ fname, email, service, message })
  // });

  const form = document.getElementById('contactForm');
  form.querySelectorAll('input, select, textarea, label, .form-row, .form-group').forEach(el => {
    el.style.display = 'none';
  });
  form.querySelector('.form-submit').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
}
