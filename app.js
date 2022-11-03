require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)
    .then(() => (console.log('db connected')))
    .catch((e) => (console.log(e)))
let port = process.env.PORT || 3000

const User = require('./Model/User')

// const cors=require('cors')
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(express.static('static'))
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

const signuprouter = require('./router/signuprouter')
const loginrouter = require('./router/loginrouter')
const guestrouter = require('./router/guestrouter')

app.use('/', loginrouter)
app.use('/signup', signuprouter)
app.use('/guest', guestrouter)

app.listen(port, () => {
    console.log("running in " + port)
})
