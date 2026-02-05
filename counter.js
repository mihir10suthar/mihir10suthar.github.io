const start = new Date("2025-02-22T00:00:00");

setInterval(()=>{
 const now = new Date();
 const diff = now-start;
 const days = Math.floor(diff/86400000);
 const hrs = Math.floor(diff/3600000)%24;
 const min = Math.floor(diff/60000)%60;
 const sec = Math.floor(diff/1000)%60;
 document.getElementById("counter-bar").innerText =
 `Together ${days} days ${hrs}h ${min}m ${sec}s ❤️`;
},1000);
