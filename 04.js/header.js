$("body").prepend("<header>");
$("header").load("../header.html header>div" /*, head */);

window.addEventListener("load", function () {
  const BURGER = document.querySelector(".burger");
  const BURGEROPEN = document.querySelector(".burger-open");

  BURGER.addEventListener("click", function () {
    BURGEROPEN.classList.toggle("open");
  });
});
