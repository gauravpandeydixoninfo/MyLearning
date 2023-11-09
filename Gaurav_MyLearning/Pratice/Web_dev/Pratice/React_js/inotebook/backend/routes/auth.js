const express= require('express');
const router= express.Router();
const User= require('../models/User')
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const JWT_SECRET="gauravisagoodboy"

//Create a User using: POST "/api/auth/createUser" . Doesn't require Auth
router.post('/createUser',

async (req, res)=>{
   let user = await User.findOne({email: req.body.email});
   if(user){
      return res.status(404).json({error: "email alerady in user"})
   }
    try{

   // It will generate a salt
   const salt = bcrypt.genSaltSync(10);
   // const salt= await bcrypt.salt(10);
   console.log(salt);

   //It will generate a hash with the comination of salt and password entered by user
   const secPass = bcrypt.hashSync(req.body.password, salt);
   //  user=User(req.body);
   user= await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email 
   })
   user.save();
   const data= {
      user:{
         id: user.id
      }
   }
   const authToken=jwt.sign(data, JWT_SECRET);
   console.log(authToken);
   const pass=req.body.password;
   const temp=pass.length;
   res.json({authToken});} catch(error){
      console.log("error occured");
      return res.status(404).json({error: "eror occcure"})

   }

})

module.exports= router