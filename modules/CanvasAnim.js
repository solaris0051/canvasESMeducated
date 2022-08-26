export const CanvasAnim = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let reqAniFra;

  const circle = {
    x: 16,
    y: 16,
    vx: 5,
    vy: 20,
    radius: 16,
    color: "gold",
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.draw();
    circle.x += circle.vx;
    circle.y += circle.vy;
    circle.vy *= 0.999;
    circle.vy += 1.99;
    if (circle.y + circle.vy > canvas.height || circle.y + circle.vy < 0) {
      circle.vy = -circle.vy;
    }
    if (circle.x + circle.vx > canvas.width || circle.x + circle.vx < 0) {
      circle.vx = -circle.vx;
    }
    reqAniFra = window.requestAnimationFrame(draw);
  }

  canvas.addEventListener("click", event => {
    reqAniFra = window.requestAnimationFrame(draw);
  });

  circle.draw();
}
