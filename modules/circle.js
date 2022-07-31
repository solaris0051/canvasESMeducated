// preparing for drawing a circle.

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
let raf;

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

  act() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    vx = 5;
    vy = 2;
    this.ctx.draw();
    this.ctx.x += vx;
    this.ctx.y += vy;
    this.ctx.vy *= .99;
    this.ctx.vy += .25;

    if (this.ctx.y + this.ctx.vy > canvas.height ||
        this.ctx.y + this.ctx.vy < 0) {
      this.ctx.vy = -this.ctx.vy;
    }
    if (this.ctx.x + this.ctx.vx > canvas.width ||
        this.ctx.x + this.ctx.vx < 0) {
      this.ctx.vx = -this.ctx.vx;
    }

    raf = window.requestAnimationFrame(act);
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
