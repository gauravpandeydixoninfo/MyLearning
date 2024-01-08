import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({name:"Gaurav", age:"24", city:"delhi"}, {status:201})
}