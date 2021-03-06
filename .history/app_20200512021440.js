const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();


//importar rutas



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');



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
