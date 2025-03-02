const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const bodyparser=require("body-parser");
var mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost/contactDance', {useNewParser: true})
mongoose.connect('mongodb://localhost/contactDance')
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    desc: String,
    name: String,
});

var Contact = mongoose.model('Contact', contactSchema);
// Contact.find("name")

const port=3001;
//express specific stuff
app.use(express.urlencoded());
app.use('/static', express.static('static')) //for serving static files

//pugg specific stuff
app.set('view engine', 'pug'); //set the template engine to pug
app.set('views', path.join(__dirname, 'views'));  //set the views directory
// Contact.find({"name" : "My Software"}, function(contacts){
//     console.log(contacts);
// });
Contact.find().then((data)=>{
    console.log(data)
})
//Endpoints
app.get('/',(req,res)=>{
    const parms={};
    res.status(200).render('home.pug', parms);
})

app.get('/contact',(req,res)=>{
    const parms={};
    res.status(200).render('contact.pug', parms);
})
app.get('/class_info',(req,res)=>{
    const parms={};
    res.status(200).render('class_info.pug', parms);
})
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This iteam has been saved successfully");
    }).catch(()=>{
        res.status(400).send("Iteam was not saved to the database");
    });
    })
    // const parms={};
    // res.status(200).render('contact.pug', parms);


app.listen(port,()=>{
    console.log(`the application is running on ${port}`);
})
