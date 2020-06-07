'use strict'

const formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit',() => {
    let titulo = document.querySelector('#addpelicula').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);  
    } 
});

let ul = document.querySelector('#peliculas-list')

for(let i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] === 'string'){
        let li = document.createElement('li')
        li.append(localStorage[i])
        ul.append(li)
    }
}

const formulariob = document.querySelector('#formBorrarpeliculas');

formulariob.addEventListener('submit',() => {
    let titulo = document.querySelector('#borrarPelicula').value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);  
    } 
});