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
    db.collection('User').insertOne( {
        name: 'Manish Kumar',
        age: 21,
        location: '!373-C mandsihafiafho;f'
    }, (err, result)=> {
        if(err) {
            return console.log('Unable to insert document');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.collection('Todo').insertOne( {
        text: 'Something to do ',
        completed: false
    }, (err, result)=> {
        if(err) {
            return console.log('Unable to insert document');
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    });

    client.close();
});