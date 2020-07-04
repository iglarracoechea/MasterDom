'use strict'

/*iterables e iterators:
iterador: es una especie de apuntador que va recorriendo los elementos de la misma estructura de datos
iterable es el elemento el cual su contenido se puede recorrer */

const iterable = [1,2,3,4,5];
const iterable2 =  'Hola Mundo'
const iterable3 = new Set ([1,2,3,4,5,6,6,4,2,3,1,10,8,8,9,5]);

//accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
const iterador2 = iterable2[Symbol.iterator]();
const iterador3 = iterable3[Symbol.iterator]();

console.log(iterable)
//console.log(iterador.next())//devuelve un obj con el value y done(indica si se acabaron o no los elementos(false o true))

let next = iterador.next()
/*
while (next.done === false) {
    console.log(next.value)
    next = iterador.next();
}*/

let next3 = iterador3.next()

while(next3.done === false){
    console.log(next3.value)
    next3= iterador3.next()
}



/*
console.log(iterable2)
console.log(iterador2)*/