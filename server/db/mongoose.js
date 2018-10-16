let mongoose = require('mongoose');
mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://manishk:qwerty12@ds233763.mlab.com:33763/todos',{ useNewUrlParser: true }).catch((err)=> {
  console.log('Err ->', err);
});

module.exports  = {
  mongoose
};

