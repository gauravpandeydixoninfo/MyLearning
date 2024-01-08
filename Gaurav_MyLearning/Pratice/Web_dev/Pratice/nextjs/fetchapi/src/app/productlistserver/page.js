import Product from "./productprice";

async function  data(){
const data= await fetch("https://dummyjson.com/products");
 const data2= await data.json();
return data2.products;
}

export default async function Page(){
    const data1= await data();
    // console.log(data1);
    return(
        <div>
            <h1>Product List</h1>
            {/* {
                data1.map((iteam)=>{
                    
                      return ( <div><h1>Iteam={iteam.title}</h1>
                      <Product price={iteam.price}/>
                      </div>
                      )
                      
                    
                })
            } */}
        </div>
    )
    

}