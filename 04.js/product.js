window.addEventListener("load", function () {
  setTimeout(() => {
    PRODUCTLOAD();
  }, 1000);
});
function PRODUCTLOAD(){
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
  
  const PCIMG = document.querySelectorAll(".pc .candycont .contdetail");
  const MAINITEM = document.querySelector(".main-item");
  
  PCIMG.forEach(function (v, key) {
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
  const MAIN = document.querySelector(".main");
  
  BTN.forEach(function (v, k) {
    //pc
    if (!window.matchMedia("(max-width: 1024px)").matches) {
      v.addEventListener("click", function () {
        WDW.style.height = "3500px";
        WDW.style.width = "35%";
        MAIN.style.zIndex = "1";
  
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
      //모바일
      v.addEventListener("click", function () {
        const MOB = document.querySelector(".mobile");
        const MAINBTN = document.querySelector(".main .main-content .choice");
        const BTNFONT = document.querySelector(".main .main-content .choice h1");
        const HEADER = document.querySelector("header .menu-container");
        const MOCANDY = document.querySelector(".moCandy");
        const MOCHEWY = document.querySelector(".moChewy");
  
        MAIN.style.zIndex = "1";
        MAINITEM.style.display = "none";
        MOB.style.display = "block";
        WDW.style.width = "100%";
        WDW.style.height = "200px";
        MAINBTN.style.marginTop = "50px";
        BTNFONT.style.fontSize = "35px";
        HEADER.style.height = "50px";
  
        if (k == 0) {
          MOCANDY.style.display = "block";
          MOCHEWY.style.display = "none";
          window.scrollTo({
            left: 0,
            top: MOCANDY.offsetTop,
            behavior: "smooth",
          });
        }
        if (k == 1) {
          MOCHEWY.style.display = "block";
          MOCANDY.style.display = "none";
          window.scrollTo({
            left: 0,
            top: MOCHEWY.offsetTop,
            behavior: "smooth",
          });
        }
      });
    }
  });
  
  const MOIMG = document.querySelectorAll(".mobile img");
  const POPUP = document.querySelector(".popup");
  const POPUPBTN = document.querySelector(".popup button");
  const POPUPCONT = document.querySelector(".popupCont");
  MOIMG.forEach(function (v, k) {
    v.addEventListener("click", function () {
      POPUP.style.height = "80%";
      POPUPBTN.style.display = "block";
      POPUPCONT.style.display = "block";
  
      POPUPCONT.innerHTML = `
      <div class="popupImg">
      <img src="${data[k].url}" alt="">
      </div>
      <div class="popupText">
      <h3>${data[k].ditailTitle}</h3>
      <p>${data[k].ditail}</p>
      </div>
      `;
    });
  });
  
  POPUPBTN.addEventListener("click", function () {
    POPUP.style.height = "0";
    POPUPBTN.style.display = "none";
    POPUPCONT.style.display = "none";
  });
  
}

