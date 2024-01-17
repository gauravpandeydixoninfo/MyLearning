import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";
let getProducts= async ()=>{
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    console.log("gaurav"+data);
    data = await data.json();
    // var data = JSON.stringify(data);
    if(data){
        return data;
    }
    else{
        return {success: false}
    }
}

export default async function Page(){
let products= await getProducts();
// products= await products.json();
console.log("products="+products);
products.result.map((iteam)=>{
    console.log(iteam.name);
})

    return(
        <div>
            <h1>Product List</h1>
            <table border="1" >
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>dep</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products.result.map((item)=>(<tr>
                            <td>{item.name}</td>
                            <td>{item.dep}</td>
                            <td><Link href={"products/"+item._id}>Edit</Link>
                            <DeleteProduct id={item._id} />
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}