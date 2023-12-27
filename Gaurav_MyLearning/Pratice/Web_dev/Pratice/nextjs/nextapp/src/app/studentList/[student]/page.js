"use client"
export default function Student({params}){
    console.log(params)
    console.log(params.student)
    return(
        <div>
        <h1>Student details of student </h1>
        <h1> Name of student is: {params.student}</h1>
        </div>
    
    )
    }

  