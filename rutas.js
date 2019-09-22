const express = require('express');
const rutas = express.Router();

        /**RUTAS**/
// peticion http (ruta inicial)
rutas.get('/', (req,res) => {
    // res.end('Ruta inicial');
    res.render('index.ejs');
});

rutas.get('/login', (req,res) => {
    // res.end('Aqui va el login');
    res.render('login.ejs');
});


module.exports = rutas;