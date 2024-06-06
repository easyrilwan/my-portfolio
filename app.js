// const btnMenu = document.querySelector(".hamburger");
// const menuList = document.querySelector(".hamburger-list-container");

const btnMenu = document.getElementsByClassName("hamburger")[0];
const menuList = document.getElementsByClassName("hamburger-list-container")[0];

function toggle() {
  menuList.classList.toggle("hidden");
}

btnMenu.addEventListener("click", toggle);
