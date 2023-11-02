const db= require('./db');
const express = require('express')


// connectToMongo();

db;
const app = express()
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('hello gaurav')
// })

// app.get('/api/vi/login', (req, res) => {
//   res.send('hello login')
// })

// app.get('/api/vi/signup', (req, res) => {
//   res.send('hello signup')
// })

app.listen(3001,()=>{
    console.log("app is listening at port 3000")
})