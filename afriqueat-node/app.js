const express = require('express')
const cors = require('cors')
const usersContoller = require('./controller/users')
const foodContoller = require('./controller/food')

const app = express()

app.use(cors())
app.use(express.json())

app.use(usersContoller)
app.use(foodContoller)



app.listen(8888, function (err) {
    if(err) return console.log(err)
    console.log('connected on port 8888')
});
