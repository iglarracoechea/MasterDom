'use strict'

/*funciones asincronas(async): van a esperar a que algo se cumpla para poder seguir ejecutando el proceso
trabajan en conjunto con las promesas

*/

const cuadradoPromise = (value)=>{
    if(typeof value !== 'number') return Promise.reject(`Error el valor' ${value} ingresado no es un número`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //if(typeof value !== 'number') return reject(`Error el valor' ${value} ingresado no es un número`);
            resolve({
                value,
                result:value*value,
            })
        },0 || Math.random()*800);
    })
}

//este mecanismo evita tener concatenados varios .then. Mejor estructuración del código

async function funcionAsincronaDeclarada () { //se antepone la palabra async.//cada peticion la puedo guardar en una var
    try{
        console.log('Inicio Async:');
        //espera el resultado de la función cuadradoPromise antes de pasar a la sgte linea y ejecutarla
        let object = await cuadradoPromise(0);
        console.log(`Async Function: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(1)
        console.log(`Async Function: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(2)
        console.log(`Async Function: ${object.value}, ${object.result}`)

        object = await cuadradoPromise('3')
        console.log(`Async Function: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(4)
        console.log(`Async Function: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(5)
        console.log(`Async Function: ${object.value}, ${object.result}`)

        console.log('Fin Async Function')
    }catch(error){
        console.error(error)
    }
}

funcionAsincronaDeclarada()

//función asincrona expresada. await funciona solo con async

const funcionAsincronaExpresada = async () => {
    try{
        console.log('Inicio Async Exresada:');
        //espera el resultado de la función cuadradoPromise antes de pasar a la sgte linea y ejecutarla
        let object = await cuadradoPromise(6);
        console.log(`Async Function Expresada: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(7)
        console.log(`Async Function Expresada: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(8)
        console.log(`Async Function Expresada: ${object.value}, ${object.result}`)

        object = await cuadradoPromise('9')
        console.log(`Async Function Expresada: ${object.value}, ${object.result}`)

        object = await cuadradoPromise(10)
        console.log(`Async Function Expresada: ${object.value}, ${object.result}`)

        console.log('Fin Async Function')
    }catch(error){
        console.error(error)
    }
}

funcionAsincronaExpresada()