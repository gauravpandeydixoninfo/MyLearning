import React from 'react';
import Cards from '@/app/components/cards';
import data from "@/app/components/data.json";

export default function Filter_data() {
    const element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    data;
    console.log(data);
    return (
        <div className="flex flex-wrap">
            {
                data.map((iteam) =>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                        {
                            <Cards heading={iteam.heading} image={iteam.img} avg={iteam.avg} car_rent={iteam.car_rent} key_type={iteam.data_number} no_d={iteam.no_d} no_person={iteam.no_person}  />
                        }
                    </div>

                )
            }
        </div>
    )
}
