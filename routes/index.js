var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({}).exec(function(err , docs){
    var carray = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      carray.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', prod: carray});
  });  
});

module.exports = router;