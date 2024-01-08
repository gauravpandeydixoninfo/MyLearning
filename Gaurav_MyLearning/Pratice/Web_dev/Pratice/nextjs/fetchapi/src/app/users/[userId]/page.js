import { redirect } from "next/dist/server/api-utils";
import getUsers from "../../../../out/services/getUsers";
export default async function Page(props){
    redirect("/about");
    const getUserList= getUsers();
    const users = await getUserList;
    const currentId= props.params.userId;
    const userData= users[currentId-1];
    
    return(
        <div>
            <h3>User detail Page</h3>
            <h4> Id:{userData.id}</h4>
            <h4> Name:{userData.name}</h4>
            <h4> Website: {userData.website}</h4>
        </div>
    )
}