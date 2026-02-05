function login() {
  const u = document.getElementById("username").value.toLowerCase();
  const p = document.getElementById("password").value;

  if (u === "ankita" && p === "16091010") {
    window.location.href = "home.html";
  } else {
    alert("Wrong password ❤️");
  }
}
