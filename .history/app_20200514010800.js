const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();


//importar rutas

const productosRouter = require('./routes/products');
const usuariosRouter = require('./routes/usuarios');


//Usuario Router
app.use('/api/productos', productosRouter);
app.use('/api/usuarios', usuariosRouter);

app.use(cors({
    origin: "*",
    methods: ['Get', 'Post', 'Patch', 'Delete', 'Put'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Request-With, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
