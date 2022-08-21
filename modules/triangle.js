// preparing for drawing a trianle.

function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

class Triangle {
	constructor(ctx, length, x, y, color) {
		this.ctx = ctx;
		this.length = length;
		this.x = x;
		this.y = y;
		this.color = color;
	}

	draw() {
		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.moveTo(this.x, this.y);
		this.ctx.lineTo(this.x + this.length, this.y);
		const height = (this.length / 2) * Math.tan(degToRad(60));
		this.ctx.lineTo(this.x + (this.length / 2), this.y + height);
		this.ctx.lineTo(this.x, this.y);
		this.ctx.fill();
	}
}
// exporing.
export { Triangle };
