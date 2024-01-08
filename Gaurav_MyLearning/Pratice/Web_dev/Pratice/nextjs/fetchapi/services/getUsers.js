export default async function  getUsers(){
    let data= await fetch("https://dummyjson.com/users");
    console.log( data);
    return data.json();
}