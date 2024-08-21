const users = require('../Model/userSchema')
const jwt = require('jsonwebtoken')
//register

exports.register =async (req,res)=>{
    console.log('inside register controller function');
    const {username,email,password}=req.body
    // console.log(`${username},${email},${password}`);
   try{
    
    const existUser = await users.findOne({email})
    if(existUser){
        res.status(406).json("already Exist..! please Login")
    }
    else{
        const newUser = new users({
            username,email,password,github:"",linkedin:"",profile:""
        })
    
    await newUser.save()
    res.status(200).json(newUser)
    }
}
    catch(err){
        res.status(401).json(`register api failed , error:${err}`)
    }
    
}

//login

exports.login = async (req,res)=>{
    console.log("inside login function");
    const {email,password}=req.body
    try{
        const existUser = await users.findOne({email,password})
        if(existUser){
            const token = jwt.sign({userId:existUser._id},"secretkey123")
            res.status(200).json({
                existUser,token
            })
        }else{
            res.status(404).json("incorrect password or email")
        }
    }catch(err){
        res.status(401).json('login API Failed, error:',err)
    }
}