const MAINCONT1 = document.querySelector(".main-container1");
const MAINCONT2 = document.querySelector(".main-container2");
const CONT2ITEM1 = document.querySelector(".container2-item01");
const MAINCONT3 = document.querySelector(".main-container3");
const INTROTEXT = document.querySelector(".intro-text-wrapper");
const INTROPTAG = document.querySelectorAll(".intro-text-wrapper p");
const INTROIMGWRAP = document.querySelector(".intro-skip-wrapper");
const INTROSKIP = document.querySelector(".intro-skip-btn");
const WORDMAIN = document.querySelector(".main-text");
const WORDSUB = document.querySelectorAll(".sub-text");
const SWIPERMAIN = document.querySelector(".mySwiper");
const CONT3TEXTBOX = document.querySelector(".container3-text-box");
let btnActive = "";
let imgPop = "";
let introInter = "";
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

window.addEventListener("resize", (resize) => {
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;
  contentStyleFun();
});
// 인트로 텍스트
function introTextFun(target, delay, repeat) {
  let num = 1;
  let num2 = 0;
  let moveValue = 0;
  let opacityBlurAni = `opacityBlurAni 5s 0s cubic-bezier(0.5, 1, 0.89, 1)`;
  INTROPTAG[num2].style.animation = opacityBlurAni;
  introInter = setInterval(() => {
    if (num == repeat) {
      clearInterval(introInter);
      return;
    } else {
      moveValue += INTROPTAG[num].clientHeight;
    }
    target.style = `translate: 0 -${moveValue}px`;
    num2++;
    INTROPTAG[num2].style.animation = opacityBlurAni;
    num++;
    console.log("텍스트 효과 실행중");
  }, delay);
  setTimeout(() => {
    INTROSKIP.click();
  }, delay * INTROPTAG.length + 3000);
}
introTextFun(INTROTEXT, 1500, INTROPTAG.length);
// 캔버스
function introCanvasFun() {
  const ELCANVAS = document.querySelector(".canvas");
  const ctx = ELCANVAS.getContext("2d");
  ELCANVAS.width = innerWidth;
  ELCANVAS.height = innerHeight;
  // 리사이즈
  window.addEventListener("resize", () => {
    ELCANVAS.width = window.innerWidth;
    ELCANVAS.height = window.innerHeight;
  });
  let mintCounts = 20;
  // 배열에 민트 반복문 횟수만큼 추가
  let mintArray = [];
  // 민트 이미지 선언
  let mintImg = new Image();
  mintImg.src = "./01.img/mintLeaf.png";
  // 온로드 함수로 이미지 불러오기
  mintImg.onload = () => {
    for (let i = 0; i < mintCounts; i++) {
      mintArray.push(new MintLeaf());
    }
    // 랜더실행
    renderMintPetal();
  };

  function renderMintPetal() {
    // 프레임단위로 전에 그린 그림 지워주기
    ctx.clearRect(0, 0, ELCANVAS.width, ELCANVAS.height);
    mintArray.forEach((mint) => {
      mint.animate();
    });
    // if (main.classList.contains("active")) {
    //   ELCANVAS.classList.add("active");
    //   setTimeout(() => {
    //     ctx.clearRect(0, 0, ELCANVAS.width, ELCANVAS.height);
    //   }, 10000);
    // } else {
    // }
    window.requestAnimationFrame(renderMintPetal);
    // 리퀘스트 애니메이션 프레임 선언으로 랜더 자동실행
  }
  // 클래스
  class MintLeaf {
    constructor() {
      this.x = Math.random() * ELCANVAS.width * 2 - ELCANVAS.height;
      this.y = Math.random() * ELCANVAS.height * 2 - ELCANVAS.height;
      this.w = 30 + Math.random() * 15;
      this.h = 20 + Math.random() * 10;
      this.opacity = this.w / 45;
      this.xSpeed = 1 + Math.random();
      this.ySpeed = 1 + Math.random() * 0.5;
      this.flip = Math.random();
      this.flipSpeed = Math.random() * 0.03;
    }
    draw() {
      if (this.y > ELCANVAS.height || this.x > ELCANVAS.width) {
        this.x = -mintImg.width;
        this.y = Math.random() * ELCANVAS.height * 2 - ELCANVAS.height;
        this.xSpeed = 2 + Math.random();
        this.ySpeed = 1 + Math.random() * 0.5;
        this.flip = Math.random();
      }
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(
        mintImg,
        this.x,
        this.y,
        this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
        this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 2)
      );
    }
    animate() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      this.flip += this.flipSpeed;
      this.draw();
    }
  }
}
introCanvasFun();
// 텍스트 span 생성
function wordSpanFun() {
  // WORDMAIN.forEach((value, key) => {
  let tag = "";
  for (let i = 0; i < WORDMAIN.textContent.length; i++) {
    tag += `<span>${WORDMAIN.textContent[i]}</span>`;
  }
  WORDMAIN.innerHTML = tag;
  // });
}
wordSpanFun();
// span함수 실행 이후 const
const WORDSPANALL = document.querySelectorAll(".main-text span");
// 헤더 텍스트 fade in
function spanEffectFun(value) {
  let fadeInEffect = `fadeInUp 400ms 0ms 1 both`;
  // run init and clear previous effects
  // init();
  let num = -1;
  // put delay on each word
  let fadeInInter = setInterval(() => {
    if (num < value.length - 1) {
      num++;
    } else {
      clearInterval(fadeInInter);
    }
    value[num].style.animation += fadeInEffect;
  }, 50);
  WORDSUB.forEach((el, key) => {
    WORDSUB[key].style.animation = `revealOpacity 400ms ${
      value.length * 70
    }ms 1 both `;
  });
}
// swiper
let swiper = new Swiper(".mySwiper", {
  effect: "slide",
  direction: "vertical",
  slidesPerView: "auto",
  grabCursor: true,
  mousewheel: true,
  slideToClickedSlide: false,
  freeMode: false,
  spaceBetween: 200,
  centeredSlides: true,
  // loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: "false",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 15,
    slideShadows: false,
    depth: 30,
  },
  observer: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 700,
});
//////////////////////
///////클릭이벤트////////
//////////////////////
INTROSKIP.addEventListener("click", (e) => {
  MAINCONT1.style = `opacity:0`;
  main.classList.add("active");
  SWIPERMAIN.classList.add("active");
  CONT2ITEM1.classList.add("active");
  MAINCONT3.classList.add("active");
  aSideBarFun()
  setTimeout(() => {
    spanEffectFun(WORDSPANALL);
  }, 400);
  setTimeout(() => {
    textRevealFun();
  }, 1500);
  setTimeout(() => {
    MAINCONT1.classList.add("active");
  }, 500);
  setTimeout(() => {
    mainTextChangeColorFun();
  }, 50);
  // ELCANVAS.style = `z-index: 1`;
  console.log("백그라운드 효과");
});
function mainTextChangeColorFun() {
  CONT3TEXTBOX.style = `background: #eefdf7;`;
}
// 편집 완료후 삭제
// INTROSKIP.click();
// clearTimeout(btnActive);
// clearTimeout(imgPop);
// clearInterval(introInter);
// 편집 완료후 삭제
function aSideBarFun(e) {
  window.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX,
      mouseY = e.clientY;
    if (mouseX < innerWidth / 20 && mouseY > innerHeight / 10) {
      // CONT2ITEM1.classList.add("active");
      CONT2ITEM1.style = `translate: 0 -50%;`;
    } else {
      CONT2ITEM1.style = `translate: -100% -50%;`;
    }
  });
}

