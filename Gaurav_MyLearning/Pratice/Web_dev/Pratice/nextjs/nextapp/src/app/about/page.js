'use client'

import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1>This is about</h1>
            <button onClick={()=>router.push("/")}>On Home</button>
        </div>
    );
}
export default About;