'use strict'

//promises
/* trabajan con dos recursos principales, el resolve y reject. Son metodos estaticos, es decir, no se necesita crear
una instancia para poder utilizarlos

resolve(return positivo)
reject(return negativo)

dos metodos para trabajar la asincronia con promises(then,)

.then es el siguiente bloque que se va ejecutar una vez que se cumpla la función inicial.
.catch es el que va a capturar el error del reject

las promesas convienen cuando hay una concatenación de varios procesos asincronos


*/

const cuadradoPromise = (value)=>{
    //if(typeof value !== 'number') return Promise.reject(`Error el valor' ${value} ingresado no es un número`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof value !== 'number') return reject(`Error el valor' ${value} ingresado no es un número`);
            resolve({
                value,   //propiedad y valor tiene el mismo nombre se puede simplificar
                result:value*value,
            })
        },0 || Math.random()*800);
    })
}

cuadradoPromise(0)
    .then((object)=>{  //recibe la parte positiva de la promesa(resolve)
        //console.log(object)
        console.log('Inicio Promesa')
        console.log(`Promise:${object.value}, ${object.result}`)
        return cuadradoPromise(1);
    })
    .then((object)=>{
        console.log('Inicio Promesa')
        console.log(`Promise:${object.value}, ${object.result}`)
        return cuadradoPromise(2)
    })
    .then((object)=>{
        console.log('Inicio Promesa')
        console.log(`Promise:${object.value}, ${object.result}`)
        return cuadradoPromise('3') //muestra el error y deja de ejectuar las siguientes .then
    })
    .then((object)=>{
        console.log('Inicio Promesa')
        console.log(`Promise:${object.value}, ${object.result}`)
        return cuadradoPromise(4)
    })
    .then((object)=>{
        console.log('Inicio Promesa')
        console.log(`Promise:${object.value}, ${object.result}`)
        return cuadradoPromise(5)
    })
    .then((object)=>{
        console.log('Inicio Promesa')
        console.log('Fin de la promesa')
    })
    .catch(error => console.error(error)); //.catch es el que va a capturar el error del reject


