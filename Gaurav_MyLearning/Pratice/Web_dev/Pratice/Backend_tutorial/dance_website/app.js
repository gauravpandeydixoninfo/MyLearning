const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=3000;
//express specific stuff
app.use(express.urlencoded());
app.use('/static', express.static('static')) //for serving static files

//pugg specific stuff
app.set('view engine', 'pug'); //set the template engine to pug
app.set('views', path.join(__dirname, 'views'));  //set the views directory

//Endpoints
app.get('/',(req,res)=>{
    const parms={};
    res.status(200).render('index.pug', parms);
})

app.listen(port,()=>{
    console.log(`the application is running on ${port}`);
})
