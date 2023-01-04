window.addEventListener("load", function () {
  setTimeout(() => {
    INDEXLOAD();
  }, 1500);
});

function INDEXLOAD() {
  const SECONDIMG = document.querySelector(".img-wrapper-second .origin");
  const SECONDSHADOW = document.querySelector(".img-wrapper-second .shadow");
  const SCROLL = document.querySelector(".scroll");
  const TOUCH = document.querySelector(".touch");
  const MTOUCH = document.querySelector(".mobile-touch");

  const CANDY01 = document.querySelector(".candy01");
  const CANDY02 = document.querySelector(".candy02");
  const CANDY03 = document.querySelector(".candy03");
  const CANDY04 = document.querySelector(".candy04");
  const CANDY05 = document.querySelector(".candy05");
  const CANDY06 = document.querySelector(".candy06");
  const CANDY07 = document.querySelector(".candy07");
  const CANDY08 = document.querySelector(".candy08");

  // 첫번째 텍스트 불러오는 애니메이션
  // 진행하는동안 body에 overflowY:none;을 선언해 스크롤을 못하게 막는다.
  const ECLIPSETEXT = document.querySelector(".eclipse-text i");
  ECLIPSETEXT.innerHTML = `
    <span class="span-front">
      <span>E</span>
      <span>C</span>
      <span>L</span>
    </span>
    <span class="span-end">
      <span>I</span>
      <span>P</span>
      <span>S</span>
      <span>E</span>
    </span>`;
  setTimeout(() => {
    const ECLIPSETEXTSPAN = document.querySelectorAll(".eclipse-text i >span >span");
    ECLIPSETEXTSPAN.forEach((value, key) => {
      setTimeout(() => {
        document.body.classList.remove("first-text-ani");
      }, 1050);
      setTimeout(() => {
        value.classList.add("up");
      }, 150 * key);
    });
  }, 50);
  const TEXTFRONT = document.querySelector(".span-front");
  const TEXTEND = document.querySelector(".span-end");
  let mouseX;
  let mouseY;
  let touchTrue = false;

  let contentX = 0;
  let contentY = 0;
  let d = 0;

  let winpageY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;

    TOUCH.style = `left: ${mouseX}%; top: ${mouseY}%;`;
    if (touchTrue) {
      TOUCH.classList.add("visible");
      if (window.innerWidth > 1024) {
        this.document.body.classList.add("cursor-none");
      }
      touchTrue = false;
    }

    contentX = e.clientX - (SECONDIMG.getBoundingClientRect().x + SECONDIMG.offsetWidth / 2);
    contentY = e.clientY - (SECONDIMG.getBoundingClientRect().y + SECONDIMG.offsetHeight / 2);
    d = Math.sqrt(contentX * contentX + contentY * contentY);

    console.log(contentX, contentY)

    SECONDIMG.style = `opacity : ${(winpageY - 1000) * 0.001};`;
    SECONDSHADOW.style = `opacity : ${(winpageY - 1000) * 0.001};`;
    SECONDIMG.style.transform = `rotate3d(${-contentY / 100}, ${contentX / 100}, 0, ${d / 20}deg)`;
    SECONDSHADOW.style.transform = `rotate3d(${-contentY / 100}, ${contentX / 100}, 0, ${d / 20}deg)`;
    SECONDSHADOW.style.left = `${(contentX / -60) + 30 }%`;
    SECONDSHADOW.style.top = `${(-contentY / 40)+ 35}%`;
  });

  window.addEventListener("scroll", function () {
    winpageY = window.pageYOffset;
    // 첫번째, 텍스트 이동
    if (window.pageYOffset > 500) {
      TEXTFRONT.style = `transform: rotate(${(window.pageYOffset - 500) / 45}deg)
              translate(-${(window.pageYOffset - 500) / 10}%, -${(window.pageYOffset - 500) / 120}%)`;
      TEXTEND.style = `transform: rotate(-${(window.pageYOffset - 500) / 45}deg)
              translate(${(window.pageYOffset - 500) / 10}%, -${(window.pageYOffset - 500) / 120}%)`;
    } else {
      TEXTFRONT.style = `trasnform: rotate(0deg)`;
      TEXTEND.style = `trasnform: rotate(0deg)`;
    }

    // 마우스 이벤트

    // 로고
    SECONDIMG.style = `opacity: ${(window.pageYOffset - 1000) * 0.001};`;
    SECONDSHADOW.style = `opacity: ${(window.pageYOffset - 1000) * 0.001};`;
    SECONDIMG.style.transform = `rotate3d(${-contentY / 100}, ${contentX / 100}, 0, ${d / 20}deg)`;
    SECONDSHADOW.style.transform = `rotate3d(${-contentY / 100}, ${contentX / 100}, 0, ${d / 20}deg)`;
    SECONDSHADOW.style.left = `${(contentX / -60) + 30 }%`;
    SECONDSHADOW.style.top = `${(-contentY / 40)+ 35}%`;

    // 로고생성
    if (window.pageYOffset > 2000) {
      TEXTFRONT.classList.add("invisible");
      TEXTEND.classList.add("invisible");
    } else {
      TEXTFRONT.classList.remove("invisible");
      TEXTEND.classList.remove("invisible");
    }

    // 두번째, 캔디 깡통 퍼뜨리기
    if (window.pageYOffset > 2000) {
      CANDY01.style.bottom = `${(window.pageYOffset - 2000) * 0.05 - 20}%`;
      CANDY02.style.bottom = `${(window.pageYOffset - 2000) * 0.06 - 20}%`;
      CANDY03.style.bottom = `${(window.pageYOffset - 2000) * 0.07 - 20}%`;
      CANDY04.style.bottom = `${(window.pageYOffset - 2000) * 0.08 - 20}%`;
      CANDY05.style.bottom = `${(window.pageYOffset - 2000) * 0.08 - 20}%`;
      CANDY06.style.bottom = `${(window.pageYOffset - 2000) * 0.07 - 20}%`;
      CANDY07.style.bottom = `${(window.pageYOffset - 2000) * 0.06 - 20}%`;
      CANDY08.style.bottom = `${(window.pageYOffset - 2000) * 0.05 - 20}%`;

      CANDY01.style.left = `${(window.pageYOffset - 2000) * -0.025 + 35}%`;
      CANDY02.style.left = `${(window.pageYOffset - 2000) * -0.02 + 35}%`;
      CANDY03.style.left = `${(window.pageYOffset - 2000) * -0.015 + 35}%`;
      CANDY04.style.left = `${(window.pageYOffset - 2000) * -0.005 + 35}%`;
      CANDY05.style.left = `${(window.pageYOffset - 2000) * 0.005 + 35}%`;
      CANDY06.style.left = `${(window.pageYOffset - 2000) * 0.015 + 35}%`;
      CANDY07.style.left = `${(window.pageYOffset - 2000) * 0.02 + 35}%`;
      CANDY08.style.left = `${(window.pageYOffset - 2000) * 0.025 + 35}%`;

      CANDY01.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.15}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY02.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.25}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY03.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.35}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY04.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.45}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY05.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.45}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY06.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.35}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY07.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.25}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
      CANDY08.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.15}deg)
        scale(${(window.pageYOffset - 2000) * 0.0008})`;
    } else {
      CANDY01.style.bottom = `-100%`;
      CANDY02.style.bottom = `-100%`;
      CANDY03.style.bottom = `-100%`;
      CANDY04.style.bottom = `-100%`;
      CANDY05.style.bottom = `-100%`;
      CANDY06.style.bottom = `-100%`;
      CANDY07.style.bottom = `-100%`;
      CANDY08.style.bottom = `-100%`;
    }

    // 클릭이벤트로 변경해도 무방함
    if (window.pageYOffset == 5000) {
      SCROLL.classList.add("invisible");
      MTOUCH.classList.add("visible");
      window.addEventListener("click", onClickFunc);
      touchTrue = true;
    } else {
      SCROLL.classList.remove("invisible");
      TOUCH.classList.remove("visible");
      MTOUCH.classList.remove("visible");
      window.removeEventListener("click", onClickFunc);
      this.document.body.classList.remove("cursor-none");
    }
  });
}

let windowWidth = window.matchMedia("screen and (max-width: 1024px)");

function onClickFunc() {
  if(windowWidth.matches){
    setTimeout(() => {
      location.href = "./canvas.html";
    }, 1000);
  }
  else{
    location.href = "./canvas.html";
  }
}
