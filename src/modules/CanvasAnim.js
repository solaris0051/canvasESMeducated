export const CanvasAnim = () => {
  const canvas = document.getElementById("canvas5");
  const ctx = canvas.getContext("2d");

  let reqA;

  const ball = {
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
    ball.drawGrad();
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vx *= 0.9999;
    ball.vx += 0.1;
    if (ball.x + ball.vx > canvas.height || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }
    if (ball.y + ball.vy > canvas.width || ball.y + ball.vy < 0) {
      ball.vy = -ball.vy;
    }
    reqA = window.requestAnimationFrame(draw);
  }

  canvas.addEventListener("pointerdown", (event) => {
    reqA = window.requestAnimationFrame(draw);
    canvas.releasePointerCapture;
  });

  canvas.addEventListener("pointerout", (event) => {
    window.cancelAnimationFrame(reqA);
  });

  ball.drawGrad();
};
