// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});


var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function(){
//     console.log("we are connected with mongodb database friend");
// });
// creating a type of template
const gauravSchema = new mongoose.Schema({
    name: String
  });
gauravSchema.methods.speak = function () {
    var greeting = " My name is "+ this.name ;
    console.log(greeting);

}
  var Contact = mongoose.model('Contact', gauravSchema);

var gauravkitten= new Contact({ name: 'uttarakhandSchema' });
// gauravkitten.save(function(err, gauravkitten){
//     if(err) return console.error(err);
//     gauravkitten.speak(gauravkitten);
// })
Contact.find().then((contacts)=>{
    console.log(contacts)
})
// gauravkitten.speak();
// gauravkitten.save(function (err, gauravkitten){
//     // if(err) return console.error(err);
//     gauravkitten.speak();
// });
// let m=Contact.find({name:"uttarakhandSchema"}, Contact);
// console.log(m);
// gauravkitten.save(function(err, obj){
//     if(err) return console.error(err);
//     gauravkitten.speak(obj);
// })
// Contact.find( {name: "uttarakhandSchema"}, function (err, contacts) {
//     if (err) return console.err(err);
//     console.log(contacts);
// })
// Contact.find( {name: "uttarakhandSchema"}, contacts {
//     // if (err) return console.err(err);
//     console.log(contacts);
// })
// console.log(gauravkitten.name); // 'Silence'
// gauravkitten.save();
// var check=model.find();
// console.log(Contact.find());
// let check1=Contacts.find();
// console.log(check1);
// kittySchema.methods.speak = function () {
//     var greeting = this.name
//     console.log(greeting);
//   }


// harrykitty.save(function (err, harrykitty) {
//     if (err) return console.error(err);
//     harrykitty.speak();
//   });