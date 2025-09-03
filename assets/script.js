// Dark Mode
const darkBtn = document.getElementById('darkToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) document.body.classList.add('dark-mode');

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Language Toggle (簡單版)
const langBtn = document.getElementById('langToggle');
let currentLang = 'en';
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  alert(`Language switched to: ${currentLang}`);
});
