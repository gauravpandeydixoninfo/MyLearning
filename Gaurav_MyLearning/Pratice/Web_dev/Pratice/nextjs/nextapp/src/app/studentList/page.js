"use client"
import Link from "next/link"
export default function StudentList(){
    return(
        <div>
        <h1> This is student list</h1>
        <ul>
            <li> 
                <Link href="/studentList/Gaurav" >Gaurav</Link>
                </li>
            <li> 
                <Link href="/studentList/Pandey">Pandey</Link>
                </li>
            <li>
                 <Link href="/studentList/Dixon">dixon</Link>
                 </li>
            <li>
                <Link href="/studentList/Airtel">Airtel</Link>
             </li>
        </ul>
        </div>
    )
}