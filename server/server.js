const  express = require('express');
const body_parser = require('body-parser');


var {Todo} = require('./models/Todo');
var {User} = require('./models/User');
var port = process.env.PORT || 3000 ;


var app = express();
app.listen(port, ()=> {
    console.log('The server is up and running at :', port);
});

app.use(body_parser.json());


app.post('/todos', (req, res)=> {

   var todo = new Todo( {
       text: req.body.text,
       completed: req.body.completed
   });

   todo.save().then((doc)=> {
       res.send(doc);
   }, (err)=> {
        res.status(400).send(err) ;
   })
});