function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();

  if (u === "ankitalovemihir" && p === "ILOVEYOU") {
    sessionStorage.setItem("allowed", "true");
    smoothNavigate("main.html");
  } else {
    document.getElementById("error").innerText =
      "Only Ankita can enter this heart 💔";
  }
}

function show(id) {
  document.querySelectorAll(".content").forEach(d => d.style.display="none");
  document.getElementById(id).style.display="block";
}

function smoothNavigate(url) {
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = url, 900);
}

function cinematicProposal() {
  document.getElementById("cinematic").style.opacity = "1";
  setTimeout(() => smoothNavigate("proposal.html"), 3500);
}

function runAway() {
  const b = document.getElementById("noBtn");
  b.style.position="absolute";
  b.style.top=Math.random()*80+"%";
  b.style.left=Math.random()*80+"%";
}
