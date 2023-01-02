$("body").prepend("<header>");
$("header").load("./header.html header>div", headerCallback);
const LOAD = document.getElementById("load");
setTimeout(() => {
  LOAD.classList.add("display-off");
}, 1500);

const LOADTEXT = document.querySelector('.load-text-wrap span');
let locationURL = location.href.split('/').reverse()[0].split('.')[0];
locationURL = locationURL.charAt(0).toUpperCase() + locationURL.slice(1);
console.log(locationURL);
LOADTEXT.textContent = locationURL;


function headerCallback() {
  const SPHERE = document.querySelector(".sphere");
  const SPHERECON = document.querySelector(".sphere-content-wrap");
  const SPHEREBIN = document.querySelector(".sphere-content");
  const LOGO = document.querySelector(".logo");
  const LOGOIMG = document.querySelector(".logo-img");

  LOGO.addEventListener("mouseover", () => {
    LOGOIMG.classList.add("scale-up");
  });
  LOGO.addEventListener("mouseleave", () => {
    LOGOIMG.classList.remove("scale-up");
  });

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
    SPHERECON.style = `transform: rotate(${count}deg);`;
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

  if (!BURGER.classList.contains("burger-animation")) {
    BURGER.addEventListener("mouseover", () => {
      BURGER.classList.add("burger-hover");
    });
    BURGER.addEventListener("mouseleave", () => {
      BURGER.classList.remove("burger-hover");
    });
  }



  // 버거메뉴 내부 텍스트
  const THISMENU = document.querySelectorAll(".burger-menu a");
  const MENUOVER = document.querySelectorAll(".burger-menu a i");

  // 현 위치 메뉴 텍스트 컬러 변경
  console.log(locationURL.toLowerCase());
  THISMENU.forEach((value) => {
    value.classList.remove("this");
    if (locationURL.toLowerCase() == "index") {
      THISMENU[0].classList.add("this");
    } else if (locationURL.toLowerCase() == "product") {
      THISMENU[1].classList.add("this");
    } else if (locationURL.toLowerCase() == "story") {
      THISMENU[2].classList.add("this");
    }
  });

  // 메뉴 mouse over시 밑줄
  MENUOVER.forEach((value) => {
    value.addEventListener("mouseover", () => {
      value.classList.add("mouse-over");
    });
    value.addEventListener("mouseleave", () => {
      value.classList.remove("mouse-over");
    });
  });
}
