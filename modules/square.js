// preparing for drawing a square.

class Square {
  constructor(ctx, length, x, y, color) {
    this.ctx = ctx;
    this.length = length;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.length, this.length);
  }
}
// exporting.
export { Square };
