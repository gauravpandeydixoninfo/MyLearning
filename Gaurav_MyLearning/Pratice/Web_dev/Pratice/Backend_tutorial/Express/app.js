console.log("nodemon is working");
const express= require("express");
const app=express();
const path=require("path");
const port=3000;
const fs = require("fs");
//for serving static file
app.use("/static", express.static('static'));

//set the template engine to pug
app.set('view engine', 'pug');

//set the view directory
app.set("views", path.join(__dirname, `views`));

//for midware as url is html endocoded so we have to use midileware
app.use(express.urlencoded());

//Endpoints
app.get('/', (req, res)=>{
    const cont= "This the best dontent i have seen to study";
    const params= {'title': "Pug understanding", "content": cont};
    res.status(200).render('index.pug', params);

})

// for post request when form is submitted
app.post('/', (req, res)=>{
    console.log(req.body);
    const params={'message':'your form has been successfully submited'};
    res.status(200).render('index.pug');
})


// app.post('/', (req, res)=>{
//     name = req.body.name
//     age = req.body.age
//     gender = req.body.gender
//     address = req.body.address
//     more = req.body.more

//     let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
//     fs.writeFileSync('output.txt', outputToWrite)
//     const params = {'message': 'Your form has been submitted successfully'}
//     res.status(200).render('index.pug', params);

// })

app.listen(port, ()=>
{
    console.log("express is working fine");
})



// //our pug demo end point
// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });


// app.get("/", (req, res)=>{
//     res.status(200).send("Gaurav pandey first express app");
// })

// app.get("/home", (req, res)=>{
//     res.send("Gaurav pandey home section");
// })
// app.post("/home",(req, res)=>{
//     res.status(205).send("This is a post expression");
// })