/*Una Api es un conjunto de subrutinas,procesos, funciones o metodos que ofrece un software para que otro 
software pueda interactuar con él, y tambien consigo mismo
interfaz de programacion de aplicaciones que nos permite interactuar con un software

api rest: nos van a permitir crear aplicaciones web o moviles que se conecten a un servidor.
rest se basa en el protocolo http para poder exponer su arquitectura

protocolo http://: se basa en una comunicacion cliente servidor, donde el cliente hace una peticion 
y el servidor le da una respuesta 
como deberia ser esa peticion para cumplir el standard:

la peticion HTTP debe ser de esta forma:


GET /index.html HTTP/1.1    YA ESTAMOS EN LA VERSION 3. Linea más importate; especifica el tipo de peticion
Host: www.example.com
referer: www.google.com
User-Agent: Mozilla/5.0 (x11; Linux x86_64 rv:45.0 Gecko/20100101 Firefox/45.0)
Connection: Keep-alive

Metodos http: van a identificar que tipo de peticion esta haciendo el cliente hacia el servidor

Get: para hacer una peticion y que el servidor me envie información que le solicite. Para obtener información
Post: para enviar informacion desde el cliente hacia el servidor
Put: sirve para actualizar un recurso. Lo actualiza todo
delete: para eliminar un recurso
patch: para actualizar parcialmente un recurso(una parte)
header: permite consultar la existencia de un recurso. (Se usa muy poco)

options: lo utilizan los navegadores de manera nativa, va a permitir que el navegador valide que si estoy haciendo
una peticion desde un dominio A hacia un dominio B, el navegador.
controla que se hagan las peticiones desde el dominio permitido(desiganado por el usuario)

desde el cliente backend no se utiliza el options


Codigos de respuestas HTTP: (como se proceso esa peticion)

100 a 199 Informativos (no se usa nunca, ya lo trae configurado las librerias, fr)
200 a 299 Correcto 
300 a 399 Redirección 
400 a 499 Error del cliente(ej: el cliente hace una peticion a un sitio que no existe, una peticion mal echa(tipo dato))
500 a 599 Error de servidor(ej: se cayo la base de datos, badgateway)


rest: transferencia de estado representacional(arquitectura)

Propiedades rest: 

Todo, en la web, es un recurso y debe:

Tener un identificador único(uri)
Estar representado por un formato(xml,json,jpeg,etc)
Poderse representar con diferentes formatos

Las comunicaciones no tienen estado

*/