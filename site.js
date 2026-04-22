'use strict';

/* ============================================================
   ACTIVE NAV — highlight link for visible section
   ============================================================ */
(function () {
  const sectionIds = ['home', 'about', 'services', 'who', 'expect', 'contact'];
  const links = document.querySelectorAll('.nav-link[data-section]');

  function update() {
    const threshold = window.innerHeight * 0.4;
    let current = 'home';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= threshold) current = id;
    }
    links.forEach(l => l.classList.toggle('active', l.dataset.section === current));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ============================================================
   HEADER — switch style when scrolled past hero
   ============================================================ */
(function () {
  const header = document.getElementById('site-header');
  const hero   = document.getElementById('home');
  if (!header || !hero) return;

  function update() {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    header.classList.toggle('scrolled', window.scrollY > heroBottom - 120);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ============================================================
   SMOOTH SCROLL for all anchor links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var id = a.getAttribute('href').slice(1);
    var el = id ? document.getElementById(id) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ============================================================
   CONTACT FORM — submit to Google Apps Script
   ============================================================ */
(function () {
  var WEBHOOK = 'https://script.google.com/macros/s/AKfycbzok3QVXPlZ1-BCNodIrN8ITnyEJ38o6_qkoyB_7zLcZ08NY4S3L6hQJIff3PDNg_7qkg/exec';

  var form   = document.getElementById('booking-form');
  var btn    = document.getElementById('submit-btn');
  var status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic client-side validation
    var name  = form.querySelector('#name');
    var email = form.querySelector('#email');
    if (!name.value.trim() || !email.value.trim()) {
      status.style.color = '#b44';
      status.textContent = 'Please fill in your name and email.';
      return;
    }

    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });

    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.style.color = '';
    status.textContent = '';

    fetch(WEBHOOK, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(function () {
        status.style.color = '#1b4a5e';
        status.textContent = 'Thank you — I’ll be in touch soon.';
        form.reset();
      })
      .catch(function () {
        status.style.color = '#b44';
        status.textContent = 'Something went wrong. Please email me directly.';
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = 'Request a free 20-minute consultation';
      });
  });
})();
