const INTROTEXT = document.querySelector(".intro-text-wrapper");
const INTROPTAG = document.querySelectorAll(".intro-text-wrapper p");
const INTROFIGURE = document.querySelector("figure");
const INTROFIGUREIMG = document.querySelectorAll("figure img");
// 인트로에 사용할 DOM 선언
//인트로 텍스트와 랜덤팝업 이미지 함수 시작
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
  let randomNumber = Math.floor(Math.random() * (INTROFIGUREIMG.length + 1));
  // opacity 1로 변환 전에 클래스 active로 diplay block 만들어줌
  // 이렇게 안했을때 display block 처리하면 갑자기 튀어 나오는 현상 있음..
  setTimeout(() => {
    INTROFIGURE.classList.add("active");
    INTROFIGUREIMG.forEach(() => {
      INTROFIGUREIMG[randomNumber].classList.add("active");
    });
    console.log("통 엑티브");
  }, delay * INTROPTAG.length + 1000);
  // 팝업 이미지 opacity 효과
  let imgPop = "";
  // 사용자가 팝업전에 클릭시 만약 배경화면 색이 이미 들어가 있다면 이미지 팝업 clear
  if (!main.classList.contains("active")) {
    imgPop = setTimeout(() => {
      INTROFIGURE.style = `opacity: 1`;
      console.log("통 팝업");
    }, delay * INTROPTAG.length + 2000);
  } else {
    clearTimeout(imgPop);
  }
}
// 위 함수 실행
introTextFun(INTROTEXT, 2000, INTROPTAG.length);
// 팝업 이미지 클릭시 opacity 0 으로 전환되면서 배경 화면 생성. 이미지는 display none.
INTROFIGURE.addEventListener("click", (e) => {
  console.log(e.target);
  main.classList.add("active");
  INTROFIGURE.style = `opacity: 0`;
  console.log("백그라운드 효과");
  setTimeout(() => {
    INTROFIGURE.classList.remove("active");
  }, 2000);
});
