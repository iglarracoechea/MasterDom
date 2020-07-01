'use strict'

/* map: son objetos que sirven para almacenar conjunto de valores asociados a manera de objeto.
Es como si fuera un objeto primitivo 

la diferencia que en los maps podemos generar llaves(propiedades) que no sean cadenas de texto(ej null, NaN,true,int)
*/

const mapa = new Map();

mapa.set('nombre', 'Ignacio');
mapa.set('apellido', 'Larracoechea');
mapa.set('Edad', 25);

console.log(mapa)
console.log(mapa.size)
console.log(mapa.has('correo')) //para verificar si existe una propiedad, igual que set

console.log(mapa.get('apellido')) //para obtener una propiedad 

mapa.set('nombre','Ignacio A')//para obtener una propiedad
mapa.set(false,'falso')
mapa.set(1,'uno')

console.log(mapa.get('nombre'))

mapa.delete('Edad')

for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value} `)
}

const mapa2 = new Map([
    ['Nombre','Teresa'],
    ['Apellido','Giannini'],
    ['Edad','58'],
    [null,'nullo']
])

console.log(mapa2);

const llaveMapas2 = [...mapa2.keys()]   //paso las llaves a un array
const valoresMapas2 = [...mapa2.values()] //paso los valores a un array

console.log(llaveMapas2)
console.log(valoresMapas2)