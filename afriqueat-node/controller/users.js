const users = require('../model/users')
const app = require('express')()

app.get('/user', (req, res) => {
    users.All()
        .then((resolution) => {
            res.send('tous les utilisateurs ont étés selectionnés')
        }).catch((err) => res.send('Une erreur a été commise'))
})


// app.get('/user/:id', (req, res)=>{
//     const { id } = req.params;

//     users.getby({
//         userId: id
//     })

// .then( (result)=> {
//             res.json('un utilisateur à été sélectionné')
//         }).catch((err)=> res.json('Une erreur a été commise'))
// })

app.post('/register', (req, res) => {

    const {
        firstname,
        lastname,
        email,
        password
    } = req.body;

    users.add({
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
        })

        .then((result) => {
            if (result.length > 0) {
                res.json('Un utilisateur a été ajouté')
                console.log(result)
            } else {
                res.json('PAS CONNECTE')
            }
        }).catch((err) => res.json('Une erreur a été commise'))

})

app.post('/login', (req, res) => {
    //console.log('session ' + JSON.stringify(req.session))
    const {
        firstName,
        email,
        password
    } = req.body;

    users.getby({
            email: email,
            password: password
        })
        .then((result) => {
            console.log({
                result
            })
            if (result.length > 0) {
                req.session.user = result[0]
                console.log('connecté: ' + JSON.stringify(req.session.user))
                res.send({
                    display: 'Bienvenue ' + result[0].firstName
                })
            } else {
                res.json('PAS CONNECTE')
            }
        })
        .catch((err) => res.json('Une erreur a été commise'))
})

app.get('/usercurrent', (req, res) => {
    res.json(req.session.user)
})

module.exports = app