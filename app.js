// static import
//object of color palette
import colors from "./modules/defColors.js";
//Classes of Canvases
import {
  Canvas,
  AltCanvas,
  SubCanvas,
  YetCanvas,
  YetAnotherCanvas,
} from "./modules/canvas.js";
const btn = [
  document.querySelector(".square"),
  document.querySelector(".circle"),
  document.querySelector(".triangle"),
  document.querySelector(".action"),
  document.querySelector(".clear_canvas1_4"),
  document.querySelector(".clear_canvas5"),
  document.querySelector(".relo"),
];

// one edge of square canvas
const edge_of_canvas = 300;
const Canv1 = new Canvas(`${edge_of_canvas}`, `${edge_of_canvas}`);
Canv1.create();
const Canv2 = new AltCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`);
Canv2.create();
const Canv3 = new SubCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`);
Canv3.create();
const Canv4 = new YetCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`);
Canv4.create();
const Canv5 = new YetAnotherCanvas(`${edge_of_canvas}`, `${edge_of_canvas}`);
Canv5.create();

// dynamic import(drawing squares on the canvas)
btn[0].addEventListener(
  "click",
  () => {
    import("./modules/square.js").then((Module) => {
      const square = [
        new Module.Square(
          Canv1.ctx,
          Math.floor(Canv1.width / 8),
          0,
          0,
          colors.purple
        ),
        new Module.Square(
          Canv1.ctx,
          Math.floor(Canv1.width / 6.4),
          Math.floor(Canv1.width / 8),
          Math.floor(Canv1.width / 8),
          colors.yellow
        ),
        new Module.Square(
          Canv1.ctx,
          Math.floor(Canv1.width / 5.128),
          Math.floor(Canv1.width / 3.555),
          Math.floor(Canv1.width / 3.555),
          colors.purple
        ),
        new Module.Square(
          Canv1.ctx,
          Math.floor(Canv1.width / 4.102),
          Math.floor(Canv1.width / 2.099),
          Math.floor(Canv1.width / 2.099),
          colors.yellow
        ),
        new Module.Square(
          Canv1.ctx,
          Math.floor(Canv1.width / 3.587),
          Math.floor(Canv1.width / 1.388),
          Math.floor(Canv1.width / 1.388),
          colors.purple
        ),
      ];
      for (let i = 0; i < square.length; i++) {
        square[i].draw();
      }
    });
  },
  false
);

// dynamic import(drawing circles on the canvas)
btn[1].addEventListener(
  "click",
  () => {
    import("./modules/circle.js").then((Module) => {
      // greenBlue
      const circle = [
        new Module.Circle(
          Canv2.ctx,
          Math.floor(Canv2.width / 4),
          Math.floor(Canv2.width / 2),
          Math.floor(Canv2.width / 1.333),
          colors.green
        ),
        new Module.Circle(
          Canv2.ctx,
          Math.floor(Canv2.width / 4.923),
          Math.floor(Canv2.width / 2),
          Math.floor(Canv2.width / 1.254),
          colors.blue
        ),
        new Module.Circle(
          Canv2.ctx,
          Math.floor(Canv2.width / 6.4),
          Math.floor(Canv2.width / 2),
          Math.floor(Canv2.width / 1.185),
          colors.green
        ),
        new Module.Circle(
          Canv2.ctx,
          Math.floor(Canv2.width / 9.142),
          Math.floor(Canv2.width / 2),
          Math.floor(Canv2.width / 1.122),
          colors.blue
        ),
        new Module.Circle(
          Canv2.ctx,
          Math.floor(Canv2.width / 16),
          Math.floor(Canv2.width / 2),
          Math.floor(Canv1.width / 1.066),
          colors.green
        ),
        //redPurple
        new Module.Circle(
          Canv3.ctx,
          Math.floor(Canv3.width / 4),
          Math.floor(Canv3.width / 1.33),
          Math.floor(Canv3.width / 1.333),
          colors.red
        ),
        new Module.Circle(
          Canv3.ctx,
          Math.floor(Canv3.width / 4.923),
          Math.floor(Canv3.width / 1.33),
          Math.floor(Canv3.width / 1.254),
          colors.purple
        ),
        new Module.Circle(
          Canv3.ctx,
          Math.floor(Canv3.width / 6.4),
          Math.floor(Canv3.width / 1.33),
          Math.floor(Canv3.width / 1.185),
          colors.red
        ),
        new Module.Circle(
          Canv3.ctx,
          Math.floor(Canv3.width / 9.142),
          Math.floor(Canv3.width / 1.33),
          Math.floor(Canv3.width / 1.122),
          colors.purple
        ),
        new Module.Circle(
          Canv3.ctx,
          Math.floor(Canv3.width / 16),
          Math.floor(Canv3.width / 1.33),
          Math.floor(Canv3.width / 1.066),
          colors.red
        ),
      ];
      for (let i = 0; i < circle.length; i++) {
        circle[i].draw();
      }
    });
  },
  false
);

// dynamic import(drawing triangles on the canvas)
btn[2].addEventListener(
  "click",
  () => {
    import("./modules/triangle.js").then((Module) => {
      const triangle = [
        new Module.Triangle(
          Canv4.ctx,
          Math.floor(Canv4.width / 7.079),
          Math.floor(Canv4.width / 1.164),
          0,
          colors.red
        ),
        new Module.Triangle(
          Canv4.ctx,
          Math.floor(Canv4.width / 7.079),
          Math.floor(Canv4.width / 1.393),
          0,
          colors.red
        ),
        new Module.Triangle(
          Canv4.ctx,
          Math.floor(Canv4.width / 7.079),
          Math.floor(Canv4.width / 1.735),
          0,
          colors.red
        ),
        new Module.Triangle(
          Canv4.ctx,
          Math.floor(Canv4.width / 7.079),
          Math.floor(Canv4.width / 1.268),
          Math.floor(Canv4.width / 8.107),
          colors.orange
        ),
        new Module.Triangle(
          Canv4.ctx,
          Math.floor(Canv4.width / 7.079),
          Math.floor(Canv4.width / 1.545),
          Math.floor(Canv4.width / 8.107),
          colors.orange
        ),
        new Module.Triangle(
          Canv4.ctx,
          Math.floor(Canv4.width / 7.079),
          Math.floor(Canv4.width / 1.393),
          Math.floor(Canv4.width / 4.085),
          colors.red
        ),
      ];
      for (let i = 0; i < triangle.length; i++) {
        triangle[i].draw();
      }
    });
  },
  false
);

// just another tweak: animation to make a ball bouncing, accelerating, and slowing down to stop.
btn[3].addEventListener(
  "click",
  () => {
    import("./modules/CanvasAnim.js").then((Module) => {
      Module.CanvasAnim();
    });
  },
  false
);

// clear_canvas1_4
btn[4].addEventListener(
  "click",
  () => {
    document
      .getElementById("canvas1")
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
    document
      .getElementById("canvas2")
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
    document
      .getElementById("canvas3")
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
    document
      .getElementById("canvas4")
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
  },
  false
);

// clear_canvas5
btn[5].addEventListener(
  "click",
  () => {
    document
      .getElementById("canvas5)
      .getContext("2d")
      .clearRect(0, 0, `${edge_of_canvas}`, `${edge_of_canvas}`);
  },
  false
);

//reloading
btn[6].addEventListener("click", () => location.reload(), false);
