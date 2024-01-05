import Image from "next/image";
import Profile from "../../../public/next.svg"

export default function Page(){
    return(
        <div>
        <h1>Image tag understanding</h1>
        <Image src={Profile} width="500" height="500"/>
        <img src={Profile.src}/>
        <Image src="https://www.istockphoto.com/photo/open-arms-celebration-and-business-man-in-a-city-happy-excited-and-winner-on-urban-gm1502317574-522662243?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&utm_medium=affiliate&utm_source=unsplash&utm_term=random%3A%3A%3A"  width="500" height="500"/>
        </div>
    )
}