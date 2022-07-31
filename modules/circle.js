// preparing for drawing a circle.

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

class Circle {
  constructor(ctx, listId, radius, x, y, color) {
    this.ctx = ctx;
    this.listId = listId;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = '円';
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, degToRad(0), degToRad(360), false);
    this.ctx.fill();
  }

  reportArea() {
    const listItem = document.createElement('li');
    listItem.textContent = `${this.name} : 面積は ${Math.round(Math.PI * (this.radius * this.radius))}平方px(ピクセル)です。`
    const list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }

  reportPerimeter() {
    const listItem = document.createElement('li');
    listItem.textContent = `${this.name} : 円周長は ${Math.round(2 * Math.PI * this.radius)}px(ピクセル)です。`
    const list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }
}
// exporing.
export { Circle };
