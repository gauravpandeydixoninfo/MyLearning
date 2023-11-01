const db= require('./db');
const express = require('express')

// connectToMongo();

db;
const app = express()

app.get('/', (req, res) => {
  res.send('hello gaurav')
})

app.listen(3001,()=>{
    console.log("app is listening at port 3000")
})