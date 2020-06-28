'use strict'

//callbacks

//pila de ejecución:(call stack) => suele preguntarse mucho en entrevistas técnicas 
/*es un mapa que utilizan los motores de js a lo hora de ejecutar nuestros programas y le sirve para saber 
en que función estan parados durante la ejecucion del programa y por cuales funciones fueron pasando previamente 
hasta llegar ahí, y de esta manera cuando el motor termine de ejecutar la funcion actual puede continuar 
ejecutando la funcion previa desde el lugar exacto que se habia realizado la llamada a la function actual y 
asi si esta funcion llama otra el motor va saber donde tiene que volver cuando termine de ejecutar esta otra funcion


usan una pila(en lugar de un mapa): 
pilas = se las conocen como lifo=> last in First out(el ultimo en entrar es el primero en salir)
significa que cuando queremos sacar un elemento de la pila hay que sacar el que esta arriba del todo


//funcion anonymous(primera funcion que se agrega a la pila y la ultima que sale, dejando la pila vacia ): 
es una funcion  que engloba a todo el programa. 
cada vez que se llama a una función se apila en el callstack

stacktrace: la secuencia de llamadas que se fueron dando durante la ejecución de un programa hasta 
una excepción o un error inesperado. util para buscar bugs

scope:contexto actual de ejecución. Variables y funciones que se pueden acceder cuando se esta ejecutando una función

//lo que esta dentro del scope
El conjunto de variables que tiene acceso a la función, el contexto(this), 
arguments u objeto global(window o global)

this: hace referencia al objeto que seria como el dueño de la función, y el valor que tiene determina 
lo que se llama el contexto de la función

arguments: contiene todo los parametros que recibe cuando la función fue invocada

la funcion deja la pila cuando se terminan de ejecutar(sino terminaron no pueden salir)


call stack(pila de ejecución)
conclusión: es un registro que contiene la funcion, el contexto de  ejecución(Scope), el nombre del archivo al que
pertenece y el numero de la proxima linea a ejecutar que se va a ir actualizando a medida que esta función se valla 
ejecutando. Cada vez que se llama a una funcion el motor va a crear un nuevo registro de estos y lo va a agregar
a su pila de ejecucion y el motor de js trabaja con ese registro hasta que se termina de ejecutar 
la funcion(porque se llego al final o se ejecuto un return) y luego sigue con la siguiente función.

*/