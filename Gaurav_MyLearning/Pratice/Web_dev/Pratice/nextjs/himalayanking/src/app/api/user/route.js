import db from "../../components/db";
import gaurav_user from "../../backend/Schema/User_Schema";
import {NextResponse} from "next/server";
import mongoose, { mongo } from "mongoose";
// import mongoose from "mongoose";
export  function GET(request) {
    return NextResponse.json({"name":"gaurav", "age": "29"});
}

export  async function  POST(req, res) {
    // Handle POST request
    
//     mongoose.connect('mongodb://localhost/gaurav_db', {useNewUrlParser: true, useUnifiedTopology: true});
//    var db=mongoose.connection;
//    db.on('error', console.error.bind(console, 'connection error'));
//    db.once('open', function(){
//     console.log("we are connected with mongodb database friend");
// });
    // let dbs=db;
    // dbs;
    // import db from "../../components/db";
    mongoose.connect('mongodb://localhost/gaurav_db', {useNewUrlParser: true, useUnifiedTopology: true});
    const data=  await req.json();
    console.log(data);

     
     try {
        const check=data.email;
        const check1 = await gaurav_user.findOne({ email: check });
        console.log("try is executed");
         await console.log(check1);
        // return NextResponse.json({ message: 'Data received successfully!' });
        if (check1) {
            return NextResponse.json({ message: 'duplicate email id!' });
           
        } else {
          console.log("in else part")
            let user= await gaurav_user.create({
                // let user= New gaurav_user({
                // _id: data._id,
                password: data.password,
                email: data.email
             })
             user.save(); //it is optional above gaurav_user.create automatically save the data in database, no need of it
            console.log("else is also executed");
            return NextResponse.json({ message: 'Data received successfully!' });
          
        // return NextResponse.json( tc.chartHTML());
       
        }
      } catch (error) {
        return NextResponse.json({ message: 'unexpeted happend!' });
      }
    
    // const { data } = req.body;
    // console.log(data)
  
    // Process the POST request data
    // console.log('Received data:', data);
  
    // Assuming you want to store the data in a database or perform some other action
    // You can add your database logic here
  
    // Send a response
    // return NextResponse.json({ message: 'Data received successfully!' });
  }