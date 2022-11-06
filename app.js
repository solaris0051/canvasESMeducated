// static import
import colors from "./modules/defColors.js"; //object of color palette
import { Canvas, SubCanvas } from "./modules/canvas.js"; //Class of Canvas and its SubCanvas
const btn = [
  document.querySelector(".square"),
  document.querySelector(".circle"),
  document.querySelector(".triangle"),
  document.querySelector(".action"),
  document.querySelector(".relo"),
];

// creating canvases.
const Canv0 = new SubCanvas(500, 500);
Canv0.create();

const Canv1 = new Canvas(500, 500);
Canv1.create();

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
      const circle = [
        new Module.Circle(
          Canv1.ctx,
          Math.floor(Canv1.width / 4),
          Math.floor(Canv1.width / 4),
          Math.floor(Canv1.width / 1.333),
          colors.green
        ),
        new Module.Circle(
          Canv1.ctx,
          Math.floor(Canv1.width / 4.923),
          Math.floor(Canv1.width / 4),
          Math.floor(Canv1.width / 1.254),
          colors.blue
        ),
        new Module.Circle(
          Canv1.ctx,
          Math.floor(Canv1.width / 6.4),
          Math.floor(Canv1.width / 4),
          Math.floor(Canv1.width / 1.185),
          colors.green
        ),

        new Module.Circle(
          Canv1.ctx,
          Math.floor(Canv1.width / 9.142),
          Math.floor(Canv1.width / 4),
          Math.floor(Canv1.width / 1.122),
          colors.blue
        ),
        new Module.Circle(
          Canv1.ctx,
          Math.floor(Canv1.width / 16),
          Math.floor(Canv1.width / 4),
          Math.floor(Canv1.width / 1.066),
          colors.green
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
          Canv1.ctx,
          Math.floor(Canv1.width / 7.079),
          Math.floor(Canv1.width / 1.164),
          0,
          colors.red
        ),
        new Module.Triangle(
          Canv1.ctx,
          Math.floor(Canv1.width / 7.079),
          Math.floor(Canv1.width / 1.393),
          0,
          colors.red
        ),
        new Module.Triangle(
          Canv1.ctx,
          Math.floor(Canv1.width / 7.079),
          Math.floor(Canv1.width / 1.735),
          0,
          colors.red
        ),
        new Module.Triangle(
          Canv1.ctx,
          Math.floor(Canv1.width / 7.079),
          Math.floor(Canv1.width / 1.268),
          Math.floor(Canv1.width / 8.107),
          colors.orange
        ),
        new Module.Triangle(
          Canv1.ctx,
          Math.floor(Canv1.width / 7.079),
          Math.floor(Canv1.width / 1.545),
          Math.floor(Canv1.width / 8.107),
          colors.orange
        ),
        new Module.Triangle(
          Canv1.ctx,
          Math.floor(Canv1.width / 7.079),
          Math.floor(Canv1.width / 1.393),
          Math.floor(Canv1.width / 4.085),
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

// just another tweak: animation to make a ball bouncing and accelerating.
btn[3].addEventListener(
  "click",
  () => {
    import("./modules/CanvasAnim.js").then((Module) => {
      Module.CanvasAnim();
    });
  },
  false
);

//reloading
btn[4].addEventListener("click", () => location.reload(), false);
