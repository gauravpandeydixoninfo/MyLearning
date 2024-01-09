"use client"
import {useState} from 'react'
import '../../style.css'

export default function Page(){
    const [name, setName]= useState("");
    const [id, setId]= useState("");
    const [dep, setDep]= useState("");

const addUser= async()=>{
    let response = await fetch("http://localhost:3000/api/user",{
        method:"Post",
        body:JSON.stringify({name,id, dep})
    });
    response = await response.json();
    if(response.success){
        alert("new user added")
    }
    else{
        alert("some error with data please check")
    }
    console.log(response);
}

return(
    <div className='add-user'>
        <h1>Add New User</h1>
        <input type="text"className="input-field" value={name} placeholder="please add name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" className="input-field" value={id} placeholder="please add id" onChange={(e)=>setId(e.target.value)}/>
        <input type="text" className="input-field" value={dep} placeholder="please add dep" onChange={(e)=>setDep(e.target.value)}/>
        <button onClick={addUser} className='btn'>Add User</button>
    </div>
)
}