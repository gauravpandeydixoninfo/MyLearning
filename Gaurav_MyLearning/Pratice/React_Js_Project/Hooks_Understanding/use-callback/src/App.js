// import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo, useEffect, useCallback } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  let result = useMemo(() => {
    return (factorial(counter));
  }, [counter]);

  const displayName = useCallback((greeting) => {
    return  greeting + ' ' + name;
  }, [name]);

  return (
    <div className='App'>
      <div >
        <h1>Factorial of {counter} is <span>{result}</span></h1>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr />
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}>
        </input>
        <hr />
        <DisplayName displayName={displayName} />
        {/* <p>{`My name is ${name}`}</p> */}
      </div>
    </div>
  );
}

const DisplayName = (({ displayName }) => {
  const [value, setValue] = useState( );

  useEffect(() => {
    setValue(displayName("hiii"));
    console.log("Display hits");
  }, [displayName]);

  return <p> {`My name is ${value}`}</p>
})

function factorial(n) {
  let i = 0;
  while (i < 200000)
    i++;
  if (n < 0)
    return -1;
  if (n === 0)
    return 1;

  return n * factorial(n - 1);
}
// const DisplayName = React.memo(({name}) => {
//   console.log("name =>", name);
//   return <p>{`My b=name is ${name}`}</p>
// })

export default App;
