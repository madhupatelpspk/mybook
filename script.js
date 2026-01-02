const canvas = document.createElement("canvas");
canvas.id = "canvas-bg";
document.body.appendChild(canvas);

const c = canvas.getContext("2d");
let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const colors = [
  "rgba(255,183,197,0.4)",
  "rgba(255,223,211,0.4)",
  "rgba(204,236,239,0.4)",
  "rgba(202,184,255,0.4)",
  "rgba(255,249,196,0.4)"
];

const bubbles = Array(40)
  .fill()
  .map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 40 + Math.random() * 60,
    dx: -0.3 + Math.random() * 0.6,
    dy: -0.3 + Math.random() * 0.6,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

function animate() {
  c.clearRect(0, 0, w, h);

  bubbles.forEach((b) => {
    c.beginPath();
    c.fillStyle = b.color;
    c.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    c.fill();

    b.x += b.dx;
    b.y += b.dy;

    if (b.x - b.r > w) b.x = -b.r;
    if (b.x + b.r < 0) b.x = w + b.r;
    if (b.y - b.r > h) b.y = -b.r;
    if (b.y + b.r < 0) b.y = h + b.r;
  });

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("scroll", () => {