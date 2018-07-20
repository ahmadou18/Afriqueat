const food = require('../model/food')
const app = require('express')()

const multer = require('multer')

//stocker l'image

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
});

//init upload

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb)
    }

})

function checkFileType(file, cb) {
    //ext
    const filetypes = /jpeg|jpg|png|gif|svg/;

    //check extension

    const extname = filetypes.test((file.originalname).toLowerCase());

    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true)
    } else {

        console.log("multer nothing ")
    }
}

app.get('/plats', (req, res) => {
    console.log(req.session.user, "coucou")
    food.All()
        .then((resolution) => {
            // console.log(resolution)
            res.send({
                success: resolution,
                user: req.session.user
            })
        }).catch((err) => res.send({
            error: 'Une erreur a été commise'
        }))
})


app.post('/plats', (req, res) => {
    const {
        foodName,
        foodDescription,
        foodPrice,
        foodImage
    } = req.body;



    food.add({
        foodName,
        foodDescription,
        foodPrice,
        foodImage
    }).then((resolution) => {
        res.send({
            success: resolution
        })
    }).catch((err) => {
        console.log(err)
        return res.send({
            error: 'Une erreur a été commise'
        })
    })
})

app.post('/plats/image', upload.single("file"), (req, res) => {

    const foodImage = req.file.path
    // console.log(foodImage)


    res.send({
        success: foodImage
    })

})



app.get('/plats/:id', (req, res) => {
    const {
        id
    } = req.params;

    food.getby({
            foodId: id
        })

        .then((resolution) => {
            res.send({
                success: resolution
            })
        }).catch((err) => res.send({
            error: 'Une erreur a été commise'
        }))
})





module.exports = app