import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode = ()=>{
    if(mode==="dark"){
      console.log("dark mode");
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled", "Success")
    }
    else{
      console.log("light mode");
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "Success")
    }

  } 
    return (
    <>
      <Navbar title="gauravutils" textAbout="AboutUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="this is heading" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
