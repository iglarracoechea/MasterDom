/*
this = hace referencia al objeto en cuestión(al que estamos trabajando)igual que en otros lenguajes POO, pero con 
algunas diferencias 
this(hace referencia al objeto global que se llama window en el navegador)

{

scope

}

funciones:las podemos retornar como el resultado de otra función(closure)

console.log(this)
console.log(window)
console.log(this===window)*/

this.nombre = 'Contexto Global-0';
console.log(this.nombre);

function imprimir(){
    nombre = 'Contexto Global-1';
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre:'obj1 Contexto Objeto',
    imprimir: function(){
        console.log(this.nombre);
    }
}

obj.imprimir()

const obj2 = {
    nombre:'obj2 Contexto Objeto 2',
    imprimir    //va a hacer referencia a la(function imprimir) pero mantiene el scope local
}

obj2.imprimir() //devuelve 'Contexto objeto 2'

//cuando creamos un objeto literal y dentro hay propiedades, metodos y van a interactuar con propiedades de tu objeto
// literal, se recomienda no utilizar arrow functions porque no crean un scope, se salta el scope donde fue creado

const obj3 = {
    nombre:'obj3 Contexto Objeto 3',
    imprimir:() => {  //las arrow function no manejan su propio scope, en este caso obedece agarra del padre
        console.log(this.nombre) //no usarlas como metodo
    }
}

obj3.imprimir()


function Persona(nombre){
    this.nombre = nombre;
    //return console.log(this.nombre) //hace referencia a nombre de la function Persona
   /* return function(){crea nuevo scope y al no tener una variable local 'nombre', va a hacer referencia a la global 
        console.log(this.nombre,22) muestra contexto global-1
    }*/
    return () => console.log(this.nombre,77)
}

let ign = new Persona('Ignacio')
ign()  