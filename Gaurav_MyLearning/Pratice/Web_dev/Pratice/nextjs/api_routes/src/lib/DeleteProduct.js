"use client"
import { useRouter } from "next/navigation";
export default function DeleteProduct(props){
    console.log(props.id);
    const router = useRouter();
    const deleteRecord= async()=>{
        let response = await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"delete"
        });
        response = await response.json();
        if(response.success){
            alert("product deleted successfully")
            router.push("/products")
        }
    }
    return <button onClick={deleteRecord}>Delete</button>
}