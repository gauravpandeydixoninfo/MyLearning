import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(){
    const data=user;
    console.log("api hit");
    // return NextResponse.json({name:"Gaurav", age:"24", city:"delhi"}, {status:201})
    return NextResponse.json(data, {status:200});
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload.name);
    if(!payload.name || !payload.dep || !payload.id)
    {
        return NextResponse.json({result: "required all field"})
    }
    return NextResponse.json({result:"new user created", success: "true"}, {status: 201})
}