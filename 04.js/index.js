window.addEventListener("load", function () {
  const FIRSTIMG = document.querySelector(".img-wrapper-first");
  const SECONDIMG = document.querySelector(".img-wrapper-second");
  const SCROLLGIF = this.document.querySelector('.scroll-img');

  const CANDY01 = document.querySelector(".candy01");
  const CANDY02 = document.querySelector(".candy02");
  const CANDY03 = document.querySelector(".candy03");
  const CANDY04 = document.querySelector(".candy04");
  const CANDY05 = document.querySelector(".candy05");
  const CANDY06 = document.querySelector(".candy06");
  const CANDY07 = document.querySelector(".candy07");
  const CANDY08 = document.querySelector(".candy08");

  const VIDEO = document.querySelector(".video-wrap");

  window.addEventListener("scroll", function () {
    // 첫번째, 텍스트 이동 + 로고 생성 + 스크롤 아이콘
    if (window.pageYOffset < 1000) {
      FIRSTIMG.style.transform = `translateX(${window.pageYOffset * 0.2 - 200}%)`;
      SCROLLGIF.classList.remove('invisible');
    } else if (this.window.pageYOffset > 1000) {
      FIRSTIMG.style.transform = `translateX(0%)`;
      SCROLLGIF.classList.add('invisible');
    }
    if (window.pageYOffset > 2000) {
      FIRSTIMG.classList.add("invisible");
    } else {
      FIRSTIMG.classList.remove("invisible");
    }
    if (window.pageYOffset > 3000) {
      SECONDIMG.classList.add("visible");
    } else {
      SECONDIMG.classList.remove("visible");
    }

    // 두번째, 캔디 깡통 퍼뜨리기
    if (window.pageYOffset > 6000) {
      CANDY01.style.bottom = `${(window.pageYOffset - 6000) * 0.1 - 40}%`;
      CANDY02.style.bottom = `${(window.pageYOffset - 6000) * 0.11 - 40}%`;
      CANDY03.style.bottom = `${(window.pageYOffset - 6000) * 0.12 - 40}%`;
      CANDY04.style.bottom = `${(window.pageYOffset - 6000) * 0.13 - 40}%`;
      CANDY05.style.bottom = `${(window.pageYOffset - 6000) * 0.13 - 40}%`;
      CANDY06.style.bottom = `${(window.pageYOffset - 6000) * 0.12 - 40}%`;
      CANDY07.style.bottom = `${(window.pageYOffset - 6000) * 0.11 - 40}%`;
      CANDY08.style.bottom = `${(window.pageYOffset - 6000) * 0.1 - 40}%`;

      CANDY01.style.left = `${(window.pageYOffset - 6000) * -0.05 + 40}%`;
      CANDY02.style.left = `${(window.pageYOffset - 6000) * -0.04 + 40}%`;
      CANDY03.style.left = `${(window.pageYOffset - 6000) * -0.03 + 40}%`;
      CANDY04.style.left = `${(window.pageYOffset - 6000) * -0.01 + 40}%`;
      CANDY05.style.left = `${(window.pageYOffset - 6000) * 0.01 + 40}%`;
      CANDY06.style.left = `${(window.pageYOffset - 6000) * 0.03 + 40}%`;
      CANDY07.style.left = `${(window.pageYOffset - 6000) * 0.04 + 40}%`;
      CANDY08.style.left = `${(window.pageYOffset - 6000) * 0.05 + 40}%`;
    }

    // 세번째, 비디오 opacity
    if (window.pageYOffset > 7500) {
      VIDEO.classList.add("visible");
    } else {
      VIDEO.classList.remove("visible");
    }
  });
});
