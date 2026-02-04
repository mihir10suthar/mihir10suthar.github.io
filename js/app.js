function openImage(src) {
  document.getElementById("fs").style.display = "flex";
  document.getElementById("fs-img").src = src;
}

function closeImage() {
  document.getElementById("fs").style.display = "none";
}

function yesClicked() {
  for (let i = 0; i < 45; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerText = "✨";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 2500);
  }

  const moon = document.createElement("div");
  moon.id = "moon";
  moon.innerText = "🌙";
  document.body.appendChild(moon);
}
