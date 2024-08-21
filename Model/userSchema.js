const { default: mongoose } = require("mongoose");
const validator = require('validator')
const username = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,`must be at least 3,got (VALUE)`]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    github:{
        type:String,
       
    },
    linkedin:{
        type:String,
      
    },
    profile:{
        type:String,
       
    }
})
module.exports = mongoose.model("users",username)
module.exports.users