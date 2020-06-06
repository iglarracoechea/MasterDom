'use strict'

/*localStorage: es una manera de almacenar información dentro del navegador 
y que persista y este disponible mientras navego en la pagina. Memoria dentro del navegador, se guardan los datos
que vamos persistiendo en el localstorage. Se usa para CRUD

hay un localstorage por dominio
*/

//para comprobar si el localstorage esta disponible

if(typeof (Storage) !== 'undefined'){
    console.log('LocalStorage disponible')
}else{
    console.log('LocalStorage no disponible')
}

/*guardar datos en el localStorage.Se usa setItem:The setItem() method of the Storage interface, when passed a key name 
and value, will add that key to the given Storage object, or update that key's value if it already exists.
*/

localStorage.setItem('titulo','Curso de JavaScript') //key: titulo , value:Curso

//recuperar elementos y meterlo en otra etiqueta
//getItem obtener un elemento del localStorage

console.log(localStorage.getItem('titulo'));

let guardar = document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo')

//guardar objetos en el local storage

let usuario = {
    nombre:'ignacio',
    email:'Ignacio Larracoechea',
    edad: 25
};

//los datos viajan en un json string, por eso hay que convertirlo a un objeto jason string
//tambien para enviar datos a un API
localStorage.setItem('usuario',JSON.stringify(usuario)) //el nav lo intepreta como json string

//localStorage.setItem('usuario',usuario) no se guarda bien asi

//recuperar ese objeto

//console.log(localStorage.getItem('usuario'))  //lo muestra en string no en objeto, por eso hay que reconvertirlo

let userJs = JSON.parse(localStorage.getItem('usuario')) //convierte un JSON string en JSON objeto.



console.log(userJs)
document.querySelector('#datos').append(" - "+userJs.nombre+ " - "+ userJs.edad)

localStorage.removeItem('usuario') //borro datos usuario del localStorage
localStorage.clear()  //vacia todo el localStorage