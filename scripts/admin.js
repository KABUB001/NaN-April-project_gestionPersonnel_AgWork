//Récupération des éléments de mon formulaire de paramètre
const btnEnr = document.getElementById("enregistrer");

const btnAc =document.getElementById("modifierAcces");
const modal = document.querySelector("dialog");

//Récupération des éléments de mon formulaire d'admins'
const adminUser = document.getElementById("admin");
const passwordUser = document.getElementById("password");
const btnAdmin = document.getElementById("submitAdmin");
const formAdmin = document.querySelector(".formAdmin");
//Récupération de tbody de table
const table = document.querySelector(".table");






//Afficher modal contenant le formulaire de modification du mot de pass de l'admin
btnAc?.addEventListener("click",()=>{
    console.log("ahi")
    if(typeof modal.showModal === "function"){
        modal.showModal();
    }
    else {
        console.error("L'API <dialog> n'est pas prise en charge par ce navigateur.");
      }
})
modal?.addEventListener("dblclick",()=>{
    modal.close()
})


//Création d'une classe Admin
class Admin {
    constructor(username, password){
        this.username = username.value,
        this.password = password.value,
        this.role = "";
        this.statut="lock-open"
    }

    getAdmins(){
        if(localStorage.getItem("admins")){
            return JSON.parse(localStorage.getItem("admins"))
         }
         else return [{"username":"admin", "password":"admin", "role":"SupAdmin"}]
    }
    getAdmin(){
        const tableAdmins = this.getAdmins()
        const tab = tableAdmins?.filter(el=>el.username == "admin");
        if(tab?.length){
            return tab[0]
        }else {
            tableAdmins.unshift({"username":"admin", "password":"admin","role":"supadmin"});
            localStorage.setItem("admins",JSON.stringify(tableAdmins));
        }
    }
    showAdmins(){
        table.innerHTML="";
        const tableAdmins = this.getAdmins();
        
            tableAdmins.forEach(el => {
                let color = (el.statut == "lock-open")?"green":"#E2F611";
                let clas = (el.statut == "lock-open")?"lock":"lock,lock-open" 
                table.innerHTML += `<table>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td><iconify-icon icon="mdi:user" width="50" height="50"></iconify-icon></td>
                    <td>${el.username}</td>
                    <td><input type="password" value="${el.password}"></td>
                    <td class=${clas}><iconify-icon  icon="material-symbols:${el.statut}" style="color: ${color};" width="26" height="26"></iconify-icon></td>
                    <td class="delete"><iconify-icon  icon="mdi:trash" style="color: red;" width="30" height="30"></iconify-icon></td>
                </tr>
            </tbody>
        </table>`
            });
            
    }
    
    addAdmins(){
        const tableAdmins = this.getAdmins();
        tableAdmins.push(this);
        localStorage.setItem("admins",JSON.stringify(tableAdmins));
        location.reload() 
        
        }

    
    deleteAdmins(item){
        const tableAdmins = this.getAdmins();
        const newTableAdmins = tableAdmins.filter(e=>e.username!==item);
        
        localStorage.setItem("admins",JSON.stringify(newTableAdmins));
        location.reload() 
    }  

    lockAdimns(item){
        const tableAdmins = this.getAdmins();
        const newTableAdmins = tableAdmins.filter((el,pos)=>{

            if(el.username == item){
                el.statut = "lock";
                tableAdmins[pos]=el;
                return (el.username == item)
            }
        })
        Object.defineProperty(newTableAdmins[0], "username",{configurable:false});
        
        localStorage.setItem("admins",JSON.stringify(tableAdmins));
        location.reload()
        
    }

    openAdimns(item){
        const tableAdmins = this.getAdmins();
        const newTableAdmins = tableAdmins.filter((el,pos)=>{
            if(el.username == item){
                el.statut = "lock-open";
                tableAdmins[pos]=el;
                return (el.username == item)
            }})
        Object.defineProperty(newTableAdmins[0], "username",{configurable:true});
        localStorage.setItem("admins",JSON.stringify(tableAdmins));
        location.reload()
    }
}


const adminShow = new Admin(adminUser, passwordUser);
adminShow.showAdmins()



//Ecoute d'evenement sur le formulaire Admins
formAdmin.addEventListener("submit", (e)=>{
    e.preventDefault();
    const errorTitle = document.querySelector(".title");
    const admin = new Admin(adminUser, passwordUser);
    const tableAdmins = admin.getAdmins()
    console.log(tableAdmins)
    errorTitle.textContent = "";
    const newTableAdmins = tableAdmins.filter(el=>el.username == adminUser.value);
   if(!(newTableAdmins?.length))
        {
            admin.addAdmins()
                 
        }
        else
       {
            console.log(errorTitle);
            errorTitle.style.textAlign = "center"
            errorTitle.style.color="red"
            errorTitle.textContent = "Username  déja existant !!!";
            
        }
    }
        
    )
        
      
   
    //
    
    const tableAdmins = adminShow.getAdmins();
    
    // for(let i=0;i<icon3.length;i++){
    //     icon3[i].addEventListener("click", ()=>{console.log("1",tableAdmins[i].username);adminShow.deleteAdmins(tableAdmins[i].username)});
        
    // }
    document.addEventListener('DOMContentLoaded', ()=>{
        const icon4 = document.querySelectorAll(".delete");
        icon4?.forEach((el,pos) => {
            el.addEventListener("click",()=>{adminShow.deleteAdmins(tableAdmins[`${pos}`].username)})
        });


        const icon = document.querySelectorAll(".lock");
        
        icon?.forEach((el,pos) => {
            
            el.addEventListener("click",()=>{
                adminShow.lockAdimns(tableAdmins[`${pos}`].username);
                
            })
        });

        
        
    })




 //Récupération des éléments de mon formulaire supAdmin
const supPassword = document.getElementById("suppassword");
const suprPassword = document.getElementById("suprpassword");
const supButton = document.getElementById("confirmBtn");
const formSupAdmin = document.getElementById("formSupAdmin");

//écoute d'événement sur le formulaire du supAdmin
formSupAdmin.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("1",supPassword.value)
    console.log("2",suprPassword.value)
    if(supPassword.value == suprPassword.value){
        const tableAdmins = adminShow.getAdmins()
        const admin = adminShow.getAdmin();
        console.log(admin)
        admin.password = suprPassword.value;
        tableAdmins.unshift(admin);
        localStorage.setItem("admins",JSON.stringify(tableAdmins));
        alert("Mot de pass modifié")
    
    }
    else{
        const msg = document.getElementById("message");
        msg.style.height = "2px";
        msg.style.textAlign= "center";
        msg.style.color = "red";
        msg.textContent = "Mot de passe non identique";
    }

})


 

    
   
    


   