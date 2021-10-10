//Inicio de la RED API
const {Router} = require('express');
const router = Router(); //Se guarda en esta constante y nos permite crear nuevas rutas

//Routes, creacion de la rutas
//Desde esta parte podremos enviar un archivo HTML o responderlo pero al ser una API debemos responder archivos JSON. 
router.get('/test', (req, res) =>{
    const data = {
        "JOSE": "GOOGLE.COM"
    };
    res.json(data);
});

module.exports = router; // Esta line se utiliza para poder exportar el archivo 