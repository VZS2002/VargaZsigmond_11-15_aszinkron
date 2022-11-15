import './style.css';

let lista;
let hossz;



document.addEventListener('DOMContentLoaded', () => {
    


    async function osszadatBetoltes() {
      
        
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        lista = eredmeny.quotes.sort((a, b) => a.author.localeCompare(b.author));

        
    }
   

    
   
    function kiir(idezetek) {
        let idezetLista = document.getElementById('idezetek');
     
        for (let p of idezetek) {
            let li = document.createElement('li');
            
            li.textContent =" '' " +p.quote+"'' -"+p.author;
            idezetLista.appendChild(li);
        }
    }
    osszadatBetoltes();


    document.getElementById('idezet').addEventListener('click', () => {
        document.getElementById('idezetek').textContent=" ";
        osszadatBetoltes();
        kiir(lista);
     
    });

    document.getElementById('thegomb').addEventListener('click', () => {
        osszadatBetoltes();
        document.getElementById('the').textContent=" ";
        let theLista = document.getElementById('the');
        for (let i = 0; i < lista.length; i++) {
           
           if (lista[i].quote.includes("The ") || lista[i].quote.includes(" the ")){
            let li = document.createElement('li');
            li.textContent= lista[i].quote;
            theLista.appendChild(li);
            
           }
        
    
                


            
         }
    
    
     
    });

    document.getElementById('hossz').addEventListener('click', () => {
        osszadatBetoltes();
        document.getElementById('szoveg').textContent=" ";
        let hosszLista = document.getElementById('szoveg');
    for (let i = 0; i < lista.length; i++) {
       let p = document.createElement('p');
       p.textContent= lista[i].quote.length;
       hosszLista.appendChild(p);
    }
    
     
    });

    document.getElementById('darabszam').addEventListener('click', () => {
        osszadatBetoltes();
        document.getElementById('darab').value=0;
      
        for (let i = 0; i < lista.length; i++) {
           if (lista[i].author== document.getElementById('szerzo').value) {
            
            document.getElementById('darab').value++;
           }
            
        }
    
    
     
    });
})

