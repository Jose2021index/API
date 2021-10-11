//Instalaciones necesarias:
//Paquetes json: desde la terminal ejecutar los comandos 'npm init --yes'. 'npm i express morgan'
//Nodemon: Este es un modulo que hara que se actualice por si solo nuestro servidor, luego de instalarlo en la terminal
//         ejecutamos el comando 'npm run dev', este comando solo funcionara cuando lo ejecutemos y estemos con el codigo abireto,
//         al momento de abrir nuevamente el archivo tendrmoe que volver a ejecutarlo
//Underscore: Nos servira para poder tener funcionalidades como por ejemplo, procesar datos, obtener arreglos, etc; con su metodo .each
//            podremos recorrer, obtener y eliminar un arreglo que nosotros le indiquemos.

//Programa: Postman, este programa nos permitir hacerle peticiones a nuestro Rest Api, como por ejemplo, Mostra, Agregar, Modificar y Eliminar
//          lo que esta almacenado en la base de datos.                   

const express = require('express');// Se usa expres para poder ejecutar las rutas de la red API
const app = express();
const morgan = require('morgan');//Morgan es un middlewares  es decir, procesa los datos antes de que los reciba

//Configuracion
app.set('port', process.env.PORT || 3000); 
//Se crea esta variable 'port', sin ser una variable como tal para poder usarla desde 
//cualquier seccion del servidor Si en un caso se sube el servidor a la nube  
//usamos este comando 'process.env.PORT', sucedera que si hay un puerto definido 
//en servidio de la nube lo tomara de lo contrario que use el puerto '3000' que 
//esta por defecto 
app.set('json spaces', 2);
 
//middlewares
app.use(morgan('dev'));//Este parametro nos permite ver por medio de la consola lo que llega al servidor

app.use(express.urlencoded({extended: false}));//El servidor recibe formularios, ya sea de HTML, JAVASCRIPT o CSS

app.use(express.json());//El servidor recibe los archivos json.
// Se usa express para poder ejecutar las rutas de la red API

//Router
 //Se importa el archivo creado en la carpeta 'Router'
app.use('/api/movies',require('./Router/movies'));

//Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});