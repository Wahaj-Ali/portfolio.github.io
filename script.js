const menuIcon = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.main-menu');
const myLogo = document.querySelector('.mylogo');
const scroll = document.querySelector('#scrollable');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mainMenu.classList.toggle('active');
  myLogo.classList.toggle('disappear');
});
document.querySelectorAll('.header-btn').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  mainMenu.classList.remove('active');
}));
scroll.addEventListener('wheel', preventScroll, {passive: false});
function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}