"use strict"
const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors())
const axios = require('axios');
const { Mongoose } = require('mongoose');

require('dotenv').config();
app.use(express.json());
let port = process.env.PORT
let mongoUrl = process.env.MONGO_URL
Mongoose.connect(mongoUrl)
// Urls 
app.get('/', () => {
    console.log("hello");
})
app.get('/fruits', allData)
app.get('/getfav', getFav)
app.put('/addtofav', addFav)
app.delete('/deletefav', deleteFav)
app.put('/updatefav', updatefav)

//sckema 
const Schema = mongoose.Schema;
let fruitSchema = new Schema({

    name: {
        type: String
    },
    imgurl: {
        type: String
    },
    price: {
        type: Number
    },
    email: { type: String }
});
var fruitModal = mongoose.model("fruit", fruitSchema);
// functions 
function allData(req, res) {
    axios.get("https://fruit-api-301.herokuapp.com/getFruit").then((result) => {
        res.json(result.data)

    })
}
function getFav(req, res) {
    email = req.query.email
    fruitModal.find({ email }, (err, data) => {
        res.json(data)
    })
}

function deleteFav(req, res) {
    email = req.query.email
    name = req.query.name
    fruitModal.deleteone({ name }).then(
        fruitModal.find({ email }, (err, data) => {
            res.json(data)
        }))
}


function updatefav(req, res) {
    let { name, image, price, email } = req.body
    fruitModal.updateOne({ name: name }, { image: image }, { price: price }).then(
        fruitModal.find({ email }, (err, data) => {
            res.json(data)
        }))
}
function addFav(req, res) {
    let { name, image, price, email } = req.body
    var fruit = { name: name, image: image, price: price, email: email };
    fruitModal.create(fruit)
    fruitModal.save
res.json("all good")
}
    app.listen(process.env.PORT)


