const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET todos los productos */
router.get('/', function(req, res) {
 
  //establer el numero de pagina
  let page = (req.query.page != undefined && req.query.page !=0) ? req.query.page : 1; 
 //establecer el numero de prodcutos por pagina
  const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit : 10;

  let valorInicial;
  let valorFinal;

  if(page > 0){
    valorInicial = (page * limit) - limit;
    valorFinal = page * limit;
  }
  else{
    valorInicial = 0;
    valorFinal = 10;
  }

  database.table('products as p')
  .join([{
    table: 'categories as c',
    on: 'c.id = p.cat_id'
  }])

  .withFields(['c.tite as category', "c.title as category"])


});

module.exports = router;
