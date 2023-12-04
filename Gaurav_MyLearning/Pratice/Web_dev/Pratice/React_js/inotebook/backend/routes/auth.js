const express= require('express');
const router= express.Router();
const User= require('../models/User');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const JWT_SECRET="gauravisagoodboy";
const fetchuser = require("../middleware/fetchUser");

//Route 1: Create a User using: POST "/api/auth/createUser" . Doesn't require Auth
router.post('/createUser',

async (req, res)=>{
   let success = false; 
      let user = await User.findOne({email: req.body.email});
   if(user){
      return res.status(404).json({success, error: "email alerady in user"})
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
   success= true;
   res.json({ success, authToken});} catch(error){
      console.log("error occured");
      return res.status(404).json({error: "eror occcure"})

   }

})

//Route 2: Authenticate a User using: POST "/api/auth/login" 

router.post('/login',

async (req, res)=>{
   let success= false;
   const {email, password}= req.body;
   try{
      let user= await User.findOne({email});
      if(!user){
         return res.status(404).json({error: "Please try to login with correct Credentials"});

      }
      const passwordCompare= await bcrypt.compare(password, user.password);
      if(!passwordCompare){
         success= false
         return res.status(404).json({error: "Please try to login with correct Credentials"});
      }
      const data= {
         user:{
            id: user.id
         }
      }
      const authToken=jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authToken})
   }catch(error) {
      console.log("error occured");
      return res.status(404).json({success, error: "eror occcure"})
   }

})


//Route 3: get loggedin User Details using : POST "/api/auth/getuser". login required
// here fetchuser is a middleware
router.post('/getuser',  
fetchuser, 
 async (req, res) => {

try {
   userId =req.user.id;
   const user = await User.findById(userId).select("-password")
   res.send(user);
   
   
} catch (error) {
   
   console.error(error.message);
   res.status(500).send("Internal server error");
}
})

module.exports= router