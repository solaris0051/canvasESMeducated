// preparing for drawing a square.

class Square {
  constructor(ctx, listId, length, x, y, color) {
    this.ctx = ctx;
    this.listId = listId;
    this.length = length;
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = '正方形';
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.length, this.length);
  }

  reportArea() {
    const listItem = document.createElement('li');
    listItem.textContent = `${this.name} : 面積は ${this.length * this.length}平方px(ピクセル)です。`
    const list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }

  reportPerimeter() {
    const listItem = document.createElement('li');
    listItem.textContent = `${this.name} : 四辺の合計長は ${this.length * 4}px(ピクセル)です。`
    const list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }
}
// exporing.
export { Square };
