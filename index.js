//load .rnv filr contents into pprocrss .env by default

require('dotenv').config()
const express = require('express')
const cors = require("cors")
const router = require('./Route/router')
require('./DBconnection/connection')
//create anapplication express
const pfServer = express()
//
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project fair started port ${PORT}.. and waiting for the client request`);
})

pfServer.get('/',(req,res)=>{
    res.send('<h1>Project Fair server is running on port and waiting for client request</h1>')
})

