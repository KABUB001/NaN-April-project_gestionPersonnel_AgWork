

const form  = document.querySelector("form");

function getAdmins(){
    const tab = localStorage.getItem("admins");
    console.log(tab.length === 0)
    console.log(tab.length)
    console.log(tab)
    if(tab == null || tab.length ==0){
        console.log("ahiiiii")
        return JSON.parse(localStorage.getItem("admins"));
        
     }
     else {return [{"username":"admin", "password":"admin", "role":"SupAdmin"}]}
}

form.addEventListener("submit",(e)=>{
 
    e.preventDefault()

    const admin = getAdmins();
    console.log("12",admin)
    const username = document.getElementById('user').value;
    const passWord = document.getElementById("pass").value;
    let result = document.getElementById("result")
    


    
    const tab = admin.filter(el => (el.username == username))
    console.log(tab)
        if(tab.length){
            if(tab[0].password != passWord){
                console.log("wrong password")
                result.innerHTML="Mauvais mot de passe";
                result.style.color ="orangered"
            }
            else{
                console.log("bien connecté");
                let session = JSON.parse(localStorage.getItem("session"))?localStorage.getItem("session"):[];
                session.push(username);
                localStorage.setItem("session",JSON.stringify(session))
                window.location.href = "../pages/accueil.html";
                
            }
        }
        else{
            console.log("Username inexistant")
            result.innerHTML="Username inexistant";
            result.style.color ="red"
        }
        
});
    












/////// Enregistrement dans localStorage