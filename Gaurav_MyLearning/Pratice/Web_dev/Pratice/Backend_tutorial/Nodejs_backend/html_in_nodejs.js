let fs=require("fs");
let http=require("http");
let check=fs.readFileSync("temp.html", "utf-8");
console.log(check);
const server=http.createServer((req, res)=>
{
res.writeHead(200, {'Content-type':'text/html'} );
res.end(check);
})

server.listen(3000, '127.0.0.1', ()=>{
console.log("server working on port 3000");})
