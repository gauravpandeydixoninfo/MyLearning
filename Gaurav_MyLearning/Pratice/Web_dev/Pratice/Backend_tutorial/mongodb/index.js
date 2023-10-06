// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.56.112/test', {useNewUrlParser: true, useUnifiedTopology: true});


var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("we are connected with mongodb database friend");
});
// creating a type of template
// const kittySchema = new mongoose.Schema({
//     name: String
//   });

// var harrykitten= new Kitten({ name: 'harryKitty' });
// console.log(harrykitty.name); // 'Silence'

// kittySchema.methods.speak = function () {
//     var greeting = this.name
//     console.log(greeting);
//   }

// harrykitty.save(function (err, harrykitty) {
//     if (err) return console.error(err);
//     harrykitty.speak();
//   });