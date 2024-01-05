"use client"
import React from "react";
import Script from "next/script";
//Script tag in nextjs help us to prevent load in browser if we use script tag in layout as old one in metaData than the file will be load 
//by every component to prevent it we use script tag in next it that js file when browser routes to that particular routes.

export default function Page(){
    return(
        <div>
            <h1>script tag understanding</h1>
            <Script
             src="/location.js"
             onLoad={()=>{
                console.log("script understanding runned");
            }
            }
            />


        </div>
    )
}