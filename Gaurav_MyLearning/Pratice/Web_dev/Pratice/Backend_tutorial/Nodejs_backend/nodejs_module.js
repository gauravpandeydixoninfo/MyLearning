console.log("node js working fine")
fs=require("fs");
let text=fs.readFileSync("del.txt", "utf-8");
console.log(text);
let text1=text.replace("content", "nothing");
console.log(text1);
let check=fs.writeFileSync("gaurav.txt", text1);
console.log(check);