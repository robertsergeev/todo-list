const {Schema, model} = require('mongoose')
const Todo = require('./Todo')

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    todos: [Todo]
})

module.exports = model('User', User)