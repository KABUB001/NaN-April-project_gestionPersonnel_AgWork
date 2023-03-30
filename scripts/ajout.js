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


////CLASSE DES TACHES
    class Task {
        constructor(taskName, montant){
            this.name = taskName.value;
            this.montant =  montant.valule;
            this.date = new Date().toLocaleDateString();
            this.id = "";

        }

        getTask(){
            if(localStorage.getItem("task")){
                return JSON.parse(localStorage.getItem("task"))
             }
             else return []
        }
        addTask(){
        const tableTask = this.getTask();
        const iD = "TSK" + (tableTask.length + 101);
        this.id = iD;
        tableTask.push(this);
        localStorage.setItem("task",JSON.stringify(tableTask))
        }
        showTask(){
            const tableTask = this.getTask();
        }
        deleteTask(){}
        statTaskChange(){}

    }
 








 ////CLASS DES TRAVAILLEURS
let worker
export default worker=class Worker {
    
         constructor(names,age,tel,image,role){
            this.name = names.value;
            this.age = age.value;
            this.tel = tel.value;
            this.image = image.value;
            this.role = role.value;
            this.statut = "Pas attribé";
            this.id = this.getWorker().indexOf(this);
            this.date = new Date().toLocaleTimeString()

        }
        getWorker(){
            if(localStorage.getItem("worker")){
                return JSON.parse(localStorage.getItem("worker"))
             }
             else return []
        }
        addWorker(){
            const tableWorker = this.getWorker();
            const iD = "WRK" + (tableWorker.length + 101);
            this.id = iD;
            console.log(iD)

            tableWorker.push(this);
            localStorage.setItem("worker",JSON.stringify(tableWorker))
        }
            
        showWorker(){
            const tableWorker = this.getWorker();
        }
            deleteWorker(){
                const tableWorker = this.getWorker();

            }
            changeWorkName(){}
            statWorkerChange(){}
            checkWorkerName(){}
    }



//Ecoute d'evenement sur le formulaire1
    form1?.addEventListener("submit", (e)=>{
        e.preventDefault();
            const worker = new Worker(names,age,tel,image,role);
            worker.addWorker();
            worker.showWorker()
          
        })



//Ecoute d'evenement sur le formulaire2
form2?.addEventListener("submit", (e)=>{
    e.preventDefault();
        const task = new Task(taskName, montant);
        task.addTask();
        task.showTask()
      
    })