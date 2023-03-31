import * as Class from './classe.js'

const tach = document.getElementById("tach");
const trav = document.getElementById("travailleur");
const tache = document.getElementById("tache");

window.addEventListener('change',()=>{
    if(tach.checked){
       
        trav.style.display = "none";
        tache.style.display = "block";
    }
    else{
        
        tache.style.display = "none";
        trav.style.display = "block";
    }
})
function get(item){
    if(localStorage.getItem(item)){
        return JSON.parse(localStorage.getItem(item))
     }
     else return []};

function showTask(){
    const tableTask = get("task");
    tache.innerHTML="";
    tableTask.forEach(el => {
        let color = (el.statut == "lock-open")?"green":"#E2F611";
        let clas = (el.statut == "lock-open")?"lock":"lock,lock-open" 
        tache.innerHTML += `<table>
    
        <tbody>
            <tr>
               
            </tr>
            <tr>
                <td>${el.id}</td>
                <td><img src="/images/2116616_w2121h1590c1cx1061cy707cxt0cyt0cxb2121cyb1414.jpeg" weight="60" height="60" style="border-radius: 100%;"alt="" ></td>
                <td>${el.taskName}</td>
                <td >2000 FCFA</td>
                <td >
                    <select id="monselect">
                        <option value="pas attribué" selected>pas attribué<iconify-icon icon="carbon:dot-mark" style="color: #f1dd38;"></iconify-icon></option>
                        <option value="en cours">en cours<iconify-icon icon="carbon:dot-mark" style="color: #E2F611;"></iconify-icon></option>
                        <option value="terminé">terminé<iconify-icon icon="carbon:dot-mark" style="color: #008000;"></iconify-icon></option>
                    </select>
                </td>
                <td >
                    <iconify-icon icon="bi:trash-fill" style="color: red;"></iconify-icon>
                </td>
                <td></td>
            </tr>
           
        </tbody>
    </table>`
    });
}

function showWorker(){
    const tableWorker = get("worker");
    trav.innerHTML="";
        tableWorker.forEach(el => {
            let color = (el.statut == "lock-open")?"green":"#E2F611";
            let clas = (el.statut == "lock-open")?"lock":"lock,lock-open" 
            trav.innerHTML += ` <table>
        
            <tbody>
                <tr>
                    <td ></td>
                    <td>${el.names}</td>
                    <td>TACHES</td>
                    <td>NON DEBUTES</td>
                    <td>EN COURS</td>
                    <td>TERMINES</td>
                    <td></td>
                </tr>
                <tr>
                    <td><img src="/images/1456690-mark-zuckerberg-pdg-de-facebook-le-23-octobre-2019-devant-le-congres.jpeg" weight="60" height="60" style="border-radius: 100%;"alt="" ></td>
                    <td>${el.id}</td>
                    <td>10</td>
                    <td style="background-color: #F1DD38;">5</td>
                    <td style="background-color: #E2F611;">3</td>
                    <td style="background-color: #008000;">2</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>${el.tel}</td>
                    <td>10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>`
        });
}

showTask();
showWorker()

