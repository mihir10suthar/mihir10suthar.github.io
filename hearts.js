window.addEventListener("scroll",()=>{
  for(let i=0;i<2;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerText="💗";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
});
