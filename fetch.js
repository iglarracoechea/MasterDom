'use strict'
//jsonplaceholder: apirest (servicio o backend que nos devuelve datos en json) 
//fetch metodo que nos permite hacer peticiones (una llamada a un api rest o backend) ajax de una manera simple. 

//Fetch y peticiones a servicios / apis rest
//el metodo .then() retorna una promesa(promise)

//https://reqres.in/api/users?page=2 

//accedemos a un servicio remoto(peticion)
let div_usuarios = document.querySelector('#usuarios')

let usuarios = [];
fetch('https://reqres.in/api/users?page=2')  //metodo fetch recibe una url. Es una promesa
    .then(data => data.json())  // .json() convierte a un objeto de javascript usable. info formateada
    .then(users => {
        usuarios = users.data; 
        console.log(usuarios)
        
        usuarios.map((user ,i )=> {
            let name = document.createElement('h2');
            name.innerHTML = i + ' ' + user.first_name + ' ' +  user.last_name

            div_usuarios.appendChild(name)

            document.querySelector('.load').style.display = 'none'
        })
        
    });
