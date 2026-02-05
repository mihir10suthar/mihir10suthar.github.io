function login() {
  const u = user.value.toLowerCase();
  const p = pass.value;

  if (u === "ankita" && p === "16091010") {
    const audio = new Audio("music/love.mp3");
    audio.loop = true;
    audio.volume = 0.25;
    audio.play();
    localStorage.setItem("music", "on");
    location.href = "unlock.html";
  } else {
    loginBox.classList.add("shake");
    setTimeout(() => loginBox.classList.remove("shake"), 400);
  }
}
