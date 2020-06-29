'use strict'


/*funciones : se las conoce como ciudadanos de primer orden, porque se puede hacer todo 
ej:retornar una función como el valor de retorno de otra, pasar como parametros funciones,
crear funciones autoinvocadas-anonimas


callback, una función que se va a ejecutar despues de que otra lo haga. Primer mecanismo de js 
para trabajar la asincronia

callbackhell

*/
/*
const cuadradoCallBack = (value,callback) => {
    setTimeout(()=>{
        callback(value,value*value)

    },0 || Math.random()*100);
}

cuadradoCallBack(0,(value,result) =>{
    console.log('Inicia callback');
    console.log(`Callback:${value}, ${result}`);
})

para concaternar varias peticiones asincronas no es recomendable usarlo

*/



function cuadradoCallBack(value,callback){ //recibe un function de callback como parametro
    setTimeout(()=>{
        callback(value,value*value)

    },0 || Math.random()*1000);
}

cuadradoCallBack(0,(value,result) =>{  
    console.log('Inicia callback');
    console.log(`Callback:${value}, ${result}`);
    
    cuadradoCallBack(1,(value,result) =>{
        console.log(`Callback:${value}, ${result}`);
        
        cuadradoCallBack(2,(value,result) =>{
            console.log(`Callback:${value}, ${result}`);
            
            cuadradoCallBack(3,(value,result) =>{
                console.log(`Callback:${value}, ${result}`);
                
                cuadradoCallBack(4,(value,result) =>{
                    console.log(`Callback:${value}, ${result}`);
                    
                    cuadradoCallBack(5,(value,result) =>{
                        console.log(`Callback:${value}, ${result}`);
                    })
                })
            })
        })
    })
})

/*Para concaternar varias peticiones asincronas no es recomendable usarlo. 
Para manipular errores hay que hacerlo en cada una de las funciones, 
por eso es mejor modularizarlo usando promesas, generadores o funciones async 

*/
