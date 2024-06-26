"use client"

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";




export default function DisplayUsers(){
    const userData= useSelector((data)=>data.users);
    const dispatch=useDispatch();
    return(<div className="display-user">

        <h3>User List</h3>
        {
            userData.map((item)=>(
              <div className="user-item">
               <span>{item.name}</span> 
               <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
               </div>  
            ))
        }
    </div>)
}