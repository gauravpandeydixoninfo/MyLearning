"use client"
import { useRouter } from "next/navigation";

const AboutStudent=()=>{
    const router= useRouter();
    return(
        <div>
            <h1> This is about Student</h1>
            <button onClick={()=> router.push("/about/aboutCollege")}> About College</button>
            <button onClick={()=> router.push("/")}>Home page</button>
        </div>

    )
}

export default AboutStudent;