'use strict';
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const filters = document.querySelectorAll('.filter');
const skillCards = document.querySelectorAll('.skill-card');
const filterStatus = document.querySelector('.filter-status');
const copyEmail = document.querySelector('#copy-email');
const copyFeedback = document.querySelector('#copy-feedback');
const email = 'david.pilataxi@epn.edu.ec';

function applyTheme(value) {
  if (value === 'dark') root.dataset.theme = 'dark';
  else delete root.dataset.theme;
  themeButton.setAttribute('aria-label', value === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro');
  themeButton.title = value === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
  themeButton.querySelector('.theme-symbol').textContent = value === 'dark' ? '☀' : '◐';
  document.querySelector('meta[name="theme-color"]').content = value === 'dark' ? '#0e1627' : '#f7f9fc';
}
let savedTheme;
try { savedTheme = localStorage.getItem('dp-theme'); } catch (_) { /* Almacenamiento bloqueado */ }
applyTheme(savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light');
themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('dp-theme', next); } catch (_) { /* Preferencia solo en esta sesión */ }
});
function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  menuButton.querySelector('span').textContent = '☰';
}
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuButton.querySelector('span').textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  skillCards.forEach(card => { const visible = category === 'all' || card.dataset.category === category; card.hidden = !visible; if (visible) count++; });
  filterStatus.textContent = `${count} ${count === 1 ? 'categoría visible' : 'categorías visibles'}.`;
}));
copyEmail.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard no disponible');
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = 'Correo copiado al portapapeles.';
  } catch (_) {
    copyFeedback.textContent = `No se pudo copiar automáticamente. Correo: ${email}`;
  }
});
if ('IntersectionObserver' in window) {
  const navLinks = [...nav.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      }
    });
  }, {rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
