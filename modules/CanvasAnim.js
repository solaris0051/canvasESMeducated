export const CanvasAnim = () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  let reqA;

  const circle = {
    x: 48,
    y: 48,
    vx: 0.8,
    vy: 1.7,
    radius: 48,
    color: "#FF0000",
    drawGrad() {
      const grad = ctx.createRadialGradient(
        this.x,
        this.y,
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
    circle.drawGrad();
    circle.x += circle.vx;
    circle.y += circle.vy;
    circle.vx *= 0.9999;
    circle.vx += 0.1;
    if (circle.x + circle.vx > canvas.height || circle.x + circle.vx < 0) {
      circle.vx = -circle.vx;
    }
    if (circle.y + circle.vy > canvas.width || circle.y + circle.vy < 0) {
      circle.vy = -circle.vy;
    }
    reqA = window.requestAnimationFrame(draw);
  }

  canvas.addEventListener("click", (event) => {
    reqA = window.requestAnimationFrame(draw);
  });

  canvas.addEventListener("mouseout", (event) => {
    window.cancelAnimationFrame(reqA);
  });

  circle.draw();
};
