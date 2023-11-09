const express= require('express');
const router= express.Router();
const User= require('../models/User')
// const { body, validationResult } = require('express-validator');

//Create a User using: POST "/api/auth/createUser" . Doesn't require Auth
router.post('/createUser',
// [
//    body('name').isLength({min:3}),
//    body('password').isLength({min:5}),
//    body('email').isEmail()
   
// ],
async (req, res)=>{
   let user = await User.findOne({email: req.body.email});
   if(user){
      return res.status(404).json({error: "email alerady in user"})
   }
    try{
   console.log(req.body);
    user=User(req.body);
   user.save();
   const pass=req.body.password;
   const temp=pass.length;
   res.send(pass);} catch(error){
      console.log("error occured");
      return res.status(404).json({error: "eror occcure"})

   }


   // const errors= validationResult(req);
   // if(!errors.isEmpty()){
   //    return res.status(400).json({errors: errors.array()})
   // }
   // User.create({
   //    name: req.body.name,
   //    password: req.body.password,
   //    email: req.body.email,
   // }).then(user=> res.json(user))
   // .then(err=> {console.log(err)
   // res.json({error:'Please enter a unique value for email'})})
   // res.send(req.body);
})

module.exports= router