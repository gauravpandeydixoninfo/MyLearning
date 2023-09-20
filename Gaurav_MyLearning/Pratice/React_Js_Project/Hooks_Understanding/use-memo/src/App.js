import './App.css';
import React, { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  let result = useMemo(() => {
    return (factorial(counter));
  }, [counter]);

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
        <input type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}>
        </input>
        <hr />
        <DisplayName name={name} />
        {/* <p>{`My name is ${name}`}</p> */}

      </div>

    </div>



  );
}
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
const DisplayName = React.memo(({ name }) => {
  console.log("name =>", name);
  return <p>{`My b=name is ${name}`}</p>
})

export default App;
