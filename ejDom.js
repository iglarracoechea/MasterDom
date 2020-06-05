'use strict'

const formulario = document.getElementById('formulario')
const content = document.getElementById('content')
const fragments = document.createDocumentFragment() 


//content.style.display = 'none'

content.style.display = 'none'

formulario.addEventListener('submit',()=>{
        let name = document.querySelector('#names').value,
            surname = document.querySelector('#surnames').value,
            age = document.querySelector('#age').value,
            mensaje = document.querySelector('#span-name')

            mensaje.style.display = 'block'
            mensaje.style.marginLeft = '4em'

         if(!(name) ==='undefined' || name.trim().length === 0 || name === undefined){
             alert('Falta el nombre');
             mensaje.innerHTML = 'Falta el nombre'
             return false
         }else{
            mensaje.style.display = 'none'
         }
         if(!(surname) || surname.trim().length === 0 || surname === undefined){
            alert('Falta el apellido');
            return false
        }
       
        if(isNaN(age) || !(age) || age === undefined || age <= 0){
            alert('Falta la edad');
            return false
        }
       
        
        content.style.display = 'block'

        let datos = [name,surname,age];

        for(let info in datos){
            let parrafo = document.createElement('p')
            fragments.appendChild(parrafo)
            parrafo.textContent = datos[info]
            content.append(parrafo)
        }
       
})





/*newElement.id = 'content'

newElement.textContent = 'Hola'

newElement.style.width = '250px'
newElement.style.height = '250px'
newElement.style.backgroundColor = 'red'*/