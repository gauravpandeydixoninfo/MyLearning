let fs=require("fs");
let http=require("http");
let about=fs.readFileSync("about.html", "utf-8");
let home=fs.readFileSync("home.html", "utf-8");
let contact=fs.readFileSync("contact.html", "utf-8");


let server=http.createServer((req, res)=>{
    let url=req.url;
    res.statusCode=200;
    res.setHeader=('content-type', 'text/html');
    if(url=="/"){
    res.end('Hellow world')
    }
    else if(url=="/home")
    {
        res.end(home);
    }
    else if(url=="/about"){
        res.end(about)
    }
    else if(url=="/contact"){
        res.end(contact);
    }
    else{
        res.end(home);
    }
})
let hostname='127.0.0.1';
let port=3000;
server.listen(port, hostname, ()=>{
console.log("fine");
})