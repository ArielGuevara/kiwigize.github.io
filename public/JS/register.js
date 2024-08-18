//  -------------------
//  New Register
//  --------------------

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', ()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove("sign-up-mode");
});


// boton Regresar

// document.getElementById('regresar').onclick = function(){
//     window.location.href = "recipes.html"
// }

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll("#regresar").forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "./index.html";
        });
    });
});

// hacer otro comentario
/******************************** */

//crud

document.addEventListener("DOMContentLoaded", function() {
    const registrarseButton = document.getElementById("registrarse");

    registrarseButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const pass = document.getElementById("contrasenia").value;
        const pass2 = document.getElementById("contrasenia2").value;
        if(pass != pass2){
            alert("Las contraseñas no coinciden");
            return;
        }else{
            this.id = document.getElementById("id");
            this.nombre = document.getElementById("nombre");
            this.email = document.getElementById("email");
            this.contrasenia = document.getElementById("contrasenia");
        
            var form = new FormData();
            form.append("nombre", this.nombre.value);
            form.append("email", this.email.value);
            form.append("contrasenia", this.contrasenia.value);
            form.append("id", this.id.value);

            fetch("../app/controllers/guardar.php",{
                method: "POST",
                body: form,
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                alert("Creado correctamente");
            })
            .catch((error)=>console.log(error));
        }
        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const registrarseButton = document.getElementById("iniciar");
    let bandera = false;
    registrarseButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        

        
        this.email = document.getElementById("user");
        this.contrasenia = document.getElementById("password");

        var form = new FormData();
        form.append("user", this.email.value);
        form.append("password", this.contrasenia.value);
        fetch("../app/controllers/capturar.php",{
            method: "POST",
            body: form,
        })
            .then((res)=>res.json())
            .then((data)=>{
                //validacion de usuario
                if(data == false){
                    alert("Usuario o contraseña incorrectos");
                    
                }else{
                    window.location.href = "./index.html";
                }
            })
            .catch((error)=>console.log(error)); 

            
    });  
});
