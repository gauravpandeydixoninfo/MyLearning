// import Image from 'next/image'
// import styles from './page.module.css'
"use client"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter();
  return (
  <div>
    <div>This is Home1 page</div>
    <button onClick={()=> router.push("/login")}>Go to login</button>
    <button onClick={()=> router.push("/about")}>Go to about</button>
    <button onClick={()=> router.push("/about/aboutCollege")}>Go to college</button>
    <button onClick={()=> router.push("/about/aboutStudent")}>Go to student</button>

  </div>

  )
}
