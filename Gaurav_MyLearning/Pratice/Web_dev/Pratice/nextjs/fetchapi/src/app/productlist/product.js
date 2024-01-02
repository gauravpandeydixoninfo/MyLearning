"use client"
export default  function Product (props) {
    return(
        <button onClick={()=>alert("price of iteam=>"+ props.price)}>Check Me</button>
    )
} 