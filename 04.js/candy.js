window.addEventListener("load", function () {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
  var engine = Engine.create();
  var render = Render.create({
    element: document.body,
    engine: engine,
  });
  //let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let canvasWidth = document.documentElement.clientWidth;
  //let canvasHeight = document.documentElement.clientHeight;
  render.canvas.width = canvasWidth;
  render.canvas.height = canvasHeight;
  let mouseX = canvasWidth / 2;
  let mouseY = 0;
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  // window.pageYOffset > canvas.offsetTop이 될때 box를 만들고싶은데 처리가 안된다..
  // 스크롤을 걸어야하는데 스크롤을 걸면 수치가 변할때마다 호출이 돼서 문제
  const CANVAS = document.querySelector('canvas');
  let boxbool = true;
  this.window.addEventListener('scroll', function(){
      if(window.pageYOffset > CANVAS.offsetTop && boxbool){
        boxCreate();
        boxbool = false;
      }
  })

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

  var staticBottom = Bodies.rectangle(canvasWidth / 2, canvasHeight + 50, canvasWidth, 100, { isStatic: true });
  var staticTop = Bodies.rectangle(canvasWidth / 2, -50, canvasWidth, 100, { isStatic: true });
  var staticLeft = Bodies.rectangle(-50, canvasHeight / 2, 100, canvasHeight, { isStatic: true });
  var staticRight = Bodies.rectangle(canvasWidth + 50, canvasHeight / 2, 100, canvasHeight, { isStatic: true });

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
