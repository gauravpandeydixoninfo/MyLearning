import Bageshwar from "../images/bageshwar.jpg"
import Bg2 from "../images/bageshwar2.jpg";
import Bg3 from "../images/bg3.png"
import Image from "next/image"
import Bg4 from "../images/bg4.png"
import Bg5 from "../images/bg5.png";
export default function About() {
    return (
        <div className="d-flex  ">

            <div>
            <h1 className="mt-0" style={{background:"green", color:"white"}}>Welcome to Bageshwar: Your Gateway to Himalayan Adventure</h1>
                <div className="d-flex  " >
                    <Image src={Bg3} style={{width: "35%;", height: "55%;"}} className="p-2 bg-info flex-fill" alt="..." />
                    <Image src={Bg4}  style={{width: "25%;", height: "5%;"}} className="p-2 bg-info flex-fill" alt="..." />
                    <Image src={Bg5} style={{width: "25%;", height: "5%;"}} className="p-2 bg-info flex-fill" alt="..." />
                </div>
                
                <h2 style={{background:"red;", color:"white"}}>Explore the Untouched Beauty of Bageshwar, Uttarakhand </h2>
                <p style={{background:"aqua"}}>Nestled in the lap of the majestic Himalayas, Bageshwar district in Uttarakhand beckons travelers with its serene landscapes, spiritual aura, and thrilling adventures. At [Your Company Name], we are dedicated to curating unforgettable experiences that allow you to immerse yourself in the natural wonders and cultural heritage of this enchanting region.</p>
                <h1 style={{background:"grey", color:"orange"}}><center>Our Services:</center></h1>
                <h2>Tour and Travel Packages</h2>
                <p> Embark on a journey of discovery with our meticulously crafted tour packages. Whether you're a nature enthusiast, a spiritual seeker, or an adventure junkie, we have the perfect itinerary for you. Explore ancient temples, scenic trails, and hidden gems under the expert guidance of our knowledgeable local guides</p>
                <h2>Hotel Accommodations</h2>
                <p>Indulge in comfort and hospitality at our handpicked selection of hotels, resorts, and homestays. From cozy retreats nestled amidst pine forests to luxury accommodations offering panoramic views of the Himalayas, we ensure a memorable stay tailored to your preferences and budget</p>
                <h2>Trekking Adventures</h2>
                <p> Lace up your boots and embark on an exhilarating trekking adventure amidst the pristine wilderness of Bageshwar. Traverse rugged trails, meander through lush valleys, and conquer towering peaks as you experience the raw beauty of the Himalayas up close. Our experienced trek leaders and support staff ensure a safe and rewarding journey for adventurers of all skill levels</p>
                {/* <a href="#" className="stretched-link">Go somewhere</a> */}
            </div>
        </div>
    )
}