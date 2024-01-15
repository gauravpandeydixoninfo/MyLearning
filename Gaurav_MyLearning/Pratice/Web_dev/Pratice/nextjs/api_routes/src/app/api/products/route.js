import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db"
import { Product } from "@/lib/model/product";

export async function GET() {
    let data= []
    let success=true;
    try {
        await mongoose.connect(connectionStr);
        data= await Product.find();
       
    } catch (error) {
         data = { result:"error" }
    }
    return NextResponse.json({result: data}, {success})
}

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result, success:true})
}


