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
export {Task}









////CLASS DES TRAVAILLEURS
class Worker {

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
export {Worker};