const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const metrix = req.body.metrix;
  const quantity = req.body.quantity;
  const imgSrc = req.body.imgSrc;
  const product = new Product(name, description, price, metrix, quantity, imgSrc);
  product.save()
  .then(result => {
    console.log('Created Product!');
    res.status(200).send(product);
  })
  .catch(err => {
    console.log(err);
  })
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(products => {
    res.status(200).send(products);
  })
  .catch(err => {
    console.log(err);
  })
};

exports.postEditProduct = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const metrix = req.body.metrix;
  const quantity = req.body.quantity;
  const imgSrc = req.body.imgSrc;
  const id = req.body.id;
  const product = new Product(name, description, price, metrix, quantity, imgSrc, id);
  product.save()
  .then(result => {
    console.log('Updared Product!');
    res.status(200).send(product);
  })
  .catch(err => {
    console.log(err);
  })
};

exports.postEditProduct = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const metrix = req.body.metrix;
  const quantity = req.body.quantity;
  const imgSrc = req.body.imgSrc;
  const id = req.body.id;
  const product = new Product(name, description, price, metrix, quantity, imgSrc, id);
  product.save()
  .then(result => {
    console.log('Updated Product!');
    res.status(200).send(product);
  })
  .catch(err => {
    console.log(err);
  })
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.id;
  Product.deleteById(id)
    .then(() => {
      console.log('Destroyed Product!');
      res.status(200).send();
    })
    .catch(err => {
      console.log(err);
    })
};