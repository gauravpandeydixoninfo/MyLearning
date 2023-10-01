console.log("expoted modjs");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        // console.log(arr.length);
        sum+=element;
        });
        // console.log("arr length=" + arr.lenth);
        // console.log("sum=" + sum)
        return sum/arr.length;

}
module.exports = {
    name: "Gaurav",
    avg: average,
    repo: "Github"    
}