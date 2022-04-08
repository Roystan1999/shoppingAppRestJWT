const userModel=require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
SECRET_KEY ='TECHNOELEVATE'

//registration login
const register= async (req, res, next) =>{
 let   {fname,lname,email,password,role} =req.body
 try{
 const emailExists=await userModel.findOne({email:email})

 if(emailExists){
     res.status(400).json({
         errors:true,
         message:"email already exists",
         data:null

     })
 }
 else{
     const saltrounds=10

    //salt of the password
     const salt =await bcrypt.genSalt(saltrounds)


     //hash password

     const hasdedPassword = await bcrypt.hash(password,salt)

     await userModel.insertMany([
         {  
            fname,
            lname,
            email,
            role,
            password:hasdedPassword
        }
     ])

     res.status(200).json({
         errors:false,
         message:"Registration successful",
         data:null
     })

 }

 }
 catch(err){
     next(err)
 }
}

//login logic

const login=async(req, res, next) =>{
    let {email,password} = req.body

   try{
       const userData=await userModel.findOne({email}).lean()
       if(userData){
           let{fname,lname,role}=userData
           const isPasswordMatch = await bcrypt.compare(password, userData.password)

           if(isPasswordMatch){
               const payload = {fname,lname,role}
               const token =await jwt.sign(payload,SECRET_KEY,{
                   expiresIn:"5h"
               })

               res.status(200).json({
                   errors:false,
                   message:"login successful",
                   data:{
                       fname,
                       role,
                       token
                   }
               })

           }
           else{
               res.status(400).json({
                   errors:true,
                   message:"Invaild password",
                   data:null
               })
           }

       }
       else{
           res.status(400).json({
               error:true,
               message:"user not defined",
               data:null
           })
       }
   } 
   catch(err){
       next(err)
   }
  
} 

module.exports={
    login,
    register
    
}