const cart = require('../model/cart')
const app = require('express')()

app.post('/command/:foodId', (req, res) => {

    console.log(req.session.user, "cart")
    console.log(req.params.foodId, "foodId")

    cart.add({
            "id_user": req.session.user.userId,
            "id_food": req.params.foodId
        })
        .then((result) => {
            res.send({
                success: result,
            })
        }).catch((err) => {
            console.log(err)
            res.send({
                error: 'Une erreur a été commise'
            })
        })

})

app.get('/command', (req, res) => {
    console.log(req.session.user, "command")

    cart.getby({
            "users.userId": req.session.user.userId
        })
        .then((result) => {
            res.send({
                success: result,
            })
        }).catch((err) => {
            console.log(err)
            res.send({
                error: 'Une erreur a été commise'

            })
        })

})

module.exports = app