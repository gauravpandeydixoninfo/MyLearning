"use client"
import "../../../../../src/style.css"
import {useEffect, useState} from "react"
export default function Page(params){
    let id=params.params.userid;
    const [name, setName]= useState("");
    const [iid, setID]= useState("");
    const [dep, setDep]= useState("");

    useEffect(()=>{
        getUserDetails();
    },[])

    const getUserDetails= async ()=>{
        let data= await fetch("http://localhost:3000/api/user/"+id);
        data= await data.json();
        console.log(data.result[0]);
        console.log(data.result[0].name);
        setName(data.result[0].name);
        setDep(data.result[0].dep);
        setID(data.result[0].id);
    }
        const updateUser = async () =>{
            let result= await fetch("http://localhost:3000/api/user/" + id,{
                method: "PUT",
                body: JSON.stringify({name, id, dep})
            });
            result= await result.json();
            console.log(result);
            if(result.success){
                alert("user information updated")
            }
            else{
                alert("plaese try with valid data");
            }

        }

    

    return(
        <div>
            <h1>Update page</h1>
            <input className="input-field" type="text" value={name} placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
            <input className="input-field" type="text" value={dep} placeholder="Enter dep" onChange={(e)=> setDep(e.target.value)}/>
            <input className="input-field" type="text" value={iid} placeholder="Enter ID" onChange={(e)=> setID(e.target.value)}/>
            <button className="btn" onClick={()=>updateUser()}>Update </button>
        </div>
    )
}