import React from "react";

async function  data1(){
let data2= await fetch("https://dummyjson.com/users");
data2= await data2.json();
return data2.users;
}
export default  async function Page(){
    let data= await data1();
    // console.log(data);
    return(
        <div>
            <h1>Loader Understanding</h1>
            {/* {
                data.map((iteam)=>
                {
                return    <h2>Name: {iteam.firstName}</h2>
                })
            } */}
        </div>
    )
}