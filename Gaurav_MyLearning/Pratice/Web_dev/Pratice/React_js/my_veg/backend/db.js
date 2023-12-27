const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vegapp', {useNewUrlParser: true, useUnifiedTopology: true});


var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("we are connected with mongodb database friend");
});

module.exports=db;