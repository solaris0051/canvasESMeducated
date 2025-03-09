// preparing for drawing a triangle.

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
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
    const { ctx, x, y, length, color } = this;
    const height = (length / 2) * Math.tan(degToRad(60));

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.lineTo(x + length / 2, y + height);
    ctx.lineTo(x, y);
    ctx.fill();
  }
}
// exporting.
export { Triangle };
