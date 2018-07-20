const express = require('express')
const cors = require('cors')

const usersController = require('./controller/users')
const foodController = require('./controller/food')
const keys = require('./config/keys')
// const OAuthController = require('./controller/OAuth')
// const passportSetup = require('./config/passport-config')


const expressValidator = ('express-validator')
const session = require('express-session')

const app = express()
app.use('/uploads', express.static('uploads'))

app.use(cors({
    origin: ['http://localhost:8081'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(express.json())
app.use(session({
    secret: keys.expressSession.secret,
    resave: false,
    saveUninitialized: true,
}))
// app.use(OAuthController)
app.use(usersController)
app.use(foodController)



app.listen(8888, function (err) {
    if (err) return console.log(err)
    console.log('connected on port 8888')
});