import * as module from './classe.js';



const tach = document.querySelector("#tache");
const trav = document.querySelector("#travailleur");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const da = new Date();
da.toLocaleDateString()
console.log(da)
//Worker Information
const names = document.getElementById("name");
const age = document.getElementById("age");
const tel = document.getElementById("phone");
const image = document.getElementById('fichier');
const role = document.getElementById("role");
let id = "";


//Task Information
const taskName = document.getElementById('name2');
const montant = document.getElementById("montant");


/////Swicther entre les différents formulaires
window.addEventListener('change',()=>{
    if(tach.checked){
        form1.style.display = "none";
        form2.style.display = "flex";
    }
    else{
        form2.style.display = "none";
        form1.style.display = "flex";
    }
})
if(tach.style.checked){
    console.log(tach.checked);
   
}






//Ecoute d'evenement sur le formulaire1
    form1?.addEventListener("submit", (e)=>{
        e.preventDefault();
            const worker = new module.Worker(names,age,tel,image,role);
            worker.addWorker();
            worker.showWorker()
          
        })

        

//Ecoute d'evenement sur le formulaire2
form2?.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(module)
        const task = new module.Task(taskName, montant);
        task.addTask();
        task.showTask()
      
    })