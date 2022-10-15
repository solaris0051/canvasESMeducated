// static import
import colors from "./modules/defColors.js"; //object of color palette
import { Canvas } from "./modules/canvas.js"; //Class of canvas
import fscreen from "fscreen";

if (fscreen.fullscreenEnabled) {
  fscreen.addEventListener("fullscreenchange", handler, false);
  fscreen.requestFullscreen(html);
}

function handler() {
  if (fscreen.fullscreenElement !== null) {
    console.log("Entered fullscreen mode");
  } else {
    console.log("Exited fullscreen mode");
  }
}
const squareBtn = document.querySelector(".square");
const circleBtn = document.querySelector(".circle");
const triangleBtn = document.querySelector(".triangle");

// creating a canvas.
const Canv0 = new Canvas(800, 800);
Canv0.create();

// dynamic import(drawing squares on the canvas)
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square1 = new Module.Square(Canv0.ctx, 100, 0, 0, colors.purple);
    square1.draw();
    const square2 = new Module.Square(Canv0.ctx, 125, 100, 100, colors.yellow);
    square2.draw();
    const square3 = new Module.Square(
      Canv0.ctx,
      156.25,
      225,
      225,
      colors.purple
    );
    square3.draw();
    const square4 = new Module.Square(
      Canv0.ctx,
      195.3125,
      381.25,
      381.25,
      colors.yellow
    );
    square4.draw();
    const square5 = new Module.Square(
      Canv0.ctx,
      223.4375,
      576.5625,
      576.5625,
      colors.purple
    );
    square5.draw();
  });
});

// dynamic import(drawing circles on the canvas)
circleBtn.addEventListener("click", () => {
  import("./modules/circle.js").then((Module) => {
    const circle1 = new Module.Circle(Canv0.ctx, 200, 200, 600, colors.green);
    circle1.draw();
    const circle2 = new Module.Circle(Canv0.ctx, 100, 200, 500, colors.blue);
    circle2.draw();
    const circle3 = new Module.Circle(Canv0.ctx, 50, 200, 500, colors.green);
    circle3.draw();
    const circle4 = new Module.Circle(Canv0.ctx, 100, 200, 700, colors.blue);
    circle4.draw();
    const circle5 = new Module.Circle(Canv0.ctx, 50, 200, 700, colors.green);
    circle5.draw();
  });
});

// dynamic import(drawing triangles on the canvas)
triangleBtn.addEventListener("click", () => {
  import("./modules/triangle.js").then((Module) => {
    const triangle1 = new Module.Triangle(Canv0.ctx, 113, 687, 0, colors.red);
    triangle1.draw();
    const triangle2 = new Module.Triangle(
      Canv0.ctx,
      113,
      630.5,
      97.918,
      colors.orange
    );
    triangle2.draw();
    const triangle3 = new Module.Triangle(Canv0.ctx, 113, 574, 0, colors.red);
    triangle3.draw();
    const triangle4 = new Module.Triangle(
      Canv0.ctx,
      113,
      517.5,
      97.918,
      colors.orange
    );
    triangle4.draw();
    const triangle5 = new Module.Triangle(Canv0.ctx, 113, 461, 0, colors.red);
    triangle5.draw();
    const triangle6 = new Module.Triangle(
      Canv0.ctx,
      113,
      574,
      195.836,
      colors.red
    );
    triangle6.draw();
  });
});

// just another tweak: animation
const actionBtn = document.querySelector(".action");
actionBtn.addEventListener("click", () => {
  import("./modules/CanvasAnim.js").then((Module) => {
    Module.CanvasAnim();
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => window.location.reload());
