const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

const ObjectId = mongodb.objectId;

class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  save(){
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(){
    const db = getDb();
    // return db.collection('users').find({_id: new ObjectId}).next();
    return db.collection('users').findOne({_id: new ObjectId});
  }
}

module.exports = User;