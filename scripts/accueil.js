const travailleur = document.querySelector(".travailleur");
const admin = document.querySelector(".admin");

const session = JSON.parse(localStorage.getItem("session"));

// if(session){
//     const som = session.some((el)=>el)
//     if()
// }






function getTable(nom){
    if(localStorage.getItem(nom)){
        return JSON.parse(localStorage.getItem(nom))
     }
     else return []
}


const tableAdmins = getTable("admins");
const tableWorker = getTable("worker");
travailleur.textContent = tableWorker.length;
travailleur.style.textAlign = "center";


admin.textContent = tableAdmins.length