let fs=require("fs");

// Syncronus or blocking execution ==> It will block further execution and do first that line execution
// Asyncronus or non-blocking execution ==> It will not care whethere execution is performed or not next line exution may happen first, if that execution take time
// let check=fs.readFileSync("del.txt", "utf-8");
// console.log(check);
fs.readFile("del.txt", "utf-8", (err, data)=>
{
    console.log(data);
})
console.log("down line executed first");