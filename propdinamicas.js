'use strict'

/*propiedades dinamicas(compute properties): caracteristica propia de los objetos

sirve para cargar objetos de manera dinámica
*/

let aleatorio = Math.round(Math.random()*100)

const objUsuarios = {
    propiedad: 'Valor',
    [`id ${aleatorio}`]: 'Valor Aleatorio'
}


console.log(objUsuarios)

const usuarios = ['Jon','Irma','Miguel','Kala','KeNaI']
usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios)