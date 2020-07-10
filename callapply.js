

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


var myButton = {
	content: 'OK',
	click() {
	  console.log(this.content + ' clicked');
	}
};
  
myButton.click();
  
var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis
  
var boundClick = myButton.click.bind(myButton);
boundClick();



this.x = 9;
var module = {
  x: 81,
  getX: function(){ console.log(this.x)}
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81
