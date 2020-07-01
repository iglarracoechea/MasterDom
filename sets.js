'use strict'

/*set: es una estructura similar a la de un array pero de datos únicos. Es un arreglo mejorado, 
que solo acepta valores únicos(primitivos)
js lenguaje case sensitive(diferencia entre mayusculas y minusculas)

para saber el tamaño de un set, se usa size

para poder iterarlo hay que convertirlo a un "arreglo" usando from
.delete para eliminar valores
.has para verificar si un elemento existe en el set(para validar)

posibilidades de uso

*/

const set = new Set([1,2,3,4,5,true,false,false,{},{},'hola','HOLA']);

console.log(set) //en la consola se va a mostrar sin los repetidos

console.log(set.size)

const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(true)
set2.add(false)
set2.add(false)
set2.add(true)
set2.add(2)
set2.add('HOLA')
set2.add('Hola')


console.log('cantidad set2' + set2.size)
console.log('Set')

for(let item of set){
    console.log(item)
}

console.log('Set 2')
set2.forEach(item => console.log(item) ) 


let arr = Array.from(set) //para que se comporte como un array y asi despues poder iterarlo

console.log(arr[0])

set.delete('HOLA')
console.log(set)

console.log(set.has('hola'))

set2.clear();
console.log(set2)
