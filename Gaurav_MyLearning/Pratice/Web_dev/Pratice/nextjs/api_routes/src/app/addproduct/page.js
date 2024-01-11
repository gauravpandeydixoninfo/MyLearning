"use client"
import { useState } from "react"
import "@/app/addproduct/style.css";

export default function Page(){
    const [name, setName]= useState("");
    const [dep, setDep]= useState("");

    const addProduct= async ()=>{
        console.log(name, dep);
        let result= await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name, dep})

        });
        result = await result.json();
        if(result.success){
            alert("new product added")

        }
    }
    return(
        <div>
            <h1>Add Products</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Add name"/>
            <input type="text" value={dep} onChange={(e)=>setDep(e.target.value)} placeholder="Add dep"/>
            <button onClick={()=> addProduct()}> Add data</button>
        </div>
    )
}



