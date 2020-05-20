'use string'

//timers
// set interval: permite ejecutar un trozo de codigo cada x segundos. set timeout: se ejecuta solo una vez
window.addEventListener('load',()=>{
    
    const intervalo = () => {
        
        const tiempo = setInterval(() => {
            console.log('Set interval ejecutado')
        
             let encabezado = document.querySelector('h1');
                if(encabezado.style.fontSize === '50px'){
                encabezado.style.fontSize = '30px'
            }else{
                encabezado.style.fontSize = '50px'  
            }
        },1000);

        return tiempo
    }
    
    const tiempo2 = intervalo()
    
    let start = document.querySelector('#start')
        start.addEventListener('click',()=>{
             alert('Haz iniciado el intervalo')
             intervalo()
        })
    
    
    let stop = document.querySelector('#stop')
        stop.addEventListener('click',()=>{
        clearInterval(tiempo);  //para el intervalo
        alert('Haz parado el intervalo en bucle')
    })


    let tiempoUnico = setTimeout(() => {  //se ejecuta una unica vez
        console.log('Set interval ejecutado')
        
        let caja = document.querySelector('#micaja');
        if(caja.style.fontSize === '50px'){
            caja.style.fontSize = '30px'
        }else{
            caja.style.fontSize = '50px'  
        }

         
    },1000);



})