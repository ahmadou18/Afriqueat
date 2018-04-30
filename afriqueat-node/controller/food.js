const food = require('../model/food')
const app = require('express')()

app.get('/plats', (req, res)=>{
    food.All()

        .then( (resolution)=> {
            res.send('tous les plats ont étés selectionnés')
        }).catch((err)=> res.send('Une erreur a été commise'))
})


app.post('/plats', (req, res)=>{
    food.add({
        foodName: "Tieb",
        foodDescription: "Meilleur plat du monde",
        foodPrice: "14",
        foodImage: "voici une autre image",
    })

        .then( (resolution)=> {
            res.send('Un plat a été ajouté')
        }).catch((err)=> res.send('Une erreur a été commise'))
})

app.get('/plats/:id', (req, res)=>{
    const { id } = req.params;

    food.getby({
        foodId: id
    })

        .then( (resolution)=> {
            res.send('Un plat a été sélectionné')
        }).catch((err)=> res.send('Une erreur a été commise'))
})





module.exports = app