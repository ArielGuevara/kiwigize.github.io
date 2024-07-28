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
//  -------------------
//  New Register
//  --------------------

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");