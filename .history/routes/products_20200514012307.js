const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET todos los productos */
router.get('/', function(req, res) {
 
  //establer el numero de pagina
  let page = (req.query.page != undefined && req.query.page !=0) ? req.query.page : 1; 
 //establecer el numero de prodcutos por pagina
  const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit : 10;

  let startValue;
  let endValue;

  if(page > 0){
    startValue = (page * limit) - limit;     // 0, 10, 20, 30
    endValue = page * limit;  
  }
  else{
    startValue = 0;
    endValue = 10;
  }

  database.table('products as p')
  .join([
      {
          table: "categories as c",
          on: `c.id = p.cat_id`
      }
  ])
  .withFields(['c.title as category',
      'p.title as name',
      'p.price',
      'p.quantity',
      'p.description',
      'p.image',
      'p.id'
  ])
  .slice(startValue, endValue)
  .sort({id: .1})
  .getAll()
  .then(prods => {
      if (prods.length > 0) {
          res.status(200).json({
              count: prods.length,
              products: prods
          });
      } else {
          res.json({message: "No products found"});
      }
  })
  .catch(err => console.log(err));
});

module.exports = router;
