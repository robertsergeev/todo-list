const Router = require('express')
const controller = require('../controllers/authController')
const {check} = require('express-validator')
const router = new Router();

router.post('/registration', [
    check('username', "Username can not be empty").notEmpty(),
    check('password', "Password should be at least 5 characters long").isLength({min: 5})
], controller.registration)
router.post('/login', controller.login)

module.exports = router