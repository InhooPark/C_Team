window.addEventListener("load", function () {
  const INTROTEXT = document.querySelector(".intro-text-wrapper");
  const INTROPTAG = document.querySelectorAll(".intro-text-wrapper p");
  const INTROIMGWRAP = document.querySelector(".intro-image-wrapper");
  const INTROBTN = document.querySelector(".intro-btn");
  const INTROSKIP = document.querySelector(".intro-skip-btn");

  // 인트로에 사용할 DOM 선언
  // 인트로 텍스트와 랜덤팝업 이미지 함수 시작
  function introTextFun(target, delay, repeat) {
    // 대상, 딜레이시간, 반복횟수는 매개변수로 받아서 사용
    let num = 1;
    let num2 = 0;
    let moveValue = 0;
    // 이동값은 숫자로 저장해서 텍스트 이동시마다 clientHeight값을 더해 이동
    let introInter = "";
    // clearInterval 사용을 위해 변수 선언
    let opacityBlurAni = `opacityBlurAni 5s 0s cubic-bezier(0.5, 1, 0.89, 1)`;
    // css에서 만들어 놓은 애니메이션 변수에 저장
    // 맨처음 텍스트 먼저 실행해서 opcity 값 변경
    INTROPTAG[num2].style.animation = opacityBlurAni;
    //텍스트 moveUp interval 실행
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
    // 매 새로고침마다 다른 이미지 생성을 위해 랜덤변수 생성
    let randomNumber = Math.floor(Math.random() * (INTROBTN.length + 1));
    // opacity 1로 변환 전에 클래스 active로 diplay block 만들어줌
    // 이렇게 안했을때 display block 처리하면 갑자기 튀어 나오는 현상 있음..
    let btnActive = setTimeout(() => {
      //버튼의 이미지가 여러개일 경우
      // INTROBTN.forEach(() => {
      //   INTROBTN[randomNumber].classList.add("active");
      // });
      INTROBTN.classList.add("active");
      INTROIMGWRAP.classList.add("active");
      console.log("버튼 엑티브");
    }, delay * INTROPTAG.length + 1200);
    // 팝업 이미지 opacity 효과
    let imgPop = "";
    // 사용자가 팝업전에 클릭시 만약 배경화면 색이 이미 들어가 있다면 이미지 팝업 clear
    if (!main.classList.contains("active")) {
      imgPop = setTimeout(() => {
        INTROIMGWRAP.style = `opacity: 1`;
        console.log("버튼 팝업");
      }, delay * INTROPTAG.length + 2000);
    } else {
      clearTimeout(imgPop);
    }
    // 사용자가 이미지 10초동안 클릭하지 않으면 강제 클릭이벤트 트리거
    setTimeout(() => {
      INTROIMGWRAP.click();
    }, delay * INTROPTAG.length + 12000);
    INTROSKIP.addEventListener("click", () => {
      INTROIMGWRAP.click();
      clearTimeout(btnActive);
      clearTimeout(imgPop);
      clearInterval(introInter);
    });
  }
  // 위 함수 실행
  introTextFun(INTROTEXT, 2000, INTROPTAG.length);
  // 팝업 이미지 클릭시 opacity 0 으로 전환되면서 배경 화면 생성. 이미지는 display none.
  const ELCANVAS = document.querySelector(".canvas");
  // 캔버스 선언
  // 클릭 이벤트 : 배경화면 전환 & 캔버스 active
  INTROIMGWRAP.addEventListener("click", (e) => {
    console.log(e.target);
    main.classList.add("active");
    INTROIMGWRAP.style = `opacity: 0;`;
    //배경화면 뿌려주면서 캔버스 앞으로
    ELCANVAS.style = `z-index: 1`;
    // 이미지 사라질때 스케일 업
    // INTROBTN.forEach((el, key) => {
    //   INTROBTN[key].style = `scale: 3`;
    // });
    INTROBTN.style = `scale: 2`;
    console.log("백그라운드 효과");
    setTimeout(() => {
      INTROIMGWRAP.classList.remove("active");
    }, 2000);
  });

  // 캔버스
  const ctx = ELCANVAS.getContext("2d");

  //캔버스 창 크기 선언
  ELCANVAS.width = window.innerWidth;
  ELCANVAS.height = window.innerHeight;

  // 랜더 함수 생성
  // 창 크기 변경시 innerWidth, innerHeight 값 리사이즈
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
    if (main.classList.contains("active")) {
      ELCANVAS.classList.add("active");
      setTimeout(() => {
        ctx.clearRect(0, 0, ELCANVAS.width, ELCANVAS.height);
      }, 10000);
    } else {
      window.requestAnimationFrame(renderMintPetal);
    }
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

  const swiper = new Swiper(".swiper-container", {
    // direction: "vertical",
    mousewheel: {},
    effect: "slide",
    spaceBetween: 30,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
});
