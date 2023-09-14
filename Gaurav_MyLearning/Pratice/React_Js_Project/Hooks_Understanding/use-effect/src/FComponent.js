import React, { useEffect, useState } from 'react';

function FComponent() {

    const [message, setMessage] = useState("function Component");
    const [time, setTime] = useState(new Date().toString());

    function showDate() {
        setTime(new Date().toString());
    }
    useEffect(() => {
        console.log("Component mounted or update");
        const interval = setInterval(showDate, 1000);
        return() => {
            clearInterval(interval);
        }
    },[time,message]);
    
    const changeMessage = () => {
        let message = "this " + Math.floor((Math.random() * 10) + 1);
        //   let message=toString(i);
        console.log(message);
        let message2 = "this is gaurav";
        let string1;
        string1 = message2 + message;
        console.log(string1);
        setMessage(string1);

    }

    return (
        <div>
            <h1> I am in Function Componet</h1>
            <button onClick={() => setMessage("this " + Math.floor((Math.random() * 10) + 1))}>Change Message</button>
            <button onClick={showDate}> Show Date</button>
            <h2>{message}</h2>
            <div>{time}</div>
        </div>
    );
}

export default FComponent;