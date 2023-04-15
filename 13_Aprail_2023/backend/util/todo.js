const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true
    },
    value : {
        type: String,
        required: true
    }
});

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;


