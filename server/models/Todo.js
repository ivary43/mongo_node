var {mongoose} = require('../db/mongoose');
//bug if it is
var Todo = mongoose.model('todo_list', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }, completedAt: {
        type: Number,
        default: false
    }

});

module.exports  = {
    Todo
};