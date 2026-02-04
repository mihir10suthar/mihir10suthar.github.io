function login() {
  if (user.value === "ankitalovemihir" && pass.value === "ILOVEYOU") {
    location.href = "home.html";
  } else alert("Wrong 💔");
}

function navigate(p){ location.href=p; }

// fullscreen viewer
document.addEventListener("click", e=>{
  if(e.target.tagName==="IMG"){
    viewerImg.src=e.target.src;
    viewer.classList.add("show");
  }
});
function closeViewer(){ viewer.classList.remove("show"); }

// proposal
function yes(){
  document.getElementById("beat").play();
  document.getElementById("final-message").style.display="flex";
  document.getElementById("moon").classList.add("moon-rise");
}
