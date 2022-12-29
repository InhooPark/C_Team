$("body").prepend("<header>");
$("header").load("./header.html header>div" /*, head */);

window.addEventListener("load", function () {
  const BURGER = document.querySelector(".burger");

  BURGER.addEventListener("click", function () {
    BURGER.classList.toggle("open");
  });
});