(()=>{"use strict";let e;document.addEventListener("DOMContentLoaded",(()=>{!async function(){let t=await fetch("/quotes.json"),n=await t.json();e=n.quotes.sort(((e,t)=>e.author.localeCompare(t.author)))}(),document.getElementById("idezet").addEventListener("click",(()=>{!function(e){let t=document.getElementById("idezetek");for(let n of e){let e=document.createElement("li");e.textContent=" '' "+n.quote+"'' -"+n.author,t.appendChild(e)}}(e)}))}))})();