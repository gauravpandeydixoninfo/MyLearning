"use client"
import { useRouter } from "next/navigation";

const LoginCollege=()=>{
    const router= useRouter();
    return(
        <div>
            <h1> This is login College</h1>
            <button onClick={()=> router.push("/login/loginStudent")}> About Login Student</button>
            <button onClick={()=> router.push("/")}>Home page</button>
        </div>

    )
}

export default LoginCollege;