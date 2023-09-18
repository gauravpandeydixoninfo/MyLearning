// // import logo from './logo.svg';

// import './App.css';
// import { useRef, useState, useEffect } from "react";

// function App() {
//   let check=0;
//   const [name, setName] = useState();
//   let inputRef = useRef(null);
//   const [counter, setCounter] = useState(Math.ceil(Math.random() * 100));
//   let previousRandNum = useRef();

//   useEffect(() => {
//     console.log("did it assigned");
//     check=5;
//     previousRandNum.current = counter;
//   }, [counter]);

//   function resetInput() {
//     setName("");
//     inputRef.current.focus();
//   }

//   return (
//     <div className="App">
//       <hr></hr>
//       <input
//         ref={inputRef}
//         type="text"
//         name="name"
//         autoComplete="off"
//         value={name}
//         onChange={
//           (e) => setName(e.target.value)
//         }></input>
//       <button onClick={resetInput}>Reset</button>
//       {/* <input type="reset">  */}
//       <hr></hr>
//       <h1> Random Counter: {counter} </h1>
//       <h2>check={check}</h2>
//       {
//         typeof previousRandNum.current !== "undefined" &&
//         <h2> Previous random number: {previousRandNum.current}check={check} </h2>
//       }
//       <button onClick={() => setCounter(Math.ceil(Math.random() * 100))} >Random Generator</button>
//       <hr></hr>
//     </div>

//   );
// }

// export default App;

import { useRef } from 'react';
function App() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav width="100%">
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav >
      <div>
        <ul>
          <li >
            <img
              src="https://placekitten.com/g/200/200"
              style={{margin:"444px"}}
              
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li >
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              style={{margin:"444px"}}
              ref={secondCatRef}
            />
          </li>
          <li >
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              style={{margin:"444px"}}
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default App;
