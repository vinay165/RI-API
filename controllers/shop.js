const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(products => {
    res.status(200).send(products);
  })
  .catch(err => {
    console.log(err);
  })
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  
  Product.findById(prodId)
  .then(product => {
    res.status(200).send(product);
  })
  .catch(err => {
    console.log(err);
  })
};