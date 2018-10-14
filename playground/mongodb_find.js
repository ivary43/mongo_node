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

    db.collection('User').find({age:'22 '}).count().then((docs)=> {
        console.log('Total todos :', docs );
    }, (err)=> {
        console.log('Unable to access the data base', err);
    })

    //client.close();
});