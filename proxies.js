/*proxies: nuevo mecanismo de js que permite crear un objeto basado en un objeto literal inicial
en lugar de usar clases como modelo a seguir, se usa un objeto literal
el proxy va a recibir el objeto literal, va a generar una copia y va a permitir realizar validaciones de propiedades
dentro de la copia generada y se va a administrar de un objeto especial (manejador == handler)

handler == set() recibe tres parametros objeto, propiedades, y valor que va a recibir cada una de las propiedades

hay una vinculación entre el objeto y el proxy

*/

const persona = {
    nombre:'',
    apellido:'',
    edad:0
}

//[A-Za-z] letras mayusculas de la a la z y tambien minusculas de la a a la z
//permite que no sufra cambios el objeto original.
//object.keys le da la lista
//handler
const manejador = {
    set(objeto,propiedades,valor){
        //validación de la existencia de  propiedad en el objeto
        if(Object.keys(objeto).indexOf(propiedades)=== -1){ //significa que no existe en el objeto original persona
            return console.error(`La propiedad ${propiedades} no existe en el objeto persona`)
        }
        if((propiedades === 'nombre' || propiedades === 'apellido') && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))){
            return console.error(`La propiedad "${propiedades}" solo acepta letras y espacios en blanco`)
        }
        objeto[propiedades] = valor;
    }
}



const ign = new Proxy(persona,manejador);

ign.nombre = 'Ignacio25';
ign.apellido = 'Larracoechea';
ign.edad = 25;
ign.mail = 'ignaciolarracoechea@gmail.com'  //también se lo agrega al objeto(persona)

console.log(ign)
console.log(persona)

