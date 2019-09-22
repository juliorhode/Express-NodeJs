/*
const http = require('http');
http.createServer((req,res) => {
    res.end('hola a todos');
}).listen(3000);
*/

const express = require('express')
const morgan = require('morgan')

// requiriendo rutas
const rutas = require('./rutas');
const rutaAPI = require('./rutas-api');

// iniciamos express
const app = express();

// Configuraciones
app.set('appName','Mi primer servidor');

console.log('Ruta Padre: ' + __dirname);

// plantilla
app.set('views', __dirname + '/views');
app.set('view engine','ejs');


// app.use(morgan('dev'));
app.use(morgan('combined'));


/* ESTO SE LO DEJAMOS A MORGAN
app.use ( (req, res, next) => {
    console.log('request url: ' + req.url);
    next(); // para que continue con lo demas abajo
});

app.use ( (req, res, next) => {
    console.log('Pasaste por esta funcion');
    next(); // para que continue con lo demas abajo
});
*/

// rutas 
app.use( rutas ); // definidas en rutas.js
app.use( '/api' , rutaAPI );

// respuesta para cualquier ruta no existente
app.get('*', (req,res) => {
    res.end('Archivo no encontrado');
});

            /**RUTAS**/
// peticion http (ruta inicial)
/* ESTO SE TRASLADO A RUTAS.JS
app.get('/', (req,res) => {
    // res.end('Ruta inicial');
    res.render('index.ejs');
});

app.get('/login', (req,res) => {
    // res.end('Aqui va el login');
    res.render('login.ejs');
});
// respuesta para cualquier ruta no existente
app.get('*', (req,res) => {
    res.end('Archivo no encontrado');
});
*/
app.listen(3000, () => {
    // callback
    console.log('Servidor funcionando');
    console.log('Nombre de la App: ' + app.get('appName'));
    
});