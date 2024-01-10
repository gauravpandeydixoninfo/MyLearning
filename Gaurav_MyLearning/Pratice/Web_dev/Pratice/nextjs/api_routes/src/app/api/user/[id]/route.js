import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content){
    const data=user.filter((iteam)=>iteam.id==content.params.id);
    console.log("api hit");
    // return NextResponse.json({name:"Gaurav", age:"24", city:"delhi"}, {status:201})
    return NextResponse.json(data.length==0?{result:"no result found", success:false}:{result:data, success:true});
}

export async function PUT(request, content){
    let payload = await request.json();
    // payload.id= content.params.id;
    console.log(payload);
    if(!payload.name || !payload.id || !payload.dep){
        return NextResponse.json({result:"request data is not correct", success: false}, {status: 400})
    }
    return NextResponse.json({result:payload, success:true}, {status:200})

}
export function DELETE(request, content){
    let id = content.params.id;
    if(id){
        return NextResponse.json({result:"User deleted", success: true},{status:200})
    }
    else{
        return NextResponse.json({result:"Internal error, Please try after sometimes", success: false},{status:400})
    }
}