const express = require('express');
const app = express();
app.use(express.json());

const cources = [
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
    let cource = cources.find(c => c.id === parseInt(req.params.id))
    if (!cource){
        res.status(404).send("Invalid Id")
    }
    console.log("course cindex ==>"+ req.params.id);
    console.log("req.body.id = " + req.body.id);
    console.log("req.body.name = " + req.body.name);
    cources[req.params.id - 1].id = parseInt(req.body.id);
    cources[req.params.id - 1].name = req.body.name;
    console.log("Patch is implemented cources = " + cources);
    res.send(cources);
 })

app.delete('/api/cources/:id', (req,res) => {
    const {id} = req.params;
    console.log("id entered" + id);
    res.send('delete working fine');
    const cindex = cources.findIndex((element, pindex) => {
        console.log("element ==> "+ element);
        console.log("element.id ==> "+ element.id + "  element.name ==> "+ element.name);
        console.log("pindex ==> "+ pindex);
        console.log("id which you are trying to match= " + id);
        if (element.id === id) {
            return true
        }
    })
    console.log("course cindex ==>"+ id);
    delete cources[id];
    console.log("after delete cources ==> "+ cources);
})
    /*
    const deleted = cources.find(cources ==> cources.id ===id)
    if (deleted)
    {
        cources= cources.find(cources ==> cources.id !== id) 
        res.send('delete part implemented');
        console.log(" delete part implemented");
    
    }
    else
    {
        res.send('id not matched in database');
        console.log("id not found");
    }
 })
*/

/*app.delete('/api/cources/:id', (req,res) => {
    console.log("Delete is not yet implemented");
    console.log("param " + req.params);
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
    res.send('Delete is not yet implemented');
})
*/

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
    obj = new Object();
    if ( req.body.id) {
        console.log("id available");
        obj.id = req.body.id;
    }
    if ( req.body.name) {
        console.log("name available");
        obj.name = req.body.name;
    }

    console.log(obj);
    cources.push(obj);
    res.send(cources);
});


app.listen(3333, console.log('listening at port 3333 ...'));

