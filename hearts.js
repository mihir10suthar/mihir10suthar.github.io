setInterval(()=>{
 let h=document.createElement("div");
 h.innerHTML="❤️";
 h.style.position="fixed";
 h.style.left=Math.random()*100+"%";
 h.style.top="100%";
 h.style.fontSize="24px";
 document.body.appendChild(h);
 let y=100;
 let i=setInterval(()=>{
  y--;
  h.style.top=y+"%";
  if(y<0){clearInterval(i);h.remove();}
 },20);
},800);
