//  -------------------
//  Galeria de index
//  --------------------

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // aqui se define el tamaño de las iamgenes que vayamos a agregar
})

// funcionalidad de botones de galeria
document.getElementById('leerMas1').onclick = function(){
    window.location.href = '../recipes.html';
}
document.getElementById('leerMas2').onclick = function(){
    window.location.href = '../recipes.html';
}
document.getElementById('leerMas3').onclick = function(){
    window.location.href = '../recipes.html';
}
document.getElementById('leerMas4').onclick = function(){
    window.location.href = '../recipes.html';
}
document.getElementById('leerMas5').onclick = function(){
    window.location.href = '../recipes.html';
}

//Funcion para la busqueda de recetas
document.querySelector('.searcher').addEventListener('input', function() {
    const query = this.value.toLowerCase();  // Captura el valor de búsqueda en minúsculas
    const recipes = document.querySelectorAll('.receta'); // Selecciona todas las recetas

    recipes.forEach(recipe => {
        const title = recipe.querySelector('h3').textContent.toLowerCase(); // Obtiene el título de la receta

        if (title.includes(query)) {
            recipe.style.display = 'block'; // Muestra la receta si coincide con la búsqueda
        } else {
            recipe.style.display = 'none'; // Oculta la receta si no coincide
        }
    });
});

