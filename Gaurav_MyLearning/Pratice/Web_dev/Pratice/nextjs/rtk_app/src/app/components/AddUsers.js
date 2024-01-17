"use client"
import {  useDispatch } from "react-redux"
import { addUser } from "../redux/slice";
import { useState } from "react";
import Link from "next/link";
export default function AddUsers(){
    const [name, setName]= useState("");
    const dispatch= useDispatch();
    const userDispatch=()=>{
        dispatch(addUser(name))
    }
    return(<div className="add-user">
        <h3>Add Users</h3>
        <input type="text" placeholder="Add New User" className="add-user-input" onChange={(e)=>setName(e.target.value)} />
        <button onClick={userDispatch} className="add-user-btn">Add User</button>
        <Link href="/removeuser">Remove User</Link>
    </div>)
}
