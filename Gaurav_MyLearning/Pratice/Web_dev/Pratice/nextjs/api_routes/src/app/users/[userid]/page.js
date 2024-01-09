async function getUser(id){
    let data= await fetch(`http://localhost:3000/api/user/${id}`);
    data= await data.json();
    return data.result;
}

export default async function Page({params}){
    const user= await getUser(params.userid)
    console.log(user);
    return(<div>
        <h2> User Details</h2>
        <h4>Name:{user[0].name}</h4>
       
        <h4> dep: {user[0].dep}</h4>
        <h4> id: {user[0].id}</h4>

    </div>)
}