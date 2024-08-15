// Autor: Ariel Guevara
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
                    <a href="javascript:;" onclick="app.editar(${row.id})" class="btn btn-warning">Editar</a>
                    <a href="javascript:;" onclick="app.eliminar(${row.id})" class="btn btn-danger">Eliminar</a>
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
        form.append("id", this.id.value);
        if(this.id.value === ""){
            fetch("../controllers/guardar.php",{
                method: "POST",
                body: form,
            })
            .then((res)=>res.json())
            .then((data)=>{
                alert("Creado correctamente");
                this.listado();
                this.limpiar();
            })
            .catch((error)=>console.log(error));
        }else{
            fetch("../controllers/actualizar.php",{
                method: "POST",
                body: form,
            })
            .then((res)=>res.json())
            .then((data)=>{
                alert("Actualizado correctamente");
                this.listado();
                this.limpiar();
            })
            .catch((error)=>console.log(error));
        }
    }

    this.editar = (id)=>{
        var form = new FormData();
        form.append("id", id);
        fetch("../controllers/editar.php?",{
            method: "POST",
            body: form,
        })
        .then((res)=>res.json())
        .then((data)=>{
            this.id.value = data.id;
            this.nombre.value = data.nombre;
            this.email.value = data.email;
            this.contrasenia.value = data.contrasenia;
        })
        .catch((error)=>console.log(error));
    }

    this.eliminar = (id)=>{
        var form = new FormData();
        form.append("id", id);
        fetch("../controllers/eliminar.php",{
            method: "POST",
            body: form,
        })
            .then((res)=>res.json())
            .then((data)=>{
                alert("Eliminado correctamente");
                this.listado();
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
app.listado();