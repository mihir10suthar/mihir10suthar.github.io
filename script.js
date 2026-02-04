function login(){
  if(
    document.getElementById("user").value === "ankitalovemihir" &&
    document.getElementById("pass").value === "ILOVEYOU"
  ){
    window.location = "home.html";
  } else {
    alert("Wrong credentials 💔");
  }
}

function yes(){
  alert("She said YES 💖");
}
