// import logo from './logo.svg';
import './App.css';
import  FComponent from './FComponent';
import CComponent from './CComponent';
import React, { useState } from 'react';

function App() {
  const [flag, setFlag] = useState("true");
  // const toggleButton = () => {
  //   setFlag(!flag);
  // }


  return (
    <div className="App">
      <hr />
      <div className="container"><h1>Hello, This is App Component</h1></div>
      <div className="container">
        <button onClick={() => setFlag(!flag)} > Toggle The Component</button>
        <hr></hr>
        {flag ? <CComponent /> : <FComponent />}



      </div>
    </div>
  );
}

export default App;
