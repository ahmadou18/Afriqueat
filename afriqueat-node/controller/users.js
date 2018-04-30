const users = require('../model/users')
const app = require('express')()

app.get('/user', (req, res)=>{
    users.All()

        .then( (resolution)=> {
            res.send('tous les utilisateurs ont étés selectionnés')
        }).catch((err)=> res.send('Une erreur a été commise'))
})


app.get('/user/:id', (req, res)=>{
    const { id } = req.params;

    users.getby({
        userId: id
    })

.then( (resolution)=> {
            res.send('un utilisateur à été sélectionné')
        }).catch((err)=> res.send('Une erreur a été commise'))
})

app.post('/user', (req, res)=>{
    users.add({
        firstName: "Maxime",
        lastName: "Balme",
        email: "maxime@balme.com",
        password: "maxime",
    })

        console.log("ok")
    .then( (resolution)=> {
        res.send('Un utilisateur a été ajouté')
    }).catch((err)=> res.send('Une erreur a été commise'))
})



module.exports = app