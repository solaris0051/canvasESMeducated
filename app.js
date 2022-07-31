import colors from './modules/defColors.js';
import { Canvas } from './modules/canvas.js';

const squareBtn = document.querySelector('.square');
const circleBtn1 = document.querySelector('.circle1');
const circleBtn2 = document.querySelector('.circle2');
const triangleBtn1 = document.querySelector('.triangle1');
const triangleBtn2 = document.querySelector('.triangle2');
const action = document.querySelector('.action');

// creating the canvas and reporting area and list
const myCanvas = new Canvas('myCanvas', document.body, 350, 350);
myCanvas.create();
myCanvas.createReportList();

// drawing a square
squareBtn.addEventListener('click', () => {
  import('./modules/square.js').then((Module) => {
    const square = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 50, colors.yellow);
    square.draw();
    square.reportArea();
    square.reportPerimeter();
  })
});

// drawing circles
circleBtn1.addEventListener('click', () => {
  import('./modules/circle.js').then((Module) => {
    const circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 25, 125, 75, colors.green);
    circle1.draw();
    circle1.act();
    circle1.reportArea();
    circle1.reportPerimeter();
  })
});

circleBtn2.addEventListener('click', () => {
  import('./modules/circle.js').then((Module) => {
    const circle2 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 25, 175, 75, colors.blue);
    circle2.draw();
    circle2.reportArea();
    circle2.reportPerimeter();

  })
});

// drawing triangles
triangleBtn1.addEventListener('click', () => {
  import('./modules/triangle.js').then((Module) => {
    const triangle1 = new Module.Triangle(myCanvas.ctx, myCanvas.listId, 50, 190, 50, colors.red);
    triangle1.draw();
    triangle1.reportArea();
    triangle1.reportPerimeter();
  })
});

triangleBtn2.addEventListener('click', () => {
  import('./modules/triangle.js').then((Module) => {
    const triangle2 = new Module.Triangle(myCanvas.ctx, myCanvas.listId, 50, 215, 50, colors.orange);
    triangle2.draw();
    triangle2.reportArea();
    triangle2.reportPerimeter();
  })
});