window.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX,
    mouseY = e.clientY;
  INTROSKIP.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0px)`;
});
// 텍스트 span

// init
function initFun() {
  // content
}

const SWIPERSLIDE = document.querySelectorAll(".swiper-slide");
const CONT3CARD = document.querySelector(".container3-card");
const CONT3YEAR = document.querySelector(".container3-text-box2 h2");
const CONT3TEXTBOX2 = document.querySelector(".container3-text-box2 p");

let colorArray = [
  "#b7ebd6",
  "#5986D4",
  "#C16EEB",
  "#D46459",
  "#F6C167",
  "#003082",
  "#00AB69",
  "#6A59D4",
  "#C16EEB",
  "#D459A9",
  "#F67467",
  "#5985D4",
  "#EBDD86",
];
let yearArray = [
  "1999",
  "2009",
  "2010",
  "2010 - 2012",
  "2012",
  "2013",
  "2017",
  "2019",
  "2020",
  "2020",
  "2021",
  "2022",
  "2022",
];
// json으로 정리 ///////////////////////////////////////////////////////////////////////////
let colorCount = 0;
// let yearCount = 0;
const NAVBTN = document.querySelectorAll(".year-btn");
const CONT3SUBTEXT = document.querySelectorAll(
  ".container3-sub-text-wrapper p"
);
window.addEventListener("load", () => {
  const PAGINATION = document.querySelectorAll(".swiper-pagination span");
  let key = 0;
  NAVBTN.forEach((el, key) => {
    el.addEventListener("click", () => {
      if (key > 2) {
        key++;
        PAGINATION[key].click();
      } else if (key > 8) {
        key++;
        PAGINATION[key].click();
      } else {
        PAGINATION[key].click();
      }
      console.log(key);
    });
  });
});

// window.addEventListener("load", () => {
//   function swiperSlideEffects() {
//     SWIPERSLIDE.forEach((el, key) => {
//       if (el.classList.contains("swiper-slide-active")) {
//         el.classList.add("active");
//       } else {
//         el.classList.remove("active");
//       }
//     });
//   }
//   swiperSlideEffects();

// swiperSlideEffects();
CONT3SUBTEXT[0].classList.add("active");
swiper.on("slideChange", (e) => {
  let currentIndex = e.realIndex;
  // console.log(e.realIndex);
  CONT3CARD.style = `background: ${colorArray[currentIndex]};width: ${
    innerWidth / 2.6
  }px; height: 40vh; translate: ${-25}px 0`;
  CONT3YEAR.textContent = `${yearArray[currentIndex]}`;
  // CONT3SUBTEXT[currentIndex].classList.add("active");
  // CONT3SUBTEXT[currentIndex - 1].classList.remove("active");
  console.log("확인");
});
swiper.on("slideNextTransitionEnd", (e) => {
  let currentIndex = e.realIndex;
  CONT3SUBTEXT[currentIndex].classList.add("active");
  CONT3SUBTEXT[currentIndex - 1].classList.remove("active");
});
swiper.on("slidePrevTransitionEnd", (e) => {
  let currentIndex = e.realIndex;
  CONT3SUBTEXT[currentIndex + 1].classList.remove("active");
  CONT3SUBTEXT[currentIndex].classList.add("active");
});

const SWIPERIMG = document.querySelectorAll(".swiper-slide img");
function contentStyleFun(e) {
  SWIPERMAIN.style = `width: ${innerWidth / 3}px; height:100vh`;
  CONT3CARD.style = `width: ${
    innerWidth / 2.6
  }px; height: 40vh; translate: ${-25}px 0`;
  SWIPERIMG.forEach((el, key) => {
    el.style = `width: ${innerWidth / 3}px; height: 35vh`;
  });
  console.log(innerWidth);
}
contentStyleFun();

//카드 창 위치 수정 해야됨
function textRevealFun() {
  let revealEffect = `revealOpacity 1000ms 1 both`;
  CONT3YEAR.style.animation = revealEffect;
  CONT3TEXTBOX2.style.animation = revealEffect;
}
