"use client"
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gaurav_db', {useNewUrlParser: true, useUnifiedTopology: true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("we are connected with mongodb database friend");
});
// const userSchema = new mongoose.Schema({
//   firstName: {
//       type: String,
//       required: true
//   },
//   lastName: {
//       type: String,
//       required: true
//   },
//   age: {
//       type: Number,
//       min: 18
//   },
//   email: {
//       type: String,
//       required: true,
//       unique: true
//   },
//   createdAt: {
//       type: Date,
//       default: Date.now
//   }
// });

// // Create a model based on the schema
// const User = mongoose.model('User', userSchema);

// // Usage example:
// const newUser = new User({
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   email: 'john@example.com'
// });

// // Save the document to the database
// newUser.save()
//   .then(savedUser => {
//       console.log('User saved:', savedUser);
//   })
//   .catch(error => {
//       console.error('Error saving user:', error);
//   });
module.exports=db;

// import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost/gaurav_db';
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let client;

//  async function db() {
//   if (!client) {
//     client = new MongoClient(uri, options);
//     await client.connect();
//     console.log("it is connected to dataabse")
//   }
//   return client.db('gaurav_db');
// }

