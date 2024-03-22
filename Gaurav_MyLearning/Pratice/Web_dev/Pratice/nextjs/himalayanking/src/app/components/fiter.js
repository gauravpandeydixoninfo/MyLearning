import React from 'react';
import Cards from '@/app/components/cards';

export default function Filter_data(){
    const element=[1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="flex flex-wrap">
            {
        element.map((iteam)=>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            {
        <Cards />
            }
            </div>
        
    )
            }
    </div>
    )
}
