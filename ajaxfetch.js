//ajax asynchronous javascript * xml

//se puede comunicar con el servidor, intercambiar datos, y actualizar del usuario sin necesidad de recargar 
//el navegador

/*estado de una peticion

Estado                      valor
READY_STATE_UNINITIALIZED	0   = el cliente comienza a comunicarse con el servidor
READY_STATE_LOADING	1           = cargando, se estan enviando los datos al servidor
READY_STATE_LOADED	2           = loaded, el servidor ya envio la info pero el cliente todavia no la tiene lista
READY_STATE_INTERACTIVE	3       = interactivo el motor de js ya tiene acceso a los datos de esta petición
READY_STATE_COMPLETE	4       = complete datos listos, y listos para manipular


*/
//funcion anonima autoejecutable. para que el fragment no entre en conflicto con el anterior(aunque yo tengo uno solo)
(() => {
    const $fetch = document.getElementById('fetch'),
          $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
    /*.then(res =>{
        //se devuelve al sgte then //SE CONVIERTE A JSON.TEXT() PARA HTML .BLOB()FORMATO DATA URI
        console.log(res)
        return res.ok ? res.json() : Promise.reject(res); validar error, se va al catch  //ok = true or false
    })*/
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then(json =>{
        json.forEach((el) =>{
            const $li = document.createElement('li')
            $li.innerHTML = `${el.name}  ----   ${el.email}   ----   ${el.phone}`
            $fragment.appendChild($li)
        })
        $fetch.appendChild($fragment)
        //$fetch.innerHTML = json
    })
    .catch((err) =>{
        console.log(err);
        let message = err.statusText || 'Ocurrio un error';
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=>  //el finally es opcional
        console.log('Esto se ejecutará sin importar el resultado de la promesa fetch')
    );

})();