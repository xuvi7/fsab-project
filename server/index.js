// MERN = Mongo + Express + React + Node
// Development = Node.js server + React server

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')

app.use(cors())
app.use(express.json())

mongoose.connect(
    'mongodb+srv://dbUser:dbUserPassword@cluster0.icri1r3.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error_______________________________________________: "));
db.once("open", function () {
    console.log("Connected to MongoDB successfully");
});

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    console.log(req.body)
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(5000, () => {
    console.log('Server started on 5000')
})