const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routers/authRouter')
const todoRouter = require('./routers/todoRouter')
const PORT = process.env.PORT || 3000
const {mongodbLink} = require('./config')

const corsOption = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

const app = express()

app.use(cors(corsOption))
app.use(express.json())
app.use('/auth', authRouter)
app.use('/todo', todoRouter)

const start = async () => {
    try {
        await mongoose.connect(mongodbLink)
        app.listen(PORT, () => {
            console.log(`Listening on PORT ${PORT}`)
        })
    } catch (e) {

    }
}

start()