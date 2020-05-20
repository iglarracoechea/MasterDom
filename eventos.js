'use strict'

//eventos: funciones que se ejecutan cuando sucede algo
//evento load: lanza el script cuando ya estan todas las etiquetas,atributos y elementos cargados en el dom
//evita tener que colar el script al final del html
window.addEventListener('load',()=>{
    const cambiarColor = ()=> {
        let bg = boton.style.background  //más recomendable
        if(bg  === 'green'){
            boton.style.background = 'red'
            boton.style.padding = '15px'
            boton.style.border = '1px solid blue'
        }else{
            boton.style.background = 'green'
        }
    
        return true
    }
    // de mouse:
    //evento click ondblclick
    let boton = document.querySelector('#boton')
    boton.addEventListener('click', function() { //se puede capturar cualquier evento
            cambiarColor()
    }) 
    
    //mouseover: actua como un hover de css. tiene en cuenta los elementos hijos
    
    boton.addEventListener('mouseover',function(){
        boton.style.background = 'lightblue'
        boton.style.fontSize = '15px'
    })
    
    //mouse out: cuando salgo del boton ejecuta el evento
    boton.addEventListener('mouseout',function(){
        boton.style.background = 'black'
    })
    
    //focus: cada vez que este dentro del input, lanza un evento
    let input = document.querySelector('#campo_nombre')
    input.addEventListener('focus',function(){
        console.log('Estas dentro del input')
    })
    //blur: lo mismo que focus pero al revez, lanza el evento cuando salimos 
    input.addEventListener('blur',function(){
        console.log('Estas fuera del input')
    })
    
    //keydown: lanzo el evento cuano pulsamos una tecla
    input.addEventListener('keydown',function(event){   //fromCharCode convierte el keyCode a un caracter
        console.log('(keydown)Pulsando tecla', String.fromCharCode(event.keyCode)) //sirve para capturar cosas del teclado
    })
    
    //keypress: tecla presionada
    input.addEventListener('keypress',function(event){
        console.log('(keypress)Tecla presionada',String.fromCharCode(event.keyCode))
    })
    
    //keyup: se produce después de que el usuario suelta una tecla en el teclado.
    
    input.addEventListener('keyup',function(event3){
        console.log('(keyup)Tecla soltada',String.fromCharCode(event3.keyCode))
    })
})

//evento load: lanza el script cuando ya estan todas las etiquetas,atributos y elementos cargados en el dom
//evita tener que colar el script al final del html

