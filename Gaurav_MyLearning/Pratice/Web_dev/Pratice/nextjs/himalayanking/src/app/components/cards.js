"use client"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/navigation';
export default function cards(props) {
    const router= useRouter();
    const [heading, setHeading]= useState(props.heading);
    const [image, setImage]= useState(props.image);
    const [avg, setAvg]= useState(props.avg);
    let handleClick=()=>{
        console.log("handle click is working");
        console.log(props.key)
        router.push(`/package_details/${props.key_type}`)
    }

    return (
        <>
            
            
            
            <div className="card d-flex" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                {/* <h1 style={{color: "red"}}>Hello Style!</h1> */}
                
                    <h5 className="card-title">{heading}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h5 className="card-title">{'₹'}{avg}</h5>
                    <a href="#" className="btn btn-primary mr-2" >Book Now</a>
                    <a href="#" className="btn btn-primary" onClick={handleClick}>Details</a>
                </div>
                {/* </div> */}
            </div>
        
            </>
            )
}

// style="width: 18rem;"