const travailleur = document.querySelector(".travailleur");
const admin = document.querySelector(".admin");

const session = JSON.parse(localStorage.getItem("session"));





function getTable(nom){
    if(localStorage.getItem(nom)){
        return JSON.parse(localStorage.getItem(nom))
     }
     else return []
}


const tableAdmins = getTable("admins");
const tableWorker = getTable("worker");
travailleur.textContent = tableAdmins.length;
travailleur.style.textAlign = "center";


admin.textContent = tableWorker.length