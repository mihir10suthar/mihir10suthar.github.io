function startConfetti(){
  for(let i=0;i<150;i++){
    const c=document.createElement("div");
    c.innerText="🎉";
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top=Math.random()*100+"vh";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}
