(()=>{"use strict";let e;document.addEventListener("DOMContentLoaded",(()=>{async function t(){let t=await fetch("/quotes.json"),n=await t.json();e=n.quotes.sort(((e,t)=>e.author.localeCompare(t.author)))}t(),document.getElementById("idezet").addEventListener("click",(()=>{document.getElementById("idezetek").textContent=" ",t(),function(e){let t=document.getElementById("idezetek");for(let n of e){let e=document.createElement("li");e.textContent=" '' "+n.quote+"'' -"+n.author,t.appendChild(e)}}(e)})),document.getElementById("thegomb").addEventListener("click",(()=>{t(),document.getElementById("the").textContent=" ";let n=document.getElementById("the");for(let t=0;t<e.length;t++)if(e[t].quote.includes("The ")||e[t].quote.includes(" the ")){let d=document.createElement("li");d.textContent=e[t].quote,n.appendChild(d)}})),document.getElementById("hossz").addEventListener("click",(()=>{t(),document.getElementById("szoveg").textContent=" ";let n=document.getElementById("szoveg");for(let t=0;t<e.length;t++){let d=document.createElement("p");d.textContent=e[t].quote.length,n.appendChild(d)}})),document.getElementById("darabszam").addEventListener("click",(()=>{t(),document.getElementById("darab").value=0;for(let t=0;t<e.length;t++)e[t].author==document.getElementById("szerzo").value&&document.getElementById("darab").value++}))}))})();