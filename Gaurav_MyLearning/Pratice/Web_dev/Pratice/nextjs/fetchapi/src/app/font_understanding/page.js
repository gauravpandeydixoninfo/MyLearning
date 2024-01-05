
//google font prevent network request and privacy that no one can know what kind of font is used
import { Roboto } from "next/font/google"
const roboto= Roboto({
    weight:"100",
    subsets:['latin'],
    display:'swap'
})
export default function Page(){
    return(
        <div>
            <h1 h1 style={{fontFamily: "Roboto", fontWeight: "100"}}>font understanding</h1>
            <h1> </h1>
            <h1> Normal font</h1>
            <h1 className={roboto.className}>With google font</h1>
        </div>
    )
}