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


/******************************** */

//crud
const app = new (function(){
    this.tbody = document.getElementById("tbody");
    this.listado = ()=>{
        fetch('../controllers/listado.php')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>console.log(error));
    }
})();