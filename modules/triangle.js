// preparing for drawing a trianle.

function degToRad(degrees) {
	return degrees * Math.PI / 180;
};

class Triangle {
	constructor(ctx, listId, length, x, y, color) {
		this.ctx = ctx;
		this.listId = listId;
		this.length = length;
		this.x = x;
		this.y = y;
		this.color = color;
		this.name = '正三角形';
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

	reportArea() {
		const listItem = document.createElement('li');
		listItem.textContent = `${this.name} : 面積は ${Math.round((Math.sqrt(3)/4)*(this.length * this.length))}平方px(ピクセル)です。`
		const list = document.getElementById(this.listId);
		list.appendChild(listItem);
	}

	reportPerimeter() {
		const listItem = document.createElement('li');
		listItem.textContent = `${this.name} : 三辺の合計長は ${this.length * 3}px(ピクセル)です。`
		const list = document.getElementById(this.listId);
		list.appendChild(listItem);
	}
}
// exporing.
export {
	Triangle
};
