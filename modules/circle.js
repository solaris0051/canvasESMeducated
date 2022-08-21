// preparing for drawing a circle.

function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

class Circle {
	constructor(ctx, radius, x, y, color) {
		this.ctx = ctx;
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.color = color;
	}

	draw() {
    this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, degToRad(0), degToRad(360), false);
		this.ctx.closePath();
		this.ctx.fill();
	}
}
// exporing.
export { Circle };
