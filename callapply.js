

/*
call:
apply:
bind:
*/ 

console.log(this)
this.lugar='Global'

function saludar(saludo,quien){
    console.log(`${saludo} ${quien} desde el ${this.lugar}  `);
}

saludar('Hola','kenai')

const obj = {
    lugar:'Contexto Objeto',
}

saludar.call(obj,'Hola','Ignacio');   //llama a la función saludar pero con un nuevo contexto
saludar.call(null,'Hola','Ignacio');
saludar.call(this,'Hola','Ignacio');

saludar.apply(obj,['Adios','Larracoechea']);   //igual que call pero usa un arreglo con los demás parametros
saludar.apply(this,['Adios','Larracoechea']);
saludar.apply(null,['Adios','Larracoechea'])

this.nombre = 'Window';  //creado en el contexto global

//bind(enlace)

const persona = {
    nombre:'Jorge',
    saludar:function(){
        console.log(`Hola ${this.nombre}`)  
    }
}

//persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona)   //enlaza el contexto de otro objeto(en este caso )
}

otraPersona.saludar(); //devuelve undefined