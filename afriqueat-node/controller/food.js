const food = require('../model/food')
const app = require('express')()

const multer = require('multer')

//stocker l'image

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename : (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
});

//init upload

const upload = multer({
    storage : storage,
    limits: {fileSize: 10000000},
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
 
     if ( mimetype && extname ) {
         return cb(null, true)
     }else {
 
 
     }
 }

app.get('/plats', (req, res) => {
    food.All()

        .then(( resolution) => {
            res.send({success:resolution})
        }).catch((err) => res.send({error: 'Une erreur a été commise'}))
})


app.post('/plats',upload.single("foodImage"), (req, res) => {
    // console.log(req.file)
    const {
        foodName,
        foodDescription,
        foodPrice,
    } = req.body;

    const foodImage = req.file.path


    food.add({
        foodName,
        foodDescription,
        foodPrice,
        foodImage
    }).then(( resolution) => {
        res.send({success:resolution})
    }).catch((err) => res.send({error: 'Une erreur a été commise'}))
})

app.get('/plats/:id', (req, res) => {
    const {id} = req.params;

    food.getby({
            foodId: id
        })

        .then(( resolution) => {
            res.send({success:resolution})
        }).catch((err) => res.send({error: 'Une erreur a été commise'}))
})





module.exports = app