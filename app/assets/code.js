const app = new (function(){
    this.tbody = document.getElementById("tbody");
    this.id = document.getElementById("id");
    this.nombre = document.getElementById("nombre");
    this.email = document.getElementById("email");
    this.contrasenia = document.getElementById("contrasenia");
    this.listado = ()=>{
        fetch("../controllers/listado.php")
        .then((res)=>res.json())
        .then((data)=>{      
            this.tbody.innerHTML = "";
            data.forEach((row)=>{
                let tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.nombre}</td>
                <td>${row.email}</td>
                <td>${row.contrasenia}</td>
                <td>
                    <a href="editar.php?id=${row.id}" class="btn btn-warning">Editar</a>
                    <a href="eliminar.php?id=${row.id}" class="btn btn-danger">Eliminar</a>
                </td>
                `;
                this.tbody.appendChild(tr);
            });
        })

        .catch((error)=>console.log(error));
    }
    this.guardar = ()=>{
        var form = new FormData();
        form.append("nombre", this.nombre.value);
        form.append("email", this.email.value);
        form.append("contrasenia", this.contrasenia.value);
        fetch("../controllers/guardar.php",{
            method: "POST",
            body: form
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert("Creado correctamente");
            this.listado();
            this.limpiar();
        })
        .catch((error)=>console.log(error));
    }
    this.limpiar = ()=>{
        this.id.value = "";
        this.nombre.value = "";
        this.email.value = "";
        this.contrasenia.value = "";
    }
})();
app.listado();//prueba de commit