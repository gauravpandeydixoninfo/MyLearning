"use client"
export default function Product (props){
    return(
        <button onClick={()=>{
            alert(props.price);
        }}>Check Price</button>)

}