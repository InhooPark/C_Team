$("body").prepend("<header>");
$("header").load("./header.html header>div", headerCallback);

function headerCallback() {
  const SPHERE = document.querySelector(".sphere");
  const SPHERECON = document.querySelector(".sphere-content-wrap");
  const SPHEREBIN = document.querySelector(".sphere-content");
  console.log(Date.now());

  SPHERE.addEventListener("mouseover", () => {
    SPHEREBIN.style = "z-index: 7;";
  });
  SPHERE.addEventListener("mouseleave", () => {
    setTimeout(() => {
      SPHEREBIN.style = "z-index: 0;";
    }, 20);
  });

  count = 0;
  setInterval(() => {
    count++;
    SPHERE.style = `transform: rotate(${count * 5}deg);`;
    SPHERECON.style = `transform: rotate(${count * 2.5}deg);`;
  }, 100);
  const BURGER = document.querySelector(".burger");
  const BURGEROPEN = document.querySelector(".burger-open");

  BURGER.addEventListener("click", function () {
    if (BURGEROPEN.classList.contains("display-on")) {
      setTimeout(() => {
        BURGEROPEN.classList.remove("display-on");
        document.body.classList.remove("stop-scroll");
      }, 300);
    } else {
      BURGEROPEN.classList.add("display-on");
      document.body.classList.add("stop-scroll");
    }
    setTimeout(() => {
      BURGER.classList.toggle("burger-animation");
      BURGEROPEN.classList.toggle("open");
    }, 1);
  });

  const MENUOVER = document.querySelectorAll(".burger-menu a i");

  MENUOVER.forEach((value) => {
    value.addEventListener("mouseover", () => {
      value.classList.add("mouse-over");
    });
    value.addEventListener("mouseleave", () => {
      value.classList.remove("mouse-over");
    });
  });
}
