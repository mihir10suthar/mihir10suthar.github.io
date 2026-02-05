function confetti(){
  for(let i=0;i<120;i++){
    const c=document.createElement("div");
    c.innerText="💗";
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    document.body.appendChild(c);
    c.animate([{transform:"translateY(0)"},{transform:"translateY(100vh)"}],{duration:3000});
    setTimeout(()=>c.remove(),3000);
  }
}
