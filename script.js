const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const overLay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  navUl.classList.toggle("show");
  overLay.classList.toggle("hidden");
});

overLay.addEventListener("click", function () {
  navUl.classList.remove("show");
  overLay.classList.add("hidden");
});
// implementing smooth scrolling

navUl.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();

    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
