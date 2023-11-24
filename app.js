let shouldAnimate = true;
const canvasEl = document.getElementById('myCanvas');
const ctx = canvasEl.getContext('2d');
canvasEl.width = 470;
canvasEl.height = 570;

// Define ball properties
const ball = {
  x: canvasEl.width / 2,
  y: canvasEl.height / 2,
  radius: 20,
  dx: 2,
  dy: -2
};

// Function to draw the ball
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

// Update the draw function to include drawBall
const draw = () => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  drawBall();

  // Update ball position
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Bounce off the walls
  if (ball.x + ball.dx > canvasEl.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy > canvasEl.height - ball.radius || ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  }
};

const start = () => requestAnimationFrame(animate);

const animate = () => {
  draw();
  if (shouldAnimate) {
    requestAnimationFrame(animate);
  }
};

const stopStartHandler = (e) => {
  if (e.keyCode === 83) { // 'S' key
    shouldAnimate = !shouldAnimate;
    if (shouldAnimate) {
      requestAnimationFrame(start);
    }
  }
};

document.addEventListener("keydown", stopStartHandler, false);

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  start();
});
