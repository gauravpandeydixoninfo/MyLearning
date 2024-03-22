import {NextResponse} from "next/server"
export  function GET(request) {
    return NextResponse.json({"name":"gaurav", "age": "29"});
}

export  async function  POST(req, res) {
    // Handle POST request
    const data=  await req.json();
    // const { data } = req.body;
    console.log(data)
  
    // Process the POST request data
    console.log('Received data:', data);
  
    // Assuming you want to store the data in a database or perform some other action
    // You can add your database logic here
  
    // Send a response
    return NextResponse.json({ message: 'Data received successfully!' });
  }