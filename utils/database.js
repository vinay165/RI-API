const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://KMR:kvr19940516@cluster-kmr-uulaa.mongodb.net/shop?retryWrites=true'
    )
        .then(client => {
            console.log('Connected!');
            _db = client.db();
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!'
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;