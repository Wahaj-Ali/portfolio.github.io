const menuIcon = document.querySelector(".menu-icon");
const mainMenu = document.querySelector(".main-nav");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    mainMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".header_btn").forEach(n => n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    mainMenu.classList.remove("active");
  }))