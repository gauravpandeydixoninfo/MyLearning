// const mongoose = require('mongoose');
// // const mongoURI= "mongodb://localhost:27017/?readPrefrence=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// const mongoURI="mongodb://127.0.0.1:27017/";
// const connectToMongo= ()=>{
//     mongoose.connect(mongoURI,()=>{
//     console.log("connected to Mongo Successfully");
// })
// }
// module.exports= connectToMongo;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});


var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("we are connected with mongodb database friend");
});

module.exports=db;