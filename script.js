const menuIcon = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mainMenu.classList.toggle('active');
});
document.querySelectorAll('.header-btn').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  mainMenu.classList.remove('active');
}));