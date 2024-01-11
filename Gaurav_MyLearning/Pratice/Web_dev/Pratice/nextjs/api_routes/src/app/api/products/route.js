import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db"
import { Product } from "@/lib/model/product";

export async function GET() {
    let data= []
    // console.log("connectionStr="+ connectionStr);
    try {
        await mongoose.connect(connectionStr);
        data= await Product.find();
        // const mongoose = require("mongoose");
        // return NextResponse.json({result:"Success"})
        //  mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
        // var db = mongoose.connection;
        // db.on('error', console.error.bind(console, 'connection error'));
        // db.once('open', function () {
            // console.log("we are connected with mongodb database friend");
        // });
        // data = await Product.find();
    } catch (error) {
         data = { success: false }
    }
    return NextResponse.json({ result: data })
}

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result, success:true})
}