const startDate = new Date("2025-02-22");

function daysTogether(){
  return Math.floor((new Date()-startDate)/(1000*60*60*24));
}

document.addEventListener("DOMContentLoaded",()=>{
  const d=document.getElementById("daysCount");
  if(d) d.innerText=daysTogether();
});

function login(){
  if(username.value==="ankita" && password.value==="16091010"){
    secret.classList.remove("hidden");
    let s=10;
    const t=setInterval(()=>{
      timer.innerText=--s;
      if(s===0){
        clearInterval(t);
        window.location="home.html";
      }
    },1000);
  }else{
    error.innerText="Wrong password 💔";
  }
}
