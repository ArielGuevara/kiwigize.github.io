const app = new (function(){
    this.nombre = document.getElementById("nav-user");
    this.listado = ()=>{
        fetch("../../app/controllers/editar.php")
        .then((res)=>res.json())
        .then((data)=>{      
            this.nombre.innerText = data.nombre.value;
        })

        .catch((error)=>console.log(error));
    }
})();