'use strict'

/*generators: una función que permite trabajar de una manera más simple con los iteradores
* indica que es un generator => sirven para volver iterables a una función. Permite acceder a Symbol.iterator()
 yield es como un return le va a indicar a la func. cuando detecte que se llamo al yield con el next(),
  el yield recibe el valor.
 tambien permiten manejar comportamiento asincrono
Generator.prototype.next():Retorna el valor ofecido por la expresión yield
Generator.prototype.return():Retorna el valor dado y finaliza el generador.
Generator.prototype.throw() : Lanzá un error al generador 
 
convierte el codigo de una función en iterable

 */

function*iterable(){
    yield 'Hola';
    console.log('Hola consola')
    yield 'Hola 2';
    console.log('Seguimos con más instrucciones de nuestro código')
    yield 'Hola 3';
    yield 'Hola 4';
}

let iterador = iterable();
/*console.log(iterador.next());  //lo ejecuta y se detiene. done false
console.log(iterador.next());  //lo ejecuta y se detiene y asi sucesivamente
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())*/ //done true, no hay más valores

for(let y of iterador){
    console.log(y)
}

const array = [...iterable()];  //cada yield lo almacena en el array

console.log(array)


const cuadrado = (valor) => {
    setTimeout(() => {
        return console.log({ valor, resultado: valor*valor})
    },Math.random()*900);

    /*return {
        valor,
        resultad: valor*valor
    }*/
}

//asincronia no bloqueante
function*generador(){
    console.log('Inicia generator');
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log('Termina generator');
}

let gen = generador()

for(let x of gen){
    console.log(x)
}