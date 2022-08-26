// static import
import colors from "./modules/defColors.js"; //object of color palette
import { Canvas } from "./modules/canvas.js"; //Class of canvas
import "./style.css";

const squareBtn = document.querySelector(".square");
const circleBtn = document.querySelector(".circle");
const triangleBtn = document.querySelector(".triangle");

// creating a canvas.
const Canv0 = new Canvas(700, 700);
Canv0.create();

// dynamic import(drawing squares on the canvas)
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then(Module => {
    const square1 = new Module.Square(Canv0.ctx, 100, 40, 100, colors.purple);
    square1.draw();
    const square2 = new Module.Square(Canv0.ctx, 110, 141, 200, colors.yellow);
    square2.draw();
    const square3 = new Module.Square(Canv0.ctx, 121, 250, 300, colors.purple);
    square3.draw();
    const square4 = new Module.Square(Canv0.ctx, 132, 370, 400, colors.yellow);
    square4.draw();
  });
});

// dynamic import(drawing circles on the canvas)
circleBtn.addEventListener("click", () => {
  import("./modules/circle.js").then(Module => {
    const circle1 = new Module.Circle(Canv0.ctx, 120, 400, 120, colors.green);
    circle1.draw();
    const circle2 = new Module.Circle(Canv0.ctx, 100, 400, 140, colors.blue);
    circle2.draw();
    const circle3 = new Module.Circle(Canv0.ctx, 80, 400, 160, colors.green);
    circle3.draw();
    const circle4 = new Module.Circle(Canv0.ctx, 60, 400, 180, colors.blue);
    circle4.draw();
  });
});

// dynamic import(drawing triangles on the canvas)
triangleBtn.addEventListener("click", () => {
  import("./modules/triangle.js").then(Module => {
    const triangle1 = new Module.Triangle(Canv0.ctx, 113, 680, 100, colors.red);
		triangle1.draw();
		const triangle2 = new Module.Triangle(Canv0.ctx, 113, 624, 200, colors.orange);
    triangle2.draw();
		const triangle3 = new Module.Triangle(Canv0.ctx, 113, 556, 300, colors.red);
    triangle3.draw();
		const triangle4 = new Module.Triangle(Canv0.ctx, 113, 500, 400, colors.orange);
    triangle4.draw();
	});
});

// just another tweak: animation
const actionBtn = document.querySelector(".action");
actionBtn.addEventListener("click", () => {
  import("./modules/CanvasAnim.js").then(Module => {
    Module.CanvasAnim();
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => window.location.reload());
