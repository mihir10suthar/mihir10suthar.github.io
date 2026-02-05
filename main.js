function login(){
  if(user.value.toLowerCase()==="ankita" && pass.value==="16091010"){
    localStorage.setItem("music","on");
    location.href="unlock.html";
  }else{
    loginBox.classList.add("shake");
    setTimeout(()=>loginBox.classList.remove("shake"),400);
  }
}
