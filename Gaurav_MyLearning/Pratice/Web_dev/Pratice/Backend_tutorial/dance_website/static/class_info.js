var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/contactDance')
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    desc: String,
    name: String,
});


var Contact = mongoose.model('Contact', contactSchema);
let str="gaurav";
Contact.find().then((data)=>{
    console.log(data);
    // console.log(data);
})
// Contact.find("name");
// document.getElementById("welcome-user").innerHTML = check;

// res.render('class_info', {
//     user: myUser
// });