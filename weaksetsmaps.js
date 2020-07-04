'use strict'

/*weakSets && weakMaps (solo pueden almacenar referencias débiles) 

weakMaps: las llaves deben ser de tipo objeto.

no son elementos iterables. no se pueden utilizar el clear ni en maps ni en sets. No tiene la propiedad size
limpia todas las referencias debiles del recolector de basura de js cuando se nulifican

se nulifica. al no existir js las limpia y mejora el rendimiento

*/

//const wSet = new WeakSet([1,2,3,4,5,true,false,false,{},{},'hola','hola']) no se hace

const wSet = new WeakSet

let valor1 = {'valor': 1}
let valor2 = {'valor': 2}
let valor3 = {'valor': 3}

wSet.add(valor1)
wSet.add(valor2)

console.log(wSet)

console.log(wSet.has(valor1))
console.log(wSet.has(valor3))

wSet.delete(valor2)

wSet.add(valor2)
wSet.add(valor3)
console.log(wSet)

setInterval(()=>console.log(wSet),1000);

setTimeout(() =>{  //util para programación reactiva
    valor1 = null;
    valor2 = null;  //se limpia(nuliican)
    valor3 = null;
}, 5000);

//weakmap: permite llaves de tipo objeto, no son iterables, no tienen size

/*const wMap = new WeakMap([   //da error
    ['nombre','kenia'],
    ['edad','35'],
    ['animal','perro'],
    [null ,'nulo']
])*/

const wMap = new WeakMap();
//obejtos vacios

let llave1 = {};
let llave2 = {};
let llave3 = {};

wMap.set(llave1,1);
wMap.set(llave2,2)

console.log(wMap)

console.log(wMap.has(llave1));
console.log(wMap.has(llave3))

console.log(wMap.get(llave1));
console.log(wMap.get(llave3));
console.log(wMap.get(llave2));

wMap.delete(llave2)
console.log(wMap)

wMap.set(llave2,2)
wMap.set(llave3,3)

console.log(wMap)


/*cuando nullifique las variables que hacen referencia a cada una de las propiedades de este wMap, estas se van
a eliminar automaticamente mejorando el rendimiento de la app, 
ej: manejo de las variables de estado en react, vue, angular, svelt

WeakSet does not have clear, keys, values, entries, forEach methods.
WeakSet is not iterable.

la diferencia si yo en una variable de estado en react, vue, etc, la declare como objeto, js vanilla se declara wMap

si una variable de estado donde almaceno información en los frameworks la declaro como arreglo, 
en js vanilla se declara como wSet
*/

setInterval(()=>console.log(wMap),1000);

*setTimeout(() =>{  //util para programación reactiva
    llave1 = null; 
    llave2 = null;              //se nulifica. al no existir js las limpia y mejora el rendimiento
    llave3 = null;
}, 5000);