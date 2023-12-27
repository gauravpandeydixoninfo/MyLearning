import { NextResponse } from "next/server";

export default function Middleware(request){
    //  if(r equest.nextUrl.pathname!=="/login"){
         return NextResponse.redirect(new URL("/login", request.url))
     }

     export const config={
        matcher:["/about/:path*", "/studentList/:path*"]
     }