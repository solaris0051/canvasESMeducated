// static import
import colors from "./modules/defColors.js"; //object of color palette
import { Canvas } from "./modules/canvas.js"; //Class of canvas

// const squareBtn = document.querySelector(".square");
// const circleBtn = document.querySelector(".circle");
// const triangleBtn = document.querySelector(".triangle");

const btn = [
  document.querySelector(".square"),
  document.querySelector(".circle"),
  document.querySelector(".triangle"),
  document.querySelector(".action"),
  document.querySelector(".clear"),
];

// creating a canvas.
const Canv0 = new Canvas(800, 800);
Canv0.create();

// dynamic import(drawing squares on the canvas)
btn[0].addEventListener(
  "click",
  () => {
    import("./modules/square.js").then((Module) => {
      const square = [
        new Module.Square(Canv0.ctx, 100, 0, 0, colors.purple),
        new Module.Square(Canv0.ctx, 125, 100, 100, colors.yellow),
        new Module.Square(Canv0.ctx, 156.25, 225, 225, colors.purple),
        new Module.Square(Canv0.ctx, 195.3125, 381.25, 381.25, colors.yellow),
        new Module.Square(
          Canv0.ctx,
          223.4375,
          576.5625,
          576.5625,
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
        new Module.Circle(Canv0.ctx, 200, 200, 600, colors.green),
        new Module.Circle(Canv0.ctx, 100, 200, 500, colors.blue),
        new Module.Circle(Canv0.ctx, 50, 200, 500, colors.green),
        new Module.Circle(Canv0.ctx, 100, 200, 700, colors.blue),
        new Module.Circle(Canv0.ctx, 50, 200, 700, colors.green),
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
        new Module.Triangle(Canv0.ctx, 113, 687, 0, colors.red),
        new Module.Triangle(Canv0.ctx, 113, 630.5, 97.918, colors.orange),
        new Module.Triangle(Canv0.ctx, 113, 574, 0, colors.red),
        new Module.Triangle(Canv0.ctx, 113, 517.5, 97.918, colors.orange),
        new Module.Triangle(Canv0.ctx, 113, 461, 0, colors.red),
        new Module.Triangle(Canv0.ctx, 113, 574, 195.836, colors.red),
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
