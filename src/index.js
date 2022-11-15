import './style.css';

let lista;

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
        
        kiir(lista);
    });

})