const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class Product {
  constructor(name, description, price, metrix, quantity, imgSrc, id){
    this.name = name;
    this.description = description;
    this.price = price;
    this.metrix = metrix;
    this.quantity = quantity;
    this.imgSrc = imgSrc;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if(this._id){
      dbOp = db
        .collection('products')
        .updateOne({_id: this._id}, {$set: this});
      // there is updateMany to update many documents
    } else {
      dbOp = db.collection('products').insertOne(this)
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      }); 
  }

  static fetchAll() {
    const db = getDb();
    return db
    .collection('products')
    .find({})
    .toArray()
    .then(products => {
      console.log(products);
      return products;
    })
    .catch(err => {
      console.log(err);
    })
  }

  static findById(prodId) {
    const db = getDb();
    return db.collection('products')
    .find({ _id: new mongodb.ObjectId(prodId) })
    .next()
    .then(product => {
      console.log(product);
      return product;
    })
    .catch(err => {
      console.log(err);
    })
  }

  static deleteById(id){
    const db = getDb();
    db
      .collection('products')
      .deleteOne({_id: new mongodb.ObjectId(id)})
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;