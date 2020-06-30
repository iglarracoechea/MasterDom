'use strict'

/* symbol es un tipo de dato primitivo(number,string,boolean,etc)

el valor se va a mantener privado y para uso interno. Permiten crear identificadores únicos, de referencia

un symbol crea una referencia única

parametros que usa: description === referencia única(o identificador  del symbol) que puede ser un string o number

buena práctica: crearlas en constantes ya que no pueden cambiar de valor
constantes escribirlas en mayusculas

uso más comun para crear propiedades privadas de los objetos
usar [] para identificar un symbol como propiedad dentro de un objeto
*/

let id = Symbol('id');   
let id2 = Symbol('id2')

console.log(id === id2)  //da falso
console.log(id,id2)
console.log(typeof id, typeof id2)

const NAME = Symbol('Nombre');
const SALUDAR = Symbol('Saludar');  //sirve como referencia

const persona = {
    [NAME]: 'Ignacio',
}

console.log(persona)

persona.name = 'Ignacio Larracoechea'
console.log(persona)



//console.log(persona.NAME)
console.log(persona[NAME])  //para simbolos usar []. propiedad privada; oculta el nombre del symbol en la consola

persona[SALUDAR] = () => {
    console.log('Hola')
}

console.log(persona)
persona[SALUDAR]()  //muestra hola

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])   //muestra solo la propiedad name() pero no el symbol [Name]
}

console.log(Object.getOwnPropertySymbols(persona));
