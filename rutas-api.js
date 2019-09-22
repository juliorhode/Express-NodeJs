const express = require('express');
const rutas = express.Router();

// respuesta json a la ruta inicial
rutas.get('/', (req,res) =>{
    res.json({
        primerApi : 'Funcionando API'
    });
});

module.exports = rutas;