const languageButtons = document.querySelectorAll('[data-set-lang]');
const translatable = document.querySelectorAll('[data-pt][data-en]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  translatable.forEach((element) => {
    element.textContent = element.dataset[lang];
  });
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
  });
  document.title = lang === 'pt'
    ? 'Salésio Machava — Creative Technologist'
    : 'Salésio Machava — Creative Technologist';
  localStorage.setItem('portfolio-language', lang);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.setLang));
});

const savedLanguage = localStorage.getItem('portfolio-language');
if (savedLanguage === 'en') setLanguage('en');

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
