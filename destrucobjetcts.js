const usuario = {
    nombre:'Carlos',
    mail:'mail@gmail.com',
    edad: 22,
    país:'México',
    profesion:'Desarrollador Web'
}

const {nombre,mail,profesión='Estudiante'} = usuario //objeto destructurado. se puede asignar un valor por defecto

const mostrarInfo = ({ nombre,profesion}) => console.log(`${nombre} es ${profesion}`)
mostrarInfo(usuario)


//console.log(usuario.mail);
