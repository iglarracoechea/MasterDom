'use strict'
//seleccionar elementos de la página
//innerHTML saca el contenido de la etiqueta y lo muestra en la consola
//conseguir elementos con id concreto

//querySelector('#micaja')
//getElementBy('micaja')

//conseguir elementos por su etiqueta.Muestra todos los divs
let todosLosDivs  = document.getElementsByTagName('div') 

//let contenidoTexto = todosLosDivs[3].textContent; //saca el contenido y lo muestra
let contenidoTexto1 = todosLosDivs[2]
contenidoTexto1.innerHTML = 'Otro texto para el segundo elemento' //le asigno otro contenido, lo muestra con las etiquetas
//console.log(contenidoTexto)
console.log(contenidoTexto1)

contenidoTexto1.style.background = 'red'
contenidoTexto1.style.padding = '5px'
contenidoTexto1.classList.add('another')

/*let elemento = document.createElement('h2') //se crea el elemento
let contenido = document.createTextNode('Este es el titular') //se crea el nodo de texto

elemento.appendChild(contenido)  //se añade el nodo de texto al elemento
elemento.setAttribute('align','center'); //agrega atributos

document.getElementById('hola').appendChild(elemento);*/

let seccion = document.querySelector('#seccion')
let hr = document.createElement('hr');

for(let valor in todosLosDivs){
	console.log(todosLosDivs[valor])
	if (typeof todosLosDivs[valor].textContent === 'string') {
		let parrafo = document.createElement('p');     
		let texto = document.createTextNode(todosLosDivs[valor].textContent);  
		parrafo.prepend(texto);  //prepend añade antes
		document.querySelector('#seccion').append(parrafo) //append añade despues
	}	
}

seccion.append(hr)

'use strict'

let divsRojos = document.getElementsByClassName('rojo'); //los mete en una array
let divsAmarrilo = document.getElementsByClassName('amarillo')
divsAmarrilo[0].style.background = 'yellow';
//divsRojos[0].style.background  = 'blue'

for(let div in divsRojos){
    if(divsRojos[div].className === 'rojo'){ 
        divsRojos[div].style.background = 'red'
    }
}

console.log(divsRojos)
//query selector

let id = document.querySelector('#encabezado')
console.log(id)

let claseRojo = document.querySelector('rojo')
console.log(claseRojo)

//innerText Takes styles into consideration. It won't get hidden text for instance.







/*let human = [
{
    edad: 25,
    sexo: 'hombre',
    nombre:'ignacio'

},
{
    edad: 27,
    sexo: 'Mujer',
    nombre:'Micaela'

}
]

for(let hola of human){  //for in devuelve las propiedades heredadas
    for(let chau in hola){
        console.log(hola[chau])
    }
}*/

