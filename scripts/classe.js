////CLASSE DES TACHES

class Task {
    constructor(taskName, montant){
        this.name = taskName;
        this.montant =  montant;
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
    showTask(table){
        const tableTask = this.getTask();
        table.innerHTML="";
        tableTask.forEach(el => {
            let color = (el.statut == "lock-open")?"green":"#E2F611";
            let clas = (el.statut == "lock-open")?"lock":"lock,lock-open" 
            table.innerHTML += `<table>
        
            <tbody>
                <tr>
                   
                </tr>
                <tr>
                    <td>ID</td>
                    <td><img src="/images/2116616_w2121h1590c1cx1061cy707cxt0cyt0cxb2121cyb1414.jpeg" weight="60" height="60" style="border-radius: 100%;"alt="" ></td>
                    <td>Cabosser 2tonnes de cacao</td>
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
    deleteTask(){}
    statTaskChange(){}
    
}
export {Task}









////CLASS DES TRAVAILLEURS
class Worker {

     constructor(names,age,tel,image,role){
        this.name = names;
        this.age = age;
        this.tel = tel;
        this.image = image;
        this.role = role;
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
        
    showWorker(table){
        const tableWorker = this.getWorker();
        table.innerHTML="";
            tableWorker.forEach(el => {
                let color = (el.statut == "lock-open")?"green":"#E2F611";
                let clas = (el.statut == "lock-open")?"lock":"lock,lock-open" 
                table.innerHTML += ` <table>
            
                <tbody>
                    <tr>
                        <td ></td>
                        <td>BERNARD DADIE</td>
                        <td>TACHES</td>
                        <td>NON DEBUTES</td>
                        <td>EN COURS</td>
                        <td>TERMINES</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><img src="/images/1456690-mark-zuckerberg-pdg-de-facebook-le-23-octobre-2019-devant-le-congres.jpeg" weight="60" height="60" style="border-radius: 100%;"alt="" ></td>
                        <td>ID</td>
                        <td>10</td>
                        <td style="background-color: #F1DD38;">5</td>
                        <td style="background-color: #E2F611;">3</td>
                        <td style="background-color: #008000;">2</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>0778827674</td>
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
        deleteWorker(){
            const tableWorker = this.getWorker();

        }
        verifWork(worker){
            const tableWorker = this.getWorker();
            tableWorker.filter(el => {el.tel 
                
            });
        }
        changeWorkName(){}
        statWorkerChange(){}
        checkWorkerName(){
            
        }
}
export {Worker};