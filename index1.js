// Se usa expres para poder ejecutar las rutas de la red API

const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuracion
app.set('port', process.env.PORT || 3000); 
//Se crea esta variable sin ser una variable como tal para poder usarla desde 
//cualquier seccion del servidor Si en un caso se sube el servidor a la nube  
//usamos este comando 'process.env.PORT', sucedera que si hay un puerto definido 
//en servidio de la nube lo tomara de lo contrario que use el puerto '3000' que 
//esta por defecto 
app.set('json spaces', 2);

//Morgan es un middlewares  es decir, procesa los datos antes de que los reciba 
//middlewares
app.use(morgan('dev'));//Este parametro nos permite ver por medio de la consola lo que llega al servidor

app.use(express.urlencoded({extended: false}));//El servidor recibe formularios, ya sea de HTML, JAVASCRIPT o CSS

app.use(express.json());//El servidor recibe los archivos json.
// Se usa express para poder ejecutar las rutas de la red API

//Router
app.use(require('./Router/Index2')); //Se importa el archivo creado en la carpeta 'Router'
app.use('/api/movies',require('./Router/movies'));

//Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

//Con el comando npm i nodemon -D, nos permtira actualizar el servidor 
//mientras lo estemos programando, cuando este subido no le  sucedera nada

//En scrip de package.json se crea un devc para que cuando en la console se 
//ejecute el comando 'npm run dev' ejecute a nodemon y nodemon ejecutra
//el archivo 'src/index1.js' por nosotros, es decir lo estara acutalizando 
//cada vez que cambiemos algo en el codigo

//Se instala UNDERSCORE.JS, para poder recorrer, eliminar o obtener un arreglo

//Se instala node-fetch para hacer peticiones get, post, put, delete a otro servicio desde Node.js