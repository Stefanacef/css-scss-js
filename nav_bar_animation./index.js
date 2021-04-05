"use strict";

//
const navMenu = document.querySelector(".nav_menu");
const navigatioList = document.querySelector(".navigation__list");

console.log(navigatioList);

navMenu.addEventListener("click", () => {
  if (navigatioList.classList.toggle("transition")) {
    navigatioList.style.visibility = "visible";
    navMenu.style.color = "white";
  } else {
    navMenu.style.color = "rgb(255, 255, 255, 0.5)";
    navigatioList.style.visibility = "hidden";
  }
});
