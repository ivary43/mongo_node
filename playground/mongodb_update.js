//const  MongoClient = require('mongodb').MongoClient ;
//destructuring the variables
const {MongoClient, ObjectID} = require('mongodb');

// var obj  = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true},  (err, client)=> {
    if(err) {
        return  console.log('Unable to connect to database :', err);
    }
    console.log('Connected to the server');
    const  db = client.db('TodoApp');

    db.collection('Todo').findOneAndUpdate({_id: new ObjectID('5bc315c7a4f3773677f553c9')}, {
        $set: {
            completed: true
        }
    }, { returnOriginal: false}).then( (result)=> {
       console.log(result);
    });

    db.collection('User').findOneAndUpdate({_id: new ObjectID('5bc31f79fa7b4e37a0560b17')}, {
        $set: {
            name: 'chacha chow'
        },
        $inc: {
            age:1
        }
    }, { returnOriginal: false}).then( (result)=> {
        console.log(result);
    });
    //client.close();
});