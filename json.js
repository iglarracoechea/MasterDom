'use strict'
// JSON : JavaScript object notation. permite crear objetos. hacer array asociativo
//mongodb trabaja de esta manera, no tiene tablas

let pelicula = {
    titulo: 'batman',
    year: 2017,
    pais:'Estados Unidos'
}

let arraySeries = [
    {
        titulo : 'The Punisher',
        year: 2017,
        pais:'Estados Unidos'
    },
    pelicula
]

let cajaPelis = document.querySelector('#peliculas')

for(let element in arraySeries){
    let parrafo = document.createElement('p');
    parrafo.append(arraySeries[element].titulo + ' ' +arraySeries[element].year);
    cajaPelis.append(parrafo)
}


console.log(pelicula.titulo)
console.log(arraySeries)