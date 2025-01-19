const User = require('../models/User')

class todoController {
    async getAllTodos(req, res) {
        try{
            const userId = req.user?.id;
            if(!userId) {
                return res.status(400).json({message: "User is not logged in!"})
            }

            const user = await User.findOne({_id: userId})
            if(!user) {
                return res.status(404).json({message: "User is not found!"})
            }

            const todos = user.todos
            res.status(200).json({todos})

        } catch (e) {
            console.log(e);
            res.status(500).json({message: "Server error"})
        }
    }


    async addNewTodo(req, res) {
        try {
            const userId = req.user?.id
            if(!userId) {
                return res.status(400).json({message: "User is not logged in!"})
            }

            const {title} = req.body
            if(!title) {
                return res.status(400).json({message: "Todo title is not provided"})
            }

            const user = await User.findById(userId)
            if(!user) {
                return res.status(404).json({message: 'User was not found'})
            }

            const newTodo = {title, completed: false, id: user.todos.length + 1}
            user.todos.push(newTodo)
            await user.save()

            res.status(200).json({message: 'New todo added successfully!', todo: newTodo})

        } catch(e) {
            console.log(e)
        }
    }

    async toggleCompleted(req, res) {
        const userId = req.user?.id
        if(!userId) {
            return res.status(400).json({message: "User is not logged in!"})
        }

        const {todoId} = req.params
        const {completed} = req.body

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        const todo = user.todos.find(todo => todo.id === parseInt(todoId))
        if(!todo) {
            return res.status(404).json({message: 'Todo was not found!'})
        }

        try {
            user.todos.map(el => {
                if(el.id === parseInt(todoId)) {
                    el.completed = !el.completed
                }
            })

            await user.save()
            res.status(200).json({message: 'Todo status updated successfully!', todo})

        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Error!'})
        }



    }

    async changeTitle(req, res) {
        const userId = req.user?.id
        if(!userId) {
            return res.status(400).json({message: "User is not logged in!"})
        }

        const {todoId} = req.params
        const {title} = req.body

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        const todo = user.todos.find(todo => todo.id === parseInt(todoId))
        if(!todo) {
            return res.status(404).json({message: "Todo not found"})
        }

        todo.title = title
        await user.save()
        res.status(200).json({message: "Todo title was successfully updated!"})
    }

    async deleteTodo(req, res) {
        const userId = req.user?.id
        if(!userId) {
            return res.status(400).json({message: "User is not logged in!"})
        }

        const {todoId} = req.params

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        const todo = user.todos.find(todo => todo.id === parseInt(todoId))
        if(!todo) {
            return res.status(404).json({message: "Todo not found"})
        }

        user.todo = user.todos.filter(todo => todo.id !== parseInt(todoId))

        await user.save()
        res.json(200).json({message: 'Todo was successfully deleted!'})
    }

}

module.exports = new todoController()