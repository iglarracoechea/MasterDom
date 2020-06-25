'use strict'
//fetch y peticiones a servicios
let div_usuarios = document.querySelector('#usuarios')
let div_janet = document.querySelector('#janet')
let div_profesor = document.querySelector('#profesor')

getUsuarios() //esto es promesa
    .then(data => data.json()) // obtengo datos de la petición, devuelve una promesa
    .then(users => {
        listadoUsuarios(users.data);  //captura los datos que nos devuelve
        
        return getInfo(); //llama a otro metodo(promise)
    })
    .then(data => {
        div_profesor.textContent = data;
        
        return getJanet(); //retorna usuario janet
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    .catch( error => {   //para capturar un error ej: si no hay internet, no existe la url, o la api esta caida
        console.log(error+'Hay un error')
        alert('Error en las peticiones') 
    })  


function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')
}

    
function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

//utilidad de las promises: para leer archivos, enviar por post, recibir por ajax
/*El objeto Promise (Promesa) es usado para computaciones asíncronas. 
Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error). 
Cuando cualquiera de estas dos opciones sucede, los métodos asociados, 
encolados por el método then de la promesa, son llamados.
*/

function getInfo(){ 
    let profesor = {
        name: 'Ignacio',
        surname: 'Larracoechea',
        url:'https://www.instagram.com/iglarracoechea/'
    }
    return new Promise((resolve,reject) => {  //metodo reject deniega la promesa
        let profesor_string = ''
        
        const tiempoMuestra = setTimeout(()=>{
            profesor_string = JSON.stringify(profesor)
        
            if(typeof profesor_string !== 'string' || profesor_string == '') return reject('error 1')
            return resolve(profesor_string)
            
        },2000) //espera dos segundos para mostrar la promesa
        
    })
}

const listadoUsuarios = (usuarios) => {
    usuarios.map((user, index) => {
        let name = document.createElement('h2')

        name.innerHTML = index + ' ' + user.first_name + ' ' +  user.last_name

        div_usuarios.appendChild(name)

        document.querySelector('.load').style.display = 'none';
    })
}

const mostrarJanet = (user) => {
    let name = document.createElement('h4')
    let avatar = document.createElement('img')

    name.innerHTML = user.first_name + ' ' +  user.last_name;

    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(name)
    div_janet.appendChild(avatar)   

    document.querySelector('#janet .load').style.display = 'none';
} 
