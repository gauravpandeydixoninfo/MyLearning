import React from "react";
import Link from "next/link";
import getUsers from "../../../services/getUsers";
import { redirect } from "next/navigation";
export default async function Page(){
    redirect("/");
    const getUserList= getUsers();
    const users= await getUserList;
    // console.log(users);
    // return(
    //     <div>
    //         <h1>User List</h1>
    //         {
    //             users.map((user)=>{
    //                return( <h2>
    //                 <Link href={`/users/${user.id}`}>{user.name}</Link>
    //                 </h2>)
    //             }
    //             )
    //         }
    //     </div>
    // )


    return (
                 <div>
                    <h1> This is product list</h1>
                      {
                        users.map((element)=>{
                           return <h3>{element.id}</h3>
                            console.log("map runned");
                            
                        })
                        }
        
                </div>
            )
}