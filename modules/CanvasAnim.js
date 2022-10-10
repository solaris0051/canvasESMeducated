export const CanvasAnim = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let reqAniFra;

  const circle = {
    x: 64,
    y: 64,
    vx: 2.5,
    vy: 3.8,
    radius: 64,
    color: "#FF0000",
    draw() {
      const grad = ctx.createRadialGradient(
        this.x,
        this.y * 0.8,
        this.radius * 0.08,
        this.x,
        this.y,
        this.radius
      );
      grad.addColorStop(0, "white");
      grad.addColorStop(1, this.color);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    },
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle.draw();
    circle.x += circle.vx;
    circle.y += circle.vy;
    circle.vx *= 0.999;
    circle.vx += 0.666;
    if (circle.x + circle.vx > canvas.height || circle.x + circle.vx < 0) {
      circle.vx = -circle.vx;
    }
    if (circle.y + circle.vy > canvas.width || circle.y + circle.vy < 0) {
      circle.vy = -circle.vy;
    }
    reqAniFra = window.requestAnimationFrame(draw);
  }

  canvas.addEventListener("click", (event) => {
    reqAniFra = window.requestAnimationFrame(draw);
  });

  circle.draw();
};
