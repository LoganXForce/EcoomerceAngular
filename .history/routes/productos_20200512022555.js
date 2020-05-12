const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET todos los productos */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
