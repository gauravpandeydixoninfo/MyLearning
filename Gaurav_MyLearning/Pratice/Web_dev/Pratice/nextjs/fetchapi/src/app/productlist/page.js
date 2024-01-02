// "use client"
// import { useState, useEffect } from "react"
// export default function Page() {
//     const [product, setProduct] = useState(["hlw" ,"hii"]);
//     const [flag, setFlag]= useState(0);
//     const data= async ()=>{
//         let data1= await fetch("https://dummyjson.com/products");
//          data1= await data1.json();
//         console.log(data1.products);
//         setProduct(data1.products);
//         // console.log("products=>"+product);
//         setFlag(1);
//         console.log("hii setFlag=>"+ flag);

//     }
//     useEffect(()=>{
//         data();
//     }
//     ,[])

//     return (
//         <div>
//             <h1> This is product list</h1>
            //  {
            //     product.map((element)=>{
            //        return <h3>{element.title}</h3>
            //         console.log("map runned");
                    
            //     })
            //     }

//         </div>
//     )
// }


import Product from "./product";
async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function Page() {
    let products = await productList();
    
    return (
                   
                        

        <div>
            <h1>Productttt List</h1>
            
            {
                products.map((element)=>{
                   return <div><h3>{element.title}</h3>
                   <Product price={element.price}/>
                    
                    </div>
                    
                })
                }
        </div>
    )

}