"use client"
import Package_details from "@/app/components/package_details"
import Navbar from "@/app/components/navbar";
import About from "@/app/components/about";
import Data from "@/app/components/data.json";
import { useState, useEffect } from "react";
export default function Home(props) {
    // const [data, setData] = useState(null);
    const [data_number, setData_number] = useState();
    const [head, setHead] = useState();
    const [no_d, setNo_d] = useState();
    const [avg, setAvg] = useState(25);
    const [car_rent, setCar_rent] = useState();
    const [no_person, setNo_person] = useState();
    const [total_cost, setTotal_cost] = useState("see total cost");
    useEffect(() => {
        Data.map((element) => {
            if (props.params.details == element.data_number) {
                setData_number(element.data_number);
                const avg = element.data_number;
                setHead(element.heading);
                setCar_rent(element.car_rent);
                setAvg(element.avg);
                setNo_d(element.no_d);
                setNo_person(element.no_person);
                console.log(element.avg)
                console.log(avg);

            }

        }
        )
    }, []);

    // setData("Gauravji");
    // let {details}=params;
    // console.log(details);
    // console.log(params);

    console.log(props.params.details)
    console.log(Data);
    const heading = "hii";
    // setHeading("hlw");
    const familyhandler = (avg) => {
        console.log("familyhandler is" + props.params.avg)
        return (
            <div className="container">
                <div>No of person {no_person}</div>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }

    const increment = () => {
        setAvg(parseInt(avg) + 4500);
        setNo_person(parseInt(no_person) + 1)
        setTotal_cost("see new cost")

    }

    const decrement = () => {
        if (no_person > 4) {
            setAvg(parseInt(avg) - 4500);
            setNo_person(parseInt(no_person) - 1)
            setTotal_cost("see total cost")
        }
        else {
            alert("Minumun four should be there in family package")
        }

    }

    const inc_d = () => {
        setNo_d(parseInt(no_d) + 1);
        setTotal_cost("see total cost")
    }
    const dec_d = () => {
        if (no_d > 1) {
            setNo_d(parseInt(no_d) - 1);
            setTotal_cost("see total cost")
        }
        else {
            alert("Number of days min should be one")
        }
    }

    const total_amount= ()=>{
        setTotal_cost( avg*no_d);
    }


    return (
        <div>
            <Navbar />
            <div>
                <h1 className="text-3xl font-bold text-center text-orange-700">{head}</h1>
                <div>
                    {data_number == 5 || data_number == 6 ? (
                        <div>
                            {/* {familyhandler()} */}
                            <h1>family handler</h1>
                            <div className="text-3xl font-bold text-center text-orange-700">
                                Avgerage package cost for one day={avg}
                                <div>

                                    <button onClick={increment}>+</button>
                                    {no_person}
                                    <button onClick={decrement}>-</button>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-center text-orange-700">
                                No of days={no_d}
                                <div>

                                    <button onClick={inc_d}>+</button>
                                    {no_d}
                                    <button onClick={dec_d}>-</button>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-center text-orange-700">
                                <div>

                                    <button onClick={total_amount}>{total_cost}</button>
                                    
                                </div>
                            </div>
                        </div>)
                        : (
                            <div>
                                {/* {simplehandler(props.params.avg)} */}
                                <h1 class="text-3xl font-bold text-center text-orange-700">{avg}</h1>
                            </div>)}
                </div>

            </div>

            {/* <About/> */}
            {/* <Package_details/> */}
        </div>
    )
}