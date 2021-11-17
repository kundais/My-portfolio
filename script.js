const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close-burger");

const openBurger = function () {
  hamburger.classList.add("hidden");
  close.classList.add("show");
  navUL.classList.toggle("show");
};

const closeBurger = function () {
  hamburger.classList.remove("hidden");
  close.classList.remove("show");
  navUL.classList.toggle("show");
};

hamburger.addEventListener("click", openBurger);
close.addEventListener("click", closeBurger);
