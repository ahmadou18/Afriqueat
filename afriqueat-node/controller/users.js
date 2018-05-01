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

.then( (result)=> {
            res.json('un utilisateur à été sélectionné')
        }).catch((err)=> res.json('Une erreur a été commise'))
})

app.post('/user', (req, res)=>{
    const { firstname, lastname, email, password } = req.body;

    users.add({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
    })

    .then( (result)=> {
        res.json('Un utilisateur a été ajouté')
    }).catch((err)=> res.json('Une erreur a été commise'))
})



module.exports = app