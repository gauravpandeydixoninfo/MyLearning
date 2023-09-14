// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // let data1 = "gaurav";
  const [name, setName] = useState("gaurav");
  const [names, setNames] = useState([]);
  const [flag, setFlag] = useState(false);
  const [counter, setCounter] = useState(0);

  function changename() {
    console.log("button clicked and function1 call");
    // data1="Pandey";
    // console.log("e.target==>", e.target())
    setName("pandey");
    setFlag(!flag);
    return;
  }
  function increment() {
    setCounter((previouus) => previouus + 1);
    setCounter(previous => previous + 1);

  }
  function decrement() {
    setCounter(counter - 1);
  }
  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name: name }]);
    console.log(names);
    function checkvalue1(e) {
      console.log(e);
    };

  }

  function new_input_box(e) {
    console.log("e => ", e);
  }


  return (
    <div className='App'>
      <h1> this is {flag ? name : "no name"} </h1>
      <br />
      <button onClick={changename} >click me</button>
      <br />
      <hr />
      <button onClick={increment} > +</button>
      <div>{counter}</div>
      <button onClick={decrement} > - </button>
      <hr></hr>
      <form onSubmit={addNames}>
        Enter names:
        <input
          type="text"
          name="name"
          placeholder='add names'
          onChange={e => setName(e.target.value)}
        >
        </input>
        <input
          type="text"
          name="name1"
          placeholder='add names'
          onChange={new_input_box}
        >
        </input>
        <div>
          <button>submit</button>
        </div>
      </form>
      <hr></hr>
      <ul>
        {names.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>);

}
export default App;
