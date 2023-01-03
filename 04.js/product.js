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
    ditail:
      "ECLIPSE INTENSE MINT 무설탕 민트 통조림을 휴대하면 상쾌한 일이 일어납니다.<br> 이 맛있는 작은 숨결 민트는 커피 한 잔 후에 완벽하며 집, 직장 또는 놀이에서 연결하고 최상의 상태를 유지할 수 있는 신선함을 제공합니다.<br> 그러니 깡통을 뒤집어서 공유하고 신선하게 만드세요!",
  },
  {
    url: "01.img/mints_orange.png",
    title: "MINTS ORANGE",
    ditailTitle: "ECLIPSE TANGY ORANGE<br> Flavoured Sugarfree Mints Tin 40 g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE TANGY ORANGE flavoured sugarfree mints. These delicious little breath mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/mints_peppermint.png",
    title: "MINTS PEPPERMINT",
    ditailTitle: "ECLIPSE PEPPERMINT<br> Sugarfree Mints Tin 40 g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE PEPPERMINT sugarfree mints. These delicious little breath mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/mints_spearmint.png",
    title: "MINTS SPEARMINT",
    ditailTitle: "Eclipse Spearmint<br> Sugar Free Mints Tin 40g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE SPEARMINT sugarfree mints. These delicious little breath mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/mints_strawberry.png",
    title: "MINTS STRAWBERRY",
    ditailTitle: "ECLIPSE STRAWBERRY<br> Flavoured Sugarfree Mints Tin 40 g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE STRAWBERRY flavoured sugarfree mints. These delicious little breath mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/plus_comfort.png",
    title: "MINTS COMFORT",
    ditailTitle:
      "ECLIPSE Plus Comfort Honey Lemon & Ginger Flavoured Sugarfree Mints Tin 40 g",
    ditail:
      "Not feeling fresh? FEEL YOUR WAY BACK TO FRESH with ECLIPSE PLUS Comfort Honey, Lemon & Ginger Flavoured Sugarfree Mints. These mints have been expertly balanced with a blend of honey, lemon & ginger flavours unleashing a burst of sunshine and instant freshness helping you FEEL YOUR WAY BACK TO FRESH!",
  },
  {
    url: "01.img/plus_release.png",
    title: "MINTS RELEASE",
    ditailTitle:
      "ECLIPSE Plus Release Lemon, Menthol & Mint Flavoured Sugarfree Mints Tin 40 g",
    ditail:
      "Not feeling fresh? FEEL YOUR WAY BACK TO FRESH with ECLIPSE PLUS Comfort Lemon, Menthol & Mint Flavoured Sugarfree Mints. These mints have been expertly balanced with a blend of honey, lemon & ginger flavours unleashing a burst of sunshine and instant freshness helping you FEEL YOUR WAY BACK TO FRESH!",
  },
  {
    url: "01.img/chewy_1.png",
    title: "ECLIPSE PINK LEMONADE",
    ditailTitle: "ECLIPSE PINK LEMONADE<br> Flavoured Chewy Mints Tin 27 g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE PINK LEMONADE flavoured Chewy Mints. These delicious little chewy mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/chewy_2_1.png",
    title: "ECLIPSE PEPPERMINT",
    ditailTitle: "ECLIPSE PEPPERMINT<br> Flavoured Chewy Mints Tin 27 g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE PEPPERMINT flavoured Chewy Mints. These delicious little chewy mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/chewy_3.png",
    title: "ECLIPSE PEPPERMINT",
    ditailTitle: "ECLIPSE PEPPERMINT<br> Flavoured Chewy Mints Bottle 93 g",
    ditail:
      "Refreshing things happen when you have a bottle of ECLIPSE PEPPERMINT flavoured Chewy Mints. These delicious chewy mints are perfect after a cup of coffee and this bulk format is perfect for freshening while at home, in the office or in the car. So flip open this bottle and LET THERE BE FRESH!",
  },
  {
    url: "01.img/chewy_4_1.png",
    title: "ECLIPSE SPEARMINT",
    ditailTitle: "ECLIPSE SPEARMINT<br> Flavoured Chewy Mints Tin 27 g",
    ditail:
      "Refreshing things happen when you carry a tin of ECLIPSE SPEARMINT flavoured Chewy Mints. These delicious little chewy mints are perfect after a cup of coffee and give you the freshness to connect and be at your best at home, work or play. So, flip open your tin, share and LET THERE BE FRESH!",
  },
  {
    url: "01.img/chewy_5.png",
    title: "ECLIPSE SPEARMINT",
    ditailTitle: "ECLIPSE SPEARMINT<br> Flavoured Chewy Mints Bottle 93 g",
    ditail:
      "Refreshing things happen when you have a bottle of ECLIPSE SPEARMINT flavoured Chewy Mints. These delicious chewy mints are perfect after a cup of coffee and this bulk format is perfect for freshening while at home, in the office or in the car. So flip open this bottle and LET THERE BE FRESH!",
  },
];

hover();

const IMG = document.querySelectorAll(".candycont .contdetail");
const MAINITEM = document.querySelector(".main-item");

IMG.forEach(function (v, key) {
  v.addEventListener("click", function () {
    MAINITEM.innerHTML = `
    <h2>${data[key].title}</h2>
    <div class="item-img">
      <img src="${data[key].url}" alt="">
    </div>
    <div class="text">
    <h3>${data[key].ditailTitle}</h3>
    <p>${data[key].ditail}</p>
</div>
    <div class="zoomWindow">
        <img src="${data[key].url}" alt="">
    </div>`;
    hover();
  });
});

function hover() {
  const container = document.querySelector(".item-img img");
  const img = document.querySelector(".zoomWindow img");
  const ZOOMWINDOW = document.querySelector(".zoomWindow");

  container.addEventListener("mousemove", onZoom);
  container.addEventListener("mouseover", onZoom);
  container.addEventListener("mouseleave", offZoom);

  function onZoom(e) {
    /* const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop; */
    const x =
      e.clientX - (container.offsetWidth / 2 - 25) - container.offsetLeft;
    const y =
      e.clientY - (container.offsetHeight / 2 - 5) - container.offsetTop;

    const xscale = container.offsetWidth / ZOOMWINDOW.offsetWidth;
    const yscale = container.offsetHeight / ZOOMWINDOW.offsetHeight;

    ZOOMWINDOW.style.display = "block";
    img.style.transform = ` translate(${-x * 2}px, ${-y * 2}px) scale(2) `;
  }

  function offZoom(e) {
    ZOOMWINDOW.style.display = "none";
  }
}

//let idx = 0;

const BTN = document.querySelectorAll(".choice button");
const CANDY = document.querySelector(".candy");
const CHEWY = document.querySelector(".chewy");
const WDW = document.querySelector(".main-content");
const YCC = document.querySelector(".visual-candy");
const YCCH = document.querySelector(".visual-chewy");

console.log(CANDY.offsetTop);

BTN.forEach(function (v, k) {
  v.addEventListener("click", function () {
    WDW.style.height = "3500px";
    WDW.style.width = "35%";
    if (k == 0) {
      YCC.style.display="block";
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: CANDY.offsetTop,
          behavior: "smooth",
        });
      }, 1000);
    } else if (k == 1) {
      YCCH.style.display="block";
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: CHEWY.offsetTop,
          behavior: "smooth",
        });
      }, 1000);
    }
  });
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
