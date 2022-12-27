window.addEventListener("load", function () {
  boxBool = true;
  window.addEventListener("scroll", function (e) {
    const AA = document.querySelector(".fourth-canvas");

    if (window.pageYOffset > AA.offsetTop - 500 && boxBool) {
      let count = 0;
      let boxInter = setInterval(() => {
        count++;
        let Box;
        Box = Matter.Bodies.rectangle(mouseX, mouseY, 41, 24, {
          chamfer: {
            radius: [10, 10, 10, 10],
          },
          render: {
            strokeStyle: "transparent",
            sprite: {
              texture: `./01.img/index/candy_mini0${count%4}.png`,
            },
          },
        });

        Matter.Composite.add(engine.world, Box);
        if (count > 200) clearInterval(boxInter);
      }, 30);
      boxBool = false;
    }
  });

  const engine = Matter.Engine.create();
  const world = engine.world;
  engine.world.gravity.y = 1;
  const render = Matter.Render.create({
    element: document.querySelector(".fourth-canvas"),
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: "#B7EBD6",
    },
  });
  Matter.Render.run(render);
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  fetch("./01.img/svg/allproduct.svg")
    .then((response) => {
      return response.text();
    })
    .then((raw) => {
      return new window.DOMParser().parseFromString(raw, "image/svg+xml");
    })
    .then(function (root) {
      const paths = Array.prototype.slice.call(root.querySelectorAll("path"));

      const vertices = paths.map((path) => {
        return Matter.Svg.pathToVertices(path, 5);
      });
      const terrain = Matter.Bodies.fromVertices(
        window.innerWidth / 2,
        window.innerHeight / 2,
        vertices,
        {
          isStatic: true,
          render: {
            fillStyle: "#00AB69",
            strokeStyle: "#00AB69",
            lineWidth: 1,
          },
        },
        true
      );

      var bottomStatic = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true });
      var topStatic = Matter.Bodies.rectangle(window.innerWidth / 2, -50, window.innerWidth, 100, { isStatic: true });
      var leftStatic = Matter.Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true });
      var rightStatic = Matter.Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, { isStatic: true });

      Matter.World.add(world, [terrain, bottomStatic, topStatic, leftStatic, rightStatic]);

      var bodyOptions = {
        frictionAir: 0.1,
        friction: 0.2,
        restitution: 0.5,
      };
    });

  var mouse = Matter.Mouse.create(render.canvas),
    mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  Matter.World.add(world, mouseConstraint);
});
