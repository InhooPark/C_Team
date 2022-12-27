
window.addEventListener("load", function () {

  // matter.js 로드
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
  var engine = Engine.create();

  // div.fourth-canvas 에 canvas를 로드한다
  const CANVAS = document.querySelector('.fourth-canvas');
  var render = Render.create({
    element: CANVAS,
    engine: engine,
  });

  // canvas의 width, height 값을 브라우저의 width, height 값으로 설정
  let canvasHeight = window.innerHeight;
  let canvasWidth = document.documentElement.clientWidth;
  render.canvas.width = canvasWidth;
  render.canvas.height = canvasHeight;

  // 브라우저내 마우스의 x, y좌표를 받아온다
  let mouseX = canvasWidth / 2;
  let mouseY = 0;
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 캔버스 영역으로 진입했을때 박스 생성을 시작한다
  let boxbool = true;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > CANVAS.offsetTop && boxbool) {
      boxCreate();
      boxbool = false;
    }
  });

  // 박스 생성 함수
  function boxCreate() {
    let count = 0;
    let boxInter = setInterval(() => {
      count++;
      let Box = Bodies.rectangle(mouseX, mouseY, 40, 30);
      Composite.add(engine.world, [Box]);
      if (count > 200) {
        clearInterval(boxInter);
      }
    }, 30);
  }

  // 박스가 밖으로 나가지 않도록 static 속성의 테두리를 만들어준다. 
  // static이 false일시 gravity 영향을 받아 박스와 함께 canvas 영역 밖으로 떨어진다.
  var staticBottom = Bodies.rectangle(canvasWidth / 2, canvasHeight + 50, canvasWidth, 100, { isStatic: true });
  var staticTop = Bodies.rectangle(canvasWidth / 2, -50, canvasWidth, 100, { isStatic: true });
  var staticLeft = Bodies.rectangle(-50, canvasHeight / 2, 100, canvasHeight, { isStatic: true });
  var staticRight = Bodies.rectangle(canvasWidth + 50, canvasHeight / 2, 100, canvasHeight, { isStatic: true });

  // 마우스 드래그 이벤트 생성
  let mouse = Matter.Mouse.create(render.canvas);
  let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      render: { visible: false },
    },
  });
  render.mouse = mouse;

  Composite.add(engine.world, [staticBottom, staticTop, staticLeft, staticRight, mouseConstraint]);
  Render.run(render);
  var runner = Runner.create();
  Runner.run(runner, engine);
});
