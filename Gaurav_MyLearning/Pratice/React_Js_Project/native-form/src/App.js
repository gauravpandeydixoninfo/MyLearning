// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const initialValue ={username:"", email: "", password:""};
  const [formValues, setFormValues]= useState(initialValue);
  // console.log(formValues);
  // let count= 0;
  function handleChange(e)
  {
    console.log(e.target.value);
    const {name, value} =e.target;
    console.log("name ==>", name);

    setFormValues({...formValues, [name]:value});
    console.log("formValues==>", formValues);
  }


  return (
    <div className='container'>
      <form>
        <h1>Login form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label> Username </label>
            <input 
              type="text"
              name="username"
              placeholder='Full=Gaurav Name=Pandey' 
              value={formValues.username}
              onChange={handleChange}>
            </input>
          </div>

          <div className='field'>
            <label> Email </label>
            <input 
              type="email"
              name="email"
              placeholder='Email ID'
              value={formValues.email}
              onChange={handleChange} >
            </input>
          </div>
          <div className='field'>
            <label> Password </label>
            <input 
              type="password"
              name="password"
              placeholder='password' 
              value={formValues.password} 
              onChange={handleChange}>
            </input>
          </div>
          <button className='fluid ui button green'>Submit</button>
        </div>
      </form>

    </div>
    
  
  );
}

export default App;
