"use client"
import {useEffect, useState} from 'react'
// import '../../../style.css'
import Link from 'next/link';

export default function Page(props){
    const [name, setName]= useState("");
    const [id, setId]= useState("");
    const [dep, setDep]= useState("");
    useEffect(() =>{
        getProductDetail()
    }, []);

    const getProductDetail= async () =>{
        let productId= props.params.editproduct;
        let productData = await fetch("http://localhost:3000/api/products/"+productId);
        productData = await productData.json();
        if(productData.success){
            let result= productData.result;
            setName( result.name);
            setDep(result.dep)
        }
    }

    const updateProduct = async()=>{
        let productId = props.params.editproduct 
        let data = await fetch("http://localhost:3000/api/products/" + productId,{
            method: "PUT",
            body:JSON.stringify({name, dep})

        });
        data= await data.json();
        if(data.result){
            alert("Product has been updated");
        }
        
    }

return(
    <div className='add-user'>
        <h1>update user</h1>
        <input type="text"className="input-field" value={name} placeholder="please add name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" className="input-field" value={dep} placeholder="please add dep" onChange={(e)=>setDep(e.target.value)}/>
        <button className='btn' onClick={updateProduct} >update User</button>
        <Link href="/products">Go to Product List</Link>
    </div>
)
}