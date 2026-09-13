const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach((item) => {
      item.classList.toggle('hidden', category !== 'all' && item.dataset.category !== category);
    });
  });
});

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = new FormData(form).get('name');
    document.querySelector('.form-message').textContent = `Köszönöm, ${name}! Az üzenetedet az MVP sikeresen fogadta.`;
    form.reset();
  });
}
