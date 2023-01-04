AOS.init(); // 자바스크립트로 init()을 해야 동작한다.

let data = [
  {
    url: "01.img/mints_grape.png",
    title: "MINTS GRAPE",
    ditailTitle: "ECLIPSE GRAPE<br> Flavoured Sugarfree Mints 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/mints_intense.png",
    title: "MINTS INTENSE",
    ditailTitle: "ECLIPSE INTENSE MINT<br> Sugarfree Mints Tin 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/mints_orange.png",
    title: "MINTS ORANGE",
    ditailTitle: "ECLIPSE TANGY ORANGE<br> Flavoured Sugarfree Mints Tin 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/mints_peppermint.png",
    title: "MINTS PEPPERMINT",
    ditailTitle: "ECLIPSE PEPPERMINT<br> Sugarfree Mints Tin 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/mints_spearmint.png",
    title: "MINTS SPEARMINT",
    ditailTitle: "Eclipse Spearmint<br> Sugar Free Mints Tin 40g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/mints_strawberry.png",
    title: "MINTS STRAWBERRY",
    ditailTitle: "ECLIPSE STRAWBERRY<br> Flavoured Sugarfree Mints Tin 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/plus_comfort.png",
    title: "MINTS COMFORT",
    ditailTitle:
      "ECLIPSE Plus Comfort Honey Lemon & Ginger Flavoured Sugarfree Mints Tin 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/plus_release.png",
    title: "MINTS RELEASE",
    ditailTitle:
      "ECLIPSE Plus Release Lemon, Menthol & Mint Flavoured Sugarfree Mints Tin 40 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/chewy_1.png",
    title: "ECLIPSE PINK LEMONADE",
    ditailTitle: "ECLIPSE PINK LEMONADE<br> Flavoured Chewy Mints Tin 27 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/chewy_2_1.png",
    title: "ECLIPSE PEPPERMINT",
    ditailTitle: "ECLIPSE PEPPERMINT<br> Flavoured Chewy Mints Tin 27 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/chewy_3.png",
    title: "ECLIPSE PEPPERMINT",
    ditailTitle: "ECLIPSE PEPPERMINT<br> Flavoured Chewy Mints Bottle 93 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/chewy_4_1.png",
    title: "ECLIPSE SPEARMINT",
    ditailTitle: "ECLIPSE SPEARMINT<br> Flavoured Chewy Mints Tin 27 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
  {
    url: "01.img/chewy_5.png",
    title: "ECLIPSE SPEARMINT",
    ditailTitle: "ECLIPSE SPEARMINT<br> Flavoured Chewy Mints Bottle 93 g",
    ditail: "먹는순간 강력한 상쾌함!<br> 언제 어디서나  상쾌함을 즐기세요!",
  },
];

hover();

const IMG = document.querySelectorAll(".candycont .contdetail");
const MAINITEM = document.querySelector(".main-item");

const MOBIMG = document.querySelectorAll(".swiper-slide");

MOBIMG.forEach(function (v, key) {
  v.addEventListener("click", function () {
    MAINITEM.innerHTML = `
    <h2>${data[key].title}</h2>
    <div class="abc">
      <div class="item-img">
        <img src="${data[key].url}" alt="">
      </div>
      <div class="text">
        <h3>${data[key].ditailTitle}</h3>
        <p>${data[key].ditail}</p>
      </div>
    </duv>
    <div class="zoomWindow">
        <img src="${data[key].url}" alt="">
    </div>`;
  });
});

IMG.forEach(function (v, key) {
  v.addEventListener("click", function () {
    MAINITEM.innerHTML = `
    <h2>${data[key].title}</h2>
    <div class="abc">
      <div class="item-img">
        <img src="${data[key].url}" alt="">
      </div>
      <div class="text">
        <h3>${data[key].ditailTitle}</h3>
        <p>${data[key].ditail}</p>
      </div>
    </duv>
    <div class="zoomWindow">
        <img src="${data[key].url}" alt="">
    </div>`;
    hover();
  });
});

function hover() {
  if (!window.matchMedia("(max-width: 1500px)").matches) {
    const container = document.querySelector(".item-img");
    const img = document.querySelector(".zoomWindow img");
    const ZOOMWINDOW = document.querySelector(".zoomWindow");

    container.addEventListener("mousemove", onZoom);
    container.addEventListener("mouseover", onZoom);
    container.addEventListener("mouseleave", offZoom);

    function onZoom(e) {
      /* const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop; */
      const x =
        e.clientX - (container.offsetWidth / 2 - 30) - container.offsetLeft;
      const y =
        e.clientY - (container.offsetHeight / 2 + 10) - container.offsetTop;

      const xscale = container.offsetWidth / ZOOMWINDOW.offsetWidth;
      const yscale = container.offsetHeight / ZOOMWINDOW.offsetHeight;

      ZOOMWINDOW.style.display = "block";
      img.style.transform = ` translate(${-x * 2}px, ${-y * 2}px) scale(2) `;
    }

    function offZoom(e) {
      ZOOMWINDOW.style.display = "none";
    }
  }
}

//let idx = 0;

const BTN = document.querySelectorAll(".choice button");
const CANDY = document.querySelector(".candy");
const CHEWY = document.querySelector(".chewy");
const WDW = document.querySelector(".main-content");
const aa = document.querySelectorAll(".aa");

BTN.forEach(function (v, k) {
  if (!window.matchMedia("(max-width: 1024px)").matches) {
    v.addEventListener("click", function () {
      WDW.style.height = "3500px";
      WDW.style.width = "35%";
      if (k == 0) {
        //YCC.style.display="block";
        setTimeout(() => {
          window.scrollTo({
            left: 0,
            top: CANDY.offsetTop,
            behavior: "smooth",
          });
        }, 1000);
      } else if (k == 1) {
        //YCCH.style.display="block";
        setTimeout(() => {
          window.scrollTo({
            left: 0,
            top: CHEWY.offsetTop,
            behavior: "smooth",
          });
        }, 1000);
      }
    });
  } else {
    v.addEventListener("click", function () {
        const MOB = document.querySelector(".mobile");
        MOB.style.display = "block";
        WDW.style.width = "100%";
        WDW.style.height = "150px";
        WDW.style.top = "50px";
        const HEADER = document.querySelector("header .menu-container");
        HEADER.style.height = "50px";
      });
  }
});

/* btn.forEach(function (v, k) {
  v.addEventListener("click", function () {
    if (k == 0) {
      window.scrollTo({
        left: 0,
        top: candy.offsetTop,
        behavior: "smooth",
      });
    } else if (k == 1) {
      window.scrollTo({
        left: 0,
        top: chewy.offsetTop,
        behavior: "smooth",
      });
    }
  });
}); */
//반응형js
// var windowWidth = window.matchMedia("screen and (max-width:1024px");

// if (!windowWidth.matches) {
// } else {
// }
