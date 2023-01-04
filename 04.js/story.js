fetch("./06.json/story.json")
  .then((res) => {
    return res.json();
  })
  .then((eclipse) => {
    story(eclipse.data);
  });

function story(data) {
  const MAINCONT1 = document.querySelector(".main-container1");
  const CONT2ITEM1 = document.querySelector(".container2-item01");
  const MAINCONT3 = document.querySelector(".main-container3");
  const INTROTEXT = document.querySelector(".intro-text-wrapper");
  const INTROPTAG = document.querySelectorAll(".intro-text-wrapper p");
  const INTROSKIP = document.querySelector(".intro-skip-btn");
  const WORDMAIN = document.querySelectorAll(".main-text");
  const WORDSUB = document.querySelectorAll(".sub-text");

  const CONT3TEXTBOX = document.querySelector(".container3-text-box");
  let introInter = "";
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;
  let previousIndex = 0;
  let introEffect;
  window.addEventListener("resize", (resize) => {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
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
      introEffect = window.requestAnimationFrame(renderMintPetal);
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
    WORDMAIN.forEach((el, key) => {
      let tag = "";
      for (let i = 0; i < el.textContent.length; i++) {
        tag += `<span>${el.textContent[i]}</span>`;
      }
      el.innerHTML = tag;
    });
  }
  wordSpanFun();
  const SPAN1 = document.querySelectorAll(".main-text1 span");
  const SPAN2 = document.querySelectorAll(".main-text2 span");
  const SPAN3 = document.querySelectorAll(".main-text3 span");
  const SPAN4 = document.querySelectorAll(".main-text4 span");
  const SPAN5 = document.querySelectorAll(".main-text5 span");
  const SPAN6 = document.querySelectorAll(".main-text6 span");
  const SPANANI = document.querySelectorAll(".container3-text-wrap span");
  const NAVIGATOR = document.querySelectorAll(".year-btn");
  const SCROLLIMG = document.querySelector(".scroll-img");
  let spanArray = [SPAN1, SPAN2, SPAN3, SPAN4, SPAN5, SPAN6];
  function initFun() {
    SPANANI.forEach((el) => {
      el.style.animation = "";
    });
    WORDSUB.forEach((el) => {
      el.style.animation = "";
    });
  }
  function spanEffectFun(value, idxNum) {
    let fadeInEffect = `fadeInUp 400ms 0ms 1 both`;
    initFun();
    let num = -1;
    let fadeInInter = setInterval(() => {
      if (num < value.length - 1) {
        num++;
      } else {
        clearInterval(fadeInInter);
      }
      value[num].style.animation += fadeInEffect;
    }, 30);
    // WORDSUB.forEach((el, key) => {
    WORDSUB[idxNum].style.animation = `revealOpacity 400ms ${
      value.length * 40
    }ms 1 both `;
  }

  //////////////////////
  ///////클릭이벤트////////
  //////////////////////
  INTROSKIP.addEventListener("click", (e) => {
    window.cancelAnimationFrame(introEffect);
    main.classList.add("active");
    MAINCONT1.style = `opacity:0`;
    MAINCONT3.classList.add("active");
    INDIGATOR.classList.add("active");
    setTimeout(() => {
      swiperFun();
    }, 300);
    setTimeout(() => {
      MAINCONT1.classList.add("active");
    }, 500);

    console.log("클릭 트리거");
  });
  window.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX,
      mouseY = e.clientY;
    INTROSKIP.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0px)`;
  });
  // swiper
  const INDIGATOR = document.querySelector(".indigator");
  function swiperFun() {
    let swiper = new Swiper(".mySwiper", {
      effect: "cards",
      cardsEffect: {
        perSlideoffset: 10,
        perSlideRotate: 0,
        rotate: false,
        slideShadows: false,
      },
      mousewheel: {
        invert: false,
      },
      on: {
        init: function (e) {
          INDIGATOR.style = `color:black`;
          const SWIPERSLIDE = document.querySelectorAll(".swiper-slide div");
          SWIPERSLIDE.forEach((el, key) => {
            setInterval(() => {
              console.log(SWIPERSLIDE);
              el.classList.add("active");
            }, 100);
          });
        },
        click: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          const VIDEO = document.querySelectorAll(".video");
          function tabToZoomFun(value) {
            SWIPERCONTENTS[
              value
            ].style = `width:90vw; height:80vh; translate: 0 -5vh; filter:brightness(1); border-radius: 35px 35px 35px 35px;`;
          }
          currentIndex = e.realIndex;
          activeIndex = e.activeIndex;
          clickedIndex = e.clickedIndex;
          tabToZoomFun(activeIndex);
          VIDEO[activeIndex].muted = false;
          CONT3TEXTBOX.style = `opacity: 0;`;
          SCROLLIMG.style = `opacity:0`;
          CONT2ITEM1.style = `translate: -40% -50%; transition: translate 0.5s`;
          INDIGATOR.style = `translate: 110% -50%; transition: translate 0.5s`;
        },
        doubleClick: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          const VIDEO = document.querySelectorAll(".video");
          function doubleTabFun(value) {
            SWIPERCONTENTS[
              value
            ].style = `width: 78vw; height: 80vh; filter: brightness(0.5);`;
            VIDEO[activeIndex].muted = true;
          }
          let currentIndex = e.realIndex;
          activeIndex = e.activeIndex;
          doubleTabFun(activeIndex);
          CONT3TEXTBOX.style = `opacity: 1;`;
          if (currentIndex == 0) {
            SCROLLIMG.style = `opacity:1; translate: -50% -50%; `;
          }
          CONT2ITEM1.style = `translate: 0 -50%; transition: translate 0.5s`;
          INDIGATOR.style = `translate: 0 -50%; transition: translate 0.5s`;
        },
        slideChangeTransitionStart: function (e) {
          let currentIndex = e.realIndex;
          INDIGATOR.style = `opacity:0`;
          NAVIGATOR[previousIndex].classList.remove("active");
          NAVIGATOR[currentIndex].classList.add("active");
          previousIndex = currentIndex;
        },
        slideChangeTransitionEnd: function (e) {
          const VIDEO = document.querySelectorAll(".video");
          function videoPlayFun(value) {
            VIDEO[value].muted = true;
            VIDEO[value].loop = true;
            VIDEO[value].play();
          }
          let currentIndex = e.realIndex;
          let previousIndex = e.previousIndex;
          let activeIndex = e.activeIndex;
          INDIGATOR.innerHTML = "0" + (currentIndex + 1);
          INDIGATOR.style = `opacity:1`;
          videoPlayFun(activeIndex);
          VIDEO[previousIndex].pause();
        },
        slideChange: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          let currentIndex = e.realIndex;
          let previousIndex = e.previousIndex;
          setTimeout(() => {
            spanEffectFun(spanArray[currentIndex], currentIndex);
          }, 300);
          if (currentIndex == 0) {
            setTimeout(() => {
              SCROLLIMG.style = `opacity:1; translate: -50% -50%;`;
            }, 500);
          } else {
            SCROLLIMG.style = `opacity:0; translate: -50% 90%`;
          }
          SWIPERCONTENTS.forEach((el, key) => {
            el.style = `width:78vw; height:80vh;`;
          });
          CONT3TEXTBOX.style = `opacity: 1`;
          CONT2ITEM1.style = `translate: 0 -50%; transition: translate 0.5s`;
          INDIGATOR.style = `translate: 0 -50%; transition: translate 0.5s`;
          main.style.backgroundColor = data[currentIndex].color;
        },
      },
      loop: true,
      preloadImages: false,
      direction: "vertical",
      // slideToClickedSlide: true,
      // centeredSlides: true,
      slidesPerView: "auto",
      grabCursor: true,
      initialSlide: 0,
      // cssMode: true,
      // spaceBetween: 10,
      observer: true,
      speed: 500,
    });
    NAVIGATOR.forEach((el, key) => {
      el.addEventListener("click", () => {
        swiper.slideTo(key + 6, 700, true);
      });
    });
  }

  // 편집 완료후 삭제 /////////////////////////////////////////////////////////////////////////////////////////
  // INTROSKIP.click();
  // clearTimeout(btnActive);
  // clearTimeout(imgPop);
  // clearInterval(introInter);
  // 편집 완료후 삭제 /////////////////////////////////////////////////////////////////////////////////////////
}
