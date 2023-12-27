import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import createBrowserHistory from 'history/createBrowserHistory';


// const hist = createBrowserHistory({forceRefresh:true});
const Login = (props) => {
  const [namee, setNamee] = useState("");
  console.log("name2 inital value=" + namee);
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  // const history = createBrowserHistory({forceRefresh:true});
  let navigate = useNavigate();
  // let history = createBrowserHistory({forceRefresh:true});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      localStorage.setItem('myUser', json.name1);
      // console.log("login with correct one token = " + json.authToken);
      console.log("name of person by name1=" + json.name1)
      setNamee(json.name1);
      console.log("name2 value after setName2=" + namee);

      navigate("/");

      // props.showAlert("Account login Successfully", "success");
    }
    else {
      // alert("Invalid credentials");
      props.showAlert("Invalid Credentials", "success");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='mt-3'>
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmalfor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} name="password" onChange={onChange} id="password" />
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
