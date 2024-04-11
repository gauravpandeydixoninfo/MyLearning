"use client"
export default function Student({params}){
    // let {details}=params;
    // console.log("data==>"+ details)
    console.log("hii"+params.details)
    return(
        <div>
        <h1>Student details of student </h1>
        <h1> Name of student is: {params.details}</h1>
        </div>
    
    )
    }

  