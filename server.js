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
server.get('/',()=>{
    console.log('hi');
})
Mongoose.connect(mongoUrl)
server.listen(port , ()=>{
    console.log(`listen on ${port}`);
})
 

