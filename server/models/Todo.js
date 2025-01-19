const {Schema, model} = require('mongoose')

const Todo = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
})

module.exports = Todo