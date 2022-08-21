import colors from './modules/defColors.js';
import { Canvas } from './modules/canvas.js';

const squareBtn1 = document.querySelector('.square1');
const squareBtn2 = document.querySelector('.square2');
const circleBtn1 = document.querySelector('.circle1');
const circleBtn2 = document.querySelector('.circle2');
const triangleBtn1 = document.querySelector('.triangle1');
const triangleBtn2 = document.querySelector('.triangle2');
const action = document.querySelector('.action');

// creating a canvas.
const Canv = new Canvas('canvas', document.body, 700, 700);
Canv.create();

// drawing squares
squareBtn1.addEventListener('click', () => {
	import('./modules/square.js').then((Module) => {
		const square = new Module.Square(Canv.ctx, 100, 50, 100, colors.purple);
		square.draw();
	})
});
squareBtn2.addEventListener('click', () => {
	import('./modules/square.js').then((Module) => {
		const square = new Module.Square(Canv.ctx, 100, 150, 100, colors.yellow);
		square.draw();
	})
});

// drawing circles
circleBtn1.addEventListener('click', () => {
	import('./modules/circle.js').then((Module) => {
		const circle1 = new Module.Circle(Canv.ctx, 50, 300, 150, colors.green);
		circle1.draw();
	})
});

circleBtn2.addEventListener('click', () => {
	import('./modules/circle.js').then((Module) => {
		const circle2 = new Module.Circle(Canv.ctx, 50, 400, 150, colors.blue);
		circle2.draw();
	})
});

// drawing triangles
triangleBtn1.addEventListener('click', () => {
	import('./modules/triangle.js').then((Module) => {
		const triangle1 = new Module.Triangle(Canv.ctx, 113, 430, 100, colors.red);
		triangle1.draw();
	})
});

triangleBtn2.addEventListener('click', () => {
	import('./modules/triangle.js').then((Module) => {
		const triangle2 = new Module.Triangle(Canv.ctx, 113, 540, 100, colors.orange);
		triangle2.draw();
	})
});
