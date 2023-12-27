"use client"
import { useRouter } from "next/navigation";

const AboutCollege=()=>{
    const router= useRouter();
    return(
        <div>
            <h1> This is about College</h1>
            <button onClick={()=> router.push("/about/aboutStudent")}> About Student</button>
            <button onClick={()=> router.push("/")}>Home page</button>
        </div>

    )
}

export default AboutCollege;