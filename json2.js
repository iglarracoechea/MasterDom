'use strict'

//json(JavaScript Object Notation): es un formato ligero de intercambio de datos. No es exclusvio de Js

const json =  {
    cadena:'Igna',
    numero:35,
    booleano:true,
    arreglo:['correr','programar','cocinar'],
    objeto:{
        twitter:'@Ignazio_AL',
        email:'ignaciolarracoechea@gmail.com'
    },
    nulo:null
}

console.log(json)

/* 
Parse va a analizar una notación json(cadena de texto) y la va a convertir a un tipo de dato que JavaScript valide, 
como un objeto,arreglo,boolean

stringify() convierte un objeto o un valor valido de js a cadena de texto
*/


console.log(JSON)
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("20"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("null"))
//console.log(JSON.parse("undefined")) no valido

console.log(JSON.stringify({}))  //lo convierte a una cadena de texto
console.log(JSON.stringify([1,2,3,4,5]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(20))
console.log(JSON.stringify(null))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify({x:2,y:3}))

console.log(JSON.stringify(json)) //convirtio el objeto literal a json


//convierte a un objeto primitivo de JavaScript
console.log(JSON.parse('{"cadena":"Igna","numero": 35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@Ignazio_AL","email":"ignaciolarracoechea@gmail.com"},"nulo":"null"}'))