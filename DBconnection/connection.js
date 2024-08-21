const mongoose = require('mongoose')
 const connectionString = process.env.database
 mongoose.connect(connectionString).then(()=>{
    console.log("mongoDB connected successfully to pfServer");
 }).catch((err)=>{
    console.log(`mongoDB connection failed!! error ${err} `);
 })