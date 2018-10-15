var {mongoose} = require('../db/mongoose');
var User = mongoose.model('User', {
    email: {
        required: true,
        minLength:1,
        type:String

    }
});


module.exports = {
    User
};