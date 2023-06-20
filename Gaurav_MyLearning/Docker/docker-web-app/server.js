const express = require('express');
const app = express();
app.use(express.json());

var cources = [
    {id : 1,  name : 'physics'},
    {id : 2,  name : 'chemistry'},
    {id : 3,  name : 'math'}
];

app.get('/' , (req, res) => {
    console.log("response back to client");
    
    res.send('hello world');
})

app.get('/api/cources', (req,res) => {
    console.log("books sent to client");
    res.send( cources);
})
app.put('/api/cources', (req,res) => {
    console.log("Put is not yet implemented");
     res.send('Put is not yet implemented');
 })

app.patch('/api/cources/:id', (req, res) => {
    let index = cources.findIndex(c => c.id === parseInt(req.params.id))
    if (!index){
        res.status(404).send("Invalid Id")
    }
    console.log("course cindex ==>"+ index);
    console.log("req.body.id = " + req.body.id);
    console.log("req.body.name = " + req.body.name);
    cources[req.params.id - 1].id = parseInt(req.body.id);
    cources[req.params.id - 1].name = req.body.name;
    console.log("Patch is implemented cources = " + cources);
    res.send(cources);
 })

app.delete('/api/cources/:id', (req,res) => {
    let index = cources.findIndex(c => c.id === parseInt(req.params.id))
    if (!index){
        res.status(404).send("Invalid Id")
    }
    console.log("course cindex ==>"+ index);
    cources.splice(index, 1);
    console.log("Delete is implemented cources = " + cources);
    res.send(cources);
})

app.get('/api/cources/gaurav', (req,res) => {
        console.log("message send by gaurav");
        res.send( 'gaurav pandey');
})
    

app.get('/api/cources/:id', (req,res) => {
    console.log("book with id sent to client");
    const cource = cources.find( c => c.id === parseInt(req.params.id) )
    if (!cource) res.status(404).send("not found")
    res.send(cource)
})


app.get('/api/cources/:id/search/?', (req,res) => {
    console.log(req.params);
    console.log("path "+req.path);
    console.log('query ' + req.query);
    console.log('baseUrl ' + req.baseUrl);
    console.log('headers ' + req.headers);
    console.log('hostname ' + req.quehostnamery);
    console.log('httpVersion ' + req.httpVersion);
    console.log('httpVersionMajor ' + req.httpVersionMajor);
    console.log('httpVersionMinor ' + req.httpVersionMinor);
    console.log('ip ' + req.ip);
    console.log('ips ' + req.ips);
    console.log('originalUrlreq ' + req.originalUrlreq);

    for ( key in req.query)
    {
        console.log(key, req.query[key]);
    }
    res.send('abc');
})

app.post('/api/cources/', (req, res) => {
    console.log("indside post API");
    console.log(req.body);
    console.log("req.body.length=", req.body.length)
    // console.log("req.body[0].id=", req.body[0].id)
    let cource_length=cources.length;
    let req_length= req.body.length;
    if(req.body.length)
    {
        for(let i= 0; i< req_length; i++)
        {

            obj = new Object();
            if ( req.body[i].id) 
            {
                console.log("id available");
                // console.log("req.body[i].name", req.body[i].name);
                obj.id = req.body[i].id;
            }   
            if ( req.body[i].name) 
            {
                console.log("name available");
                obj.name = req.body[i].name;
            }   

            console.log(obj);
            cources.push(obj);
            //res.send(cources);
        }   
        res.send(cources);
    }   
    else
    {
        obj1 = new Object();
        if (req.body.id) 
        {
            console.log("id available");
            // console.log("req.body[i].name", req.body[i].name);
            obj1.id = req.body.id;
        }
        if (req.body.name) 
        {
            console.log("name available");
            obj1.name = req.body.name;
        }
        console.log(obj1);
        cources.push(obj1);
        res.send(cources);
    }
});


app.listen(3333, console.log('listening at port 3333 ...'));

