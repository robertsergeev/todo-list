const Router = require('express')
const router = new Router();
const controller = require('../controllers/todoController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/todos', authMiddleware, controller.getAllTodos)
router.post('/todos', authMiddleware, controller.addNewTodo)
router.patch('/:todoId/toggle_completed', authMiddleware, controller.toggleCompleted)
router.patch('/:todoId/change_title', authMiddleware, controller.changeTitle)
router.delete('/:todoId', authMiddleware, controller.deleteTodo)

module.exports = router