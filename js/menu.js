//LOADER

const loaderElem = document.querySelector(".loader");
window.addEventListener("load", function () {
  loaderElem.classList.add("hidden");
});

let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnicon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnicon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnicon.classList = "fa fa-times";
    menuBtn.style.position = "fixed";
  } else {
    menu.style.left = "-256px";
    menuBtnicon.classList = "fa fa-bars";
    menuBtn.style.position = "static";
  }
});
