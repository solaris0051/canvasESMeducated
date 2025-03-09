// Preparing for drawing a square.

class Square {
  constructor(ctx, length, x, y, color) {
    Object.assign(this, { ctx, length, x, y, color });
  }

  draw() {
    const { ctx, color, x, y, length } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);
  }
}

// Exporting.
export { Square };
