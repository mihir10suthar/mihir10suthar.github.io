document.addEventListener("DOMContentLoaded",()=>{
  const start=new Date("2025-02-22T00:00:00");
  function update(){
    const now=new Date();
    const d=now-start;
    const days=Math.floor(d/86400000);
    const h=Math.floor(d/3600000)%24;
    const m=Math.floor(d/60000)%60;
    const s=Math.floor(d/1000)%60;
    document.getElementById("counter-bar").innerText=
      `💞 ${days} days ${h}h ${m}m ${s}s together`;
  }
  update();setInterval(update,1000);
});
