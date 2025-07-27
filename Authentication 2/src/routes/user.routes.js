const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')
const userRouter = express.Router()

userRouter.post('/register', async (req, res)=>{
const {username, password} = req.body;

    const user = await userModel.findOne({
        username
    })

    if(user){

        return res.status(409).json({
            messege: "user already exist"
        })
    }

   try{
       const mongoUser =  await userModel.create({
           username,password
        })
        const token =  jwt.sign({username}, process.env.JWT_SECRET)
        res.cookie('token',token)

    res.status(201).json({
    messege : "user registered successfully",
    mongoUser,
    // token: token
   })
   }
   catch(err){
    console.log(err)
    res.send(err)
   }
 
})

userRouter.post('/login',async (req,res)=>{
    const {username , password}= req.body;
    const user = await userModel.findOne({
        username:username
    })
    
    if (!user){
        return res.status(401).json({
            messege:"user not found"
        })
    }
    const isPasswordValid = password == user.password;

    if (!isPasswordValid){
        return res.status(401).json({
            messege:"password not valid"
        })
    }
  const token =   jwt.sign({username: user.username},process.env.JWT_SECRET)
//   console.log(token)
res.cookie('token',token)
    res.status(201).json({
        messege: "user loged in"
    })
})

userRouter.get('/user', async(req, res)=>{
    const {token} = req.cookies
    if(!token){
        return res.status(401).json({
            messege:"Unautorized request token not found"
        })


    }

  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

   const user = await userModel.findOne({
   username: decoded.username
   })
   res.status(201).json({
    messee:"user successfully fetched",
    user,
   })
  }
  catch(err){
    res.status(404).json({
        messege:"bad request"
    })
  }
})

userRouter.get('/logout',(req,res)=>{
    res.clearCookie('token')
    res.status(200).json({
        messege:'user logged out'
    })
})

module.exports= userRouter;