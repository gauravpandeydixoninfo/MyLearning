"use client"
import Link from "next/link";
import {useRouter} from "next/navigation";
const Login = () => {
   
    const router= useRouter();
    const function1=()=>{
        router.push("/about")

    }
    return (
        <div>
            <h1>This is login</h1>
            <Link href="/">check</Link>
            <button onClick={()=>router.push("/")}>This is button to returen to home page</button>
            <button onClick={()=>function1()}>This is button to returen to home page</button>
        </div>
    );
}
export default Login;