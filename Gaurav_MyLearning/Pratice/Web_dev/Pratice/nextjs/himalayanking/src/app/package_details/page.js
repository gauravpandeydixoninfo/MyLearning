import Filter_data from "../components/fiter";
import Navbar from "@/app/components/navbar";
export default function Home(){
    return(
        <div>
            <Navbar/>
            <Filter_data/>
            {/* <Navbar/> */}
        </div>
    )
}