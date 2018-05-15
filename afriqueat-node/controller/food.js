const food = require('../model/food')
const app = require('express')()

app.get('/plats', (req, res) => {
    food.All()

        .then((resolution) => {
            res.send(resolution)
        }).catch((err) => res.send('Une erreur a été commise'))
})


app.post('/plats', (req, res) => {
    console.log(req.body)

    const {
        foodName,
        foodDescription,
        foodPrice,
        foodImage
    } = req.body;

    food.add({
        foodName: foodName,
        foodDescription: foodDescription,
        foodPrice: foodPrice,
        foodImage: foodImage
    }).then((resolution) => {
        res.send(resolution)
    }).catch((err) => res.send(err.message))
})

app.get('/plats/:id', (req, res) => {
    const {id} = req.params;

    food.getby({
            foodId: id
        })

        .then((resolution) => {
            res.send('Un plat a été sélectionné')
        }).catch((err) => res.send('Une erreur a été commise'))
})





module.exports = app