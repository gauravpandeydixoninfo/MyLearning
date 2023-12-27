"use client"
import { useRouter } from "next/navigation";

const loginStudent=()=>{
    const router= useRouter();
    return(
        <div>
            <h1> This is about login Student</h1>
            <button onClick={()=> router.push("/login/loginCollege")}> login College</button>
            <button onClick={()=> router.push("/")}>Home page</button>
        </div>

    )
}

export default loginStudent;