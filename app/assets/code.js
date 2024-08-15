const app = new (function(){
    this.tbody = document.getElementById("tbody");
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
                    <a href="editar.php?id=${row.id}" class="btn btn-primary">Editar</a>
                    <a href="eliminar.php?id=${row.id}" class="btn btn-danger">Eliminar</a>
                </td>
                `;
                this.tbody.appendChild(tr);
            });
        })

        .catch((error)=>console.log(error));
    }
})();
app.listado();