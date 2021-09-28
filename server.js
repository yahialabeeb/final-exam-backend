'use strict'
const express = require('express');

const server = express();
const cors = require('cors');

const axios = require('axios');
const { Mongoose } = require('mongoose');

require('dotenv').config();


server.use(cors());

server.use(express.json());
let port = process.env.PORT
let mongoUrl = process.env.MONGO_URL
Mongoose.connect(mongoUrl)
// Urls 
server.get('/',()=>{
    <h1>HELLO</h1>
})
server.get('/fruits',allData)


// functions 
function allData (req,res){
axios.get("https://fruit-api-301.herokuapp.com/getFruit").then((result)=>{
    res.json(result.data)
})
}
server.listen(port , ()=>{
    console.log(`listen on ${port}`);
})
 

