window.addEventListener("load", function () {
  setTimeout(() => {
    INDEXLOAD();
  }, 1500);
});

function INDEXLOAD() {
  const SECONDIMG = document.querySelector(".img-wrapper-second");

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

  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    // 첫번째, 텍스트 이동
    if (window.pageYOffset > 1000) {
      TEXTFRONT.style = `transform: rotate(${(window.pageYOffset - 1000) / 45}deg)
              translate(-${(window.pageYOffset - 1000) / 10}%, -${(window.pageYOffset - 1000) / 120}%)`;
      TEXTEND.style = `transform: rotate(-${(window.pageYOffset - 1000) / 45}deg)
              translate(${(window.pageYOffset - 1000) / 10}%, -${(window.pageYOffset - 1000) / 120}%)`;
    } else {
      TEXTFRONT.style = `trasnform: rotate(0deg)`;
      TEXTEND.style = `trasnform: rotate(0deg)`;
    }

    // 로고생성
    if (window.pageYOffset > 2000) {
      TEXTFRONT.classList.add("invisible");
      TEXTEND.classList.add("invisible");
      SECONDIMG.classList.add("visible");
      //SECONDIMG.style = `transform: scale(${(window.pageYOffset-2000) * 0.001})`;
    } else {
      TEXTFRONT.classList.remove("invisible");
      TEXTEND.classList.remove("invisible");
      SECONDIMG.classList.remove("visible");
    }

    // 두번째, 캔디 깡통 퍼뜨리기
    if (window.pageYOffset > 2000) {
      CANDY01.style.bottom = `${(window.pageYOffset - 2000) * 0.05 - 40}%`;
      CANDY02.style.bottom = `${(window.pageYOffset - 2000) * 0.06 - 40}%`;
      CANDY03.style.bottom = `${(window.pageYOffset - 2000) * 0.07 - 40}%`;
      CANDY04.style.bottom = `${(window.pageYOffset - 2000) * 0.08 - 40}%`;
      CANDY05.style.bottom = `${(window.pageYOffset - 2000) * 0.08 - 40}%`;
      CANDY06.style.bottom = `${(window.pageYOffset - 2000) * 0.07 - 40}%`;
      CANDY07.style.bottom = `${(window.pageYOffset - 2000) * 0.06 - 40}%`;
      CANDY08.style.bottom = `${(window.pageYOffset - 2000) * 0.05 - 40}%`;

      CANDY01.style.left = `${(window.pageYOffset - 2000) * -0.025 + 40}%`;
      CANDY02.style.left = `${(window.pageYOffset - 2000) * -0.02 + 40}%`;
      CANDY03.style.left = `${(window.pageYOffset - 2000) * -0.015 + 40}%`;
      CANDY04.style.left = `${(window.pageYOffset - 2000) * -0.005 + 40}%`;
      CANDY05.style.left = `${(window.pageYOffset - 2000) * 0.005 + 40}%`;
      CANDY06.style.left = `${(window.pageYOffset - 2000) * 0.015 + 40}%`;
      CANDY07.style.left = `${(window.pageYOffset - 2000) * 0.02 + 40}%`;
      CANDY08.style.left = `${(window.pageYOffset - 2000) * 0.025 + 40}%`;

      CANDY01.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.2}deg)`;
      CANDY02.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.3}deg)`;
      CANDY03.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.4}deg)`;
      CANDY04.style.transform = `rotate(-${(window.pageYOffset - 2000) * 0.5}deg)`;
      CANDY05.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.5}deg)`;
      CANDY06.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.4}deg)`;
      CANDY07.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.3}deg)`;
      CANDY08.style.transform = `rotate(${(window.pageYOffset - 2000) * 0.2}deg)`;
    }
    else{
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
    if(window.pageYOffset == 5000){
      setTimeout(() => {
        location.href = './canvas.html';
      }, 1500);
    }
  });
}
