const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const mobileLinks = document.querySelectorAll('.mobile__links a');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileNavbar.classList.remove('active');
  });
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
