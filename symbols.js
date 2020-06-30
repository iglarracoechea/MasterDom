'use strict'

/* symbol es un tipo de dato primitivo(number,string,boolean,etc)

el valor se va a mantener privado y para uso interno. Permiten crear identificadores únicos, de referencia

un symbol crea una referencia única

parametros que usa: description === identificador que puede ser un string o number

buena práctica: crearlas en constantes ya que no pueden cambiar de valor
constantes escribirlas en mayusculas
*/

let id = Symbol('id');   
let id2 = Symbol('id2')

console.log(id === id2)  //da falso
console.log(id,id2)
console.log(typeof id, typeof id2)

const 