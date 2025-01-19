const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token) {
            return res.status(403).json({message: "User is not logged in!"})
        }

        req.user = jwt.verify(token, secret)
        next()

    } catch (e) {
        console.log(e)
        res.json(400).json({message: 'User is not logged in!'})
    }
}