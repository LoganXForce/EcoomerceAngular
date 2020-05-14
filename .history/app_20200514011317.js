const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();


//importar rutas

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');


//Usuario Router
app.use('/api/products', productosRouter);
app.use('/api/users', usuariosRouter);

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
