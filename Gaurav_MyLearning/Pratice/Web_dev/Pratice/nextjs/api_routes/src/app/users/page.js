import Link from "next/link";
import '../../../src/style.css';
import DeleteUser from "@/utils/DeleteUser";

async function getUsers(){
    let data= await fetch("http://localhost:3000/api/user");
    data= await data.json();
    return data;
}

export default async function Page(){
    const users= await getUsers();
    console.log(users);
    return(
        <div>
            <h1>User List</h1>
            {
                users.map((item)=>(
                    <div className="user-item">
                       <span> <Link href={`users/${item.id}`}>{item.name}</Link></span>
                        <span> <Link href={`users/${item.id}/update`} >Edit</Link></span>
                        <DeleteUser id={item.id}/>
                    </div>

                ))
                    
                
            }
        </div>
    )
}