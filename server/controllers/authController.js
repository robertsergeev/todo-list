const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const { validationResult } = require('express-validator')

const generateAuthToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Registration error"})
            }

            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate) {
                return res.status(400).json({message: `User with username ${username} already exist!`})
            }

            const hashedPassword = bcrypt.hashSync(password, 7)
            const user = new User({username, password: hashedPassword, todos: []})
            await user.save()
            res.status(200).json({message: 'User was successfully registered!'})

        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Registration error"})
        }
    }

    async login(req, res) {
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user) {
                return res.status(400).json({message: `User with username ${username} already exist `})
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) {
                return res.status(400).json({message: 'Incorrect password!'})
            }

            const token = generateAuthToken(user._id)
            res.status(200).json({token})

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error!'})
        }
    }
}

module.exports = new authController()