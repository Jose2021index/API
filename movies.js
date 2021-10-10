//Archico que almacena los datos de la ruta movies
const {Router} = require('express');
const router = Router(); 
const _ = require('underscore'); //Nos agrega funcionalidades para procesar datos, obtener arreglos, etc. 

const movies = require('../base_ejemplo.json');
//console.log(movies);//Se envie un mensaje por sonsola para confirmar que se reciben lso datos de la base de datos que hemos creado
//Este ejemplo funcionara solo cuando el servidor este levantado.

router.get('/', (req, res) =>{
    res.json(movies);
});

//Guarda los datos enviados desde Postman.
router.post('/', (req, res) =>{
    const {NOMBRE, GENERO, AÑO} = req.body;// Se obtienen los datos que se agregran.
    if (NOMBRE && GENERO && AÑO){ //Se comprueba si estan todos los datos 
        const ID = movies.length + 1;//Desde la longitud que haya en la base de datos, se le ira aumentando 1 
        const NuevaPelicula = {...req.body, ID};
        movies.push(NuevaPelicula);//Aqui se guardara la nueva pelicula ingresada
        res.json(movies);//Se mostra con las peliculas de la base de datos y las que se agregen   
    }
    else {
        res.status(500).json({Error: 'Ha habido un error con la base de datos.'});//Mnesaje de error si los parametros no cumplen con la condicion.
    }
});

//Actualiza los datos
//Actualizara por medio de la ruta con su ID correspondiente
router.put('/:ID', (req, res) => {
    const {ID} = req.params;//Obtencion del ID
    const {NOMBRE, GENERO, AÑO} = req.body;// Se obtienen los datos que se actualizaran 
    if (NOMBRE && GENERO && AÑO){
        _.each(movies, (movie, i) => {// Busca la pelicula que se desea eliminar
            if (movie.ID == ID) {//Encuentra la pelicula si existe.
                //Actualiza los datos de la pelicula encontrada.
                movie.NOMBRE = NOMBRE;
                movie.GENERO = GENERO;
                movie.AÑO = AÑO;
            }
        });
        res.json(movies);//Envia los datos actualizados
    }
    else{
        res.status(500).json({Error: 'Aun hay campos vacios, por favor llenar todos los campos'});
    }
});

//Elimina lo guardado en la base de datos.
//Se debe usar si o si el ID que se dese eliminar, de lo contrario no sucedera nada 
router.delete('/:ID', (req, res) => {//Recibe el ID que se quiere eliminar
    const {ID} = req.params;//Obtencion del ID
    if (ID) {
        _.each(movies, (movie, i) => {// Busca la pelicula que se desea eliminar
            if (movie.ID == ID) {//Encuentra la pelicula si existe.
                movies.splice(i, 1);//Elimina la pelicula.
            }
        });
        res.json(movies);//Envia el arreglo actualizado.
    }
});

module.exports = router;