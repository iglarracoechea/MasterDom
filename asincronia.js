
/*asincronia: pilar de js. es un lenguaje de un sulo subproceso o hilo.(single thread): 
que puede ejecutar una cosa a la vez .

 asynchronous actions. In other words, actions that we initiate now, but they finish later.


*Permite hacer largas solicitudes de red sin bloquear el hilo principal,
*js trabaja bajo un modelo asincrono y no bloqueante, y tiene un loop de eventos de un solo hilo para operaciones 
de entrada y salida

Procesamiento Single Thread y Multi thread: (es igual en node)
single thread: un subproceso a la vez.
thread: unidades basicas de ejecucion de cada proceso que realiza la pc

operaciones de CPU Y operaciones de i/o

de cpu: son las operaciones que van a pasar más tiempo consumiendo los procesos de nuestra cpu

de i/o (más utilizado): input/output: van a pasar la mayor parte del tiempo esperando la peticion del recurso 
han solicitado.

recursos: solicitar datos en una api y que los devuelva en json.

operaciones concurrentes y paralelas.

concurrentes: es cuando dos a más tareas progresan simultaneamente
paralelas: dos o mas tareas se ejecutan en el mismo tiempo.

operaciones bloqueantes y no bloqueantes: se refiere a la fase de espera

bloqueante: no va a devolver el control a la app hasta que haya terminado toda la tarea.

no bloqueante: las operaciones se ejecutan y devuelven inmediantemente el control al hilo principal, sin importar
si terminaron o no la tarea


operaciones sincronas y asincronas

sincrono: significa que la respuesta sucede en el presente, en el tiempo inmediato. 
Generalmente es bloqueante, aunque tambien pueden ser no bloqueante

asincrono: la respuesta suceden en un futuro se ejecuta pero no se sabe cuando va a venir la respuesta
( tiempo futuro) generalmente es no bloqueante. suelta inmediantemete el control y se lo regresa al hilo principal


dos tipos de codigo vamos a tener en js 

codigo síncrono bloqueante: cada operacion se hace de una vez bloqueando el flujo del hilo principal este hilo queda 
bloqueado mientras espera la respuesta cuando este se procese pasa a la siguiente la operacion y asi sucecivamente
hasta terminar las operaciones */

//cada operacion bloquea el hilo principal del event loop de javascript (que es un unico subproceso)
/*(() =>{
    console.log('Codigo Sincrono');
    console.log('Inicio')

    function dos(){
        console.log('Dos')
    }

    function uno (){
        console.log('Uno');
        dos();
        console.log('Tres')
    }

    uno()
    console.log('Fin')
})()*/

//lifo = la ultima en llegar es la primera que sale(last in first out)
/*codigo síncrono  no bloqueante: */

(()=> {
    console.log('Codigo ASincrono');
    console.log('Inicio')

    function dos(){
        setTimeout(function (){  //el setTimeout es un mecanismo de asincronismo
            console.log('Dos')
        },0);
    }

    function uno (){
        setTimeout(function(){
            console.log('uno');
        },0)
        dos();
        console.log('tres');
    }

    uno(); 
    console.log('Fin')
})();

/* Javascript usa un modelo asincrono y no bloqueante con un loop de eventos implementado 
en un sólo hilo(single-thread) para operaciones de entrada y salida(input/output) */

