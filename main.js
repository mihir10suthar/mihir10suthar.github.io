function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const box = document.querySelector(".login-container");
  const error = document.getElementById("error");

  if (u === "ankita" && p === "16091010") {
    error.innerText = "";
    window.location.href = "home.html";
  } else {
    error.innerText = "Wrong username or password";
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 400);
  }
}

/* Days Counter */
const startDate = new Date("2025-02-22T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerText =
    `${days} days ${hours}h ${minutes}m ${seconds}s together`;
}

setInterval(updateCounter, 1000);
updateCounter();

function toggleCounter() {
  document.getElementById("counter").classList.toggle("hidden");
}
