const menuIcon = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.main-menu');
const myLogo = document.querySelector('.mylogo');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mainMenu.classList.toggle('active');
  myLogo.classList.toggle('disappear');
});
document.querySelectorAll('.header-btn').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  mainMenu.classList.remove('active');
}));