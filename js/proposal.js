const noBtn = document.getElementById("no");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function run() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
}

let pieces = [];

function yes() {
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4
    });
  }

  document.querySelector(".content-box").innerHTML = `
    <h2>You just made me the happiest man alive 💕</h2>
    <a href="tel:9638741010" class="ios-btn">📞 Call Mihir</a>
  `;

  requestAnimationFrame(draw);
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = "#ff8fab";
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
    p.y += 2;
  });
  requestAnimationFrame(draw);
}
