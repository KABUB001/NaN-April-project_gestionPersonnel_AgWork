const travailleur = document.querySelector(".travailleur");
const admin = document.querySelector(".admin");






function getTable(nom){
    if(localStorage.getItem(nom)){
        return JSON.parse(localStorage.getItem(nom))
     }
     else return []
}


const tableAdmins = getTable("admins");
const tableWorker = getTable("worker");
travailleur.textContent = "hello" 