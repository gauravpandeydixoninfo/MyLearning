const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
// const saltRounds = 10;

router.post('/createUser',async (req, res)=>{
    console.log(req.body);
    let success= false;
    var salt= bcrypt.genSalt(10);
    console.log("salt==>"+ salt);


    let user= await User.findOne({email: req.body.email})
    if(user){
        return res.status(404).json({success, error:"email already registed"});
    }
    try{
        const salt = bcrypt.genSaltSync(10);
   // const salt= await bcrypt.salt(10);
   console.log(salt);
   const secPass = bcrypt.hashSync(req.body.password, salt);
        //   console.log("pass outside bycryct=="+ pass);
    user= await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email 
    })
    user.save();
    success=true;
    return res.status(200).json({success, response:  "data saved in database"})
}
catch(error){
    return res.status(404).json({success, error:"error occured"});
}

}
)



module.exports = router