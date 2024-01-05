"use client"

import {useState} from "react"; 
import change from "../page.module.css";



export default  function Page() {
    const [h3Header, setHeader]=useState({backgroundColor:"gray"})
    
    return (
                   
                        

        <div>
            <h1 style={{backgroundColor: "blue"}}>Productttt List</h1>
            <button onClick={()=>{setHeader({backgroundColor:"yellow"})}}>Check css</button>
            <h3 style={h3Header}>header 3</h3>
            <h3 className={change.class1}>check style by module</h3>
            
        
        </div>
    )

}