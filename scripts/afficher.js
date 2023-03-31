import * as Class from './classe.js'
const worker = new Class.Worker();
const task = new Class.Task()
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


worker.showWorker(trav);
task.showTask(tache)

