fetch("./06.json/story.json")
  .then((res) => {
    return res.json();
  })
  .then((eclipse) => {
    story(eclipse.data);
  });
function story(data) {
  setTimeout(() => {
    storyLOAD(data);
  }, 1000);
}
function storyLOAD(data) {
  const BODY = document.querySelector("body");
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
  let inter;
  let interSkip;
  window.addEventListener("resize", (resize) => {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
  });

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

    interSkip = setTimeout(() => {
      INTROSKIP.click();
    }, delay * INTROPTAG.length + 3000);
  }

  introTextFun(INTROTEXT, 1500, INTROPTAG.length);

  INTROSKIP.addEventListener("click", (e) => {
    window.cancelAnimationFrame(introEffect);
    clearTimeout(interSkip);
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
        ctx.drawImage(mintImg, this.x, this.y, this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3), this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 2));
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
  const CONT4ITEMS = document.querySelectorAll(".container4-item");
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
    WORDSUB[idxNum].style.animation = `revealOpacity 400ms ${value.length * 40}ms 1 both `;
  }
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerWidth / 2;
  if (innerWidth < 768) {
    introFun();
  }
  function introFun() {
    INTROSKIP.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0px)`;
  }
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    introFun();
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
        noSwiping: false,
      },
      mousewheel: {
        invert: false,
      },
      on: {
        init: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          let currentIndex = e.realIndex;
          let idx = 0;
          INDIGATOR.style = `color:black`;
          inter = setInterval(() => {
            if (idx >= 0 && idx < 15) {
              idx++;
            } else {
              clearInterval(inter);
            }
            SWIPERCONTENTS[idx].classList.add("active");
          }, 60);
        },
        click: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          const SWIPERSLIDE = document.querySelectorAll(".swiper-slide");
          const BTVBTN = document.querySelector(".btv");
          const CONT4ITEMS = document.querySelectorAll(".container4-item");
          currentIndex = e.realIndex;
          activeIndex = e.activeIndex;
          clickedIndex = e.clickedIndex;

          function tabToZoomFun(value) {
            SWIPERCONTENTS[value].style = `width:90vw; height:80vh; translate: 0 -5vh; filter:brightness(1); border-radius: 35px 35px 35px 35px;`;
          }
          tabToZoomFun(activeIndex);
          SWIPERCONTENTS[activeIndex].muted = true;
          // SWIPERCONTENTS[activeIndex].controls = true;
          CONT3TEXTBOX.style = `opacity: 0;`;
          SCROLLIMG.style = `opacity:0; transition 0.5s; translate: -50% 90%;`;
          CONT2ITEM1.style = `opacity: 0; translate: -40% -50%;`;
          INDIGATOR.style = `opacity: 0; translate: 110% -50%;`;
          BTVBTN.style = `opacity: 1; user-select: auto;`;
          SWIPERSLIDE.forEach((el, key) => {
            if (!el.classList.contains("swiper-slide-active")) {
              el.classList.add("active");
            }
          });
          BODY.style = `position: static`;
          NAVIGATOR.style = `user-select: none`;
          // swiper.destroy(true, true)
          console.log(currentIndex);
          swiper.disable();
          CONT4ITEMS.forEach((el, key) => {
            CONT4ITEMS[currentIndex].classList.add("active");
          });
        },
        slideChangeTransitionStart: function (e) {
          let currentIndex = e.realIndex;
          // let previousIndex = e.previousIndex;
          INDIGATOR.style = `opacity:0`;
          NAVIGATOR[previousIndex].classList.remove("active");
          NAVIGATOR[currentIndex].classList.add("active");
          previousIndex = currentIndex;
          setTimeout(() => {
            spanEffectFun(spanArray[currentIndex], currentIndex);
          }, 500);
        },
        slideChangeTransitionEnd: function (e) {
          let currentIndex = e.realIndex;
          INDIGATOR.innerHTML = "0" + (currentIndex + 1);
          INDIGATOR.style = `opacity:1`;
        },
        slideChange: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          const SWIPERSLIDE = document.querySelectorAll(".swiper-slide");
          // const SWIPERWRAPPER = document.querySelector(".swiper-wrapper");
          // SWIPERWRAPPER.style = `transition-delay: 1s`;
          let currentIndex = e.realIndex;
          let previousIndex = e.previousIndex;
          let activeIndex = e.activeIndex;
          INDIGATOR.innerHTML = "0" + (currentIndex + 1);
          INDIGATOR.style = `opacity:1`;
          if (currentIndex == 0) {
            setTimeout(() => {
              SCROLLIMG.style = `opacity:1; transition 0.5s; translate: -50% -50%;`;
            }, 500);
          } else {
            SCROLLIMG.style = `opacity:0; transition 0.5s; translate: -50% 90%`;
          }
          if (window.innerWidth < 768) {
            SWIPERCONTENTS.forEach((el, key) => {
              el.style = `width:93vw; height:80vh;`;
            });
          } else {
            SWIPERCONTENTS.forEach((el, key) => {
              el.style = `width:78vw; height:80vh;`;
            });
          }
          function videoPlayFun(value) {
            SWIPERCONTENTS[value].muted = true;
            SWIPERCONTENTS[value].loop = true;
            SWIPERCONTENTS[value].play();
          }
          // if (window.innerWidth > 768) {
          videoPlayFun(activeIndex);
          // }
          SWIPERCONTENTS[previousIndex].pause();
          CONT3TEXTBOX.style = `opacity: 1`;
          CONT2ITEM1.style = `translate: 0 -50%;`;
          INDIGATOR.style = `translate: 0 -50%;`;
          main.style.backgroundColor = data[currentIndex].color;
          SWIPERSLIDE.forEach((el, key) => {
            if (!el.classList.contains("swiper-slide-active")) {
              el.classList.remove("active");
            }
          });
        },
        resize: function (e) {
          const SWIPERCONTENTS = document.querySelectorAll(".swiper-contents");
          if (window.innerWidth < 768) {
            SWIPERCONTENTS.forEach((el, key) => {
              el.style = `width:93vw; height:80vh;`;
            });
          } else {
            SWIPERCONTENTS.forEach((el, key) => {
              el.style = `width:78vw; height:80vh;`;
            });
          }
        },
      },
      loop: true,
      preloadImages: true,
      direction: "vertical",
      slidesPerView: "auto",
      grabCursor: true,
      // initialSlide: 6,
      // resizeObserver: true,
      speed: 500,
      observer: true,
      longSwipes: false,
      preventInteractionOnTransition: true,
    });
    NAVIGATOR.forEach((el, key) => {
      el.addEventListener("click", () => {
        swiper.slideTo(key + 6, 700, true);
        swiper.enable();
      });
    });
    const BTVBTN = document.querySelector(".btv");
    BTVBTN.addEventListener("click", () => {
      CONT2ITEM1.style = `translate: -40% -50%; transition: 0.5s`;
      INDIGATOR.style = `translate: 110% -50%; transition: 0.5s`;
      swiper.enable();
      setTimeout(() => {
        BODY.style = `position: fixed`;
        CONT4ITEMS.forEach((el, key) => {
          el.classList.remove("active");
        });
      }, 600);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      BTVBTN.style = ` user-select: none; opacity: 0;`;
    });
  }

  const pTag1 = document.querySelector(".item1-text-wrapper p");
  const pTag2 = document.querySelector(".item2-text-wrapper p");
  const pTag3 = document.querySelector(".item3-text-wrapper p");
  const pTag4 = document.querySelector(".item4-text-wrapper p");
  const pTag5 = document.querySelector(".item5-text-wrapper p");
  const pTag6 = document.querySelector(".item6-text-wrapper p");

  let textArr1 = "Inside the tin ECLIPSE original mint Inside the tin ECLIPSE original mint".split(" ");
  let textArr2 = "Chew your way to fresh ECLIPSE chewy Chew your way to fresh ECLIPSE chewy".split(" ");
  let textArr3 = "Say hello to fresh ECLIPSE fruit trio Say hello to fresh ECLIPSE fruit trio".split(" ");
  let textArr4 = "Freshen up behind the mask ECLIPSE strawberry Freshen up behind the mask ECLIPSE strawberry".split(" ");
  let textArr5 = "Let there be fresh ECLIPSE intense mint Let there be fresh ECLIPSE intense mint".split(" ");
  let textArr6 = "Feel your way back to fresh honey lemon and ginger Feel your way back to fresh honey lemon and ginger".split(" ");

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;

  initTexts(pTag1, textArr1);
  initTexts(pTag2, textArr2);
  initTexts(pTag3, textArr3);
  initTexts(pTag4, textArr4);
  initTexts(pTag5, textArr5);
  initTexts(pTag6, textArr6);

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0`;
    }
  }

  function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translate3d(0, 0, 0)`;
      count = 0;
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

    return count;
  }

  function animate() {
    count1++;
    count2++;
    count3++;
    count4++;
    count5++;
    count6++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, -1);
    count3 = marqueeText(count3, pTag3, -1);
    count4 = marqueeText(count4, pTag4, -1);
    count5 = marqueeText(count5, pTag5, -1);
    count6 = marqueeText(count6, pTag6, -1);

    window.requestAnimationFrame(animate);
  }

  function scrollHandler() {
    count1 += 8;
    count2 += 8;
    count3 += 8;
    count4 += 8;
    count5 += 8;
    count6 += 8;
  }

  window.addEventListener("scroll", scrollHandler);

  animate();

  // 수정중
  const ELMAINFIG = document.querySelectorAll(".container4-content1 figure");
  const ELMAINIMG = document.querySelectorAll(".container4-content1 img");
  document.addEventListener("scroll", () => {
    let currentScrollValue = document.documentElement.scrollTop;
    // value = window.pageYOffset / ELMAINFIG[0].offsetTop - 3.35;

    ELMAINIMG.forEach((el, key) => {
      el.style.transform = `scale(${window.pageYOffset / ELMAINFIG[key].offsetTop - 3.35})`;
    });
    // function scrollEvent(target, target2, effect) {
    //   if (target2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    //     target.style.animation = effect;
    //   }
    // }

    // function scrollEvents(target, target2, effect, num) {
    //   target.forEach((value, key) => {
    //     if (target2[key].offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    //       setInterval(() => {
    //         target[key].style.animation = effect;
    //       }, key * num);
    //     }
    //   });
    // }
    // function scrollEvents2(target, target2, effect, num) {
    //   target.forEach((value, key) => {
    //     if (target2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    //       setInterval(() => {
    //         target[key].style.animation = effect;
    //       }, key * num);
    //     }
    //   });
    // }
  });
  // trigger skip button for editing
  // INTROSKIP.click();
  // clearInterval(introInter);
}
