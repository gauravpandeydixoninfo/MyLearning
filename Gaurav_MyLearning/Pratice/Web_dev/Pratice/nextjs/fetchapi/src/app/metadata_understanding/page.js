//meta data are the data which tells what is inside the page, it help in search engine optimization, it have tags and attributes like //description , title etc
import React from "react"
export default function Page() {
    return (
        <div>
            <h1>meta deta undestanding</h1>
        </div>
    )
}

//generateMetadata function generate metadata which are used by search engine optimization
export function generateMetadata({params}){
    return{
        title:"medatadata understanding",
        description: "it all abot description"
    }
}