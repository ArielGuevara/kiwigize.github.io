//Funcion para la busqueda de recetas recipes.html
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