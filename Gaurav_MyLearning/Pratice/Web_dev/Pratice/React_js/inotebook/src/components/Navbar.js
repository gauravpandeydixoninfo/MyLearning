import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import Login from './Login';
const Navbar = (props) => {

// const name2="";
// setName1(name2);


  const navigate = useNavigate();
  const handleLogout= () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('myUser');
    navigate("/login");
  }
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">iNotebook</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="./about">About</a>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex">
              <a className="btn btn-primary mx-1" href="/login" role="button">Login</a>
              <a className="btn btn-primary mx-1" href="/signup" role="button">Signup</a>
            </form>: <button onClick={handleLogout} className="btn btn-primary mx-2">Logout</button>
            }
             {localStorage.getItem('myUser')? <button  className="btn btn-primary"><i className="bi bi-person-check-fill mx-2"></i></button>: ""}
            {/* {localStorage.getItem('myUser')? <button  className="btn btn-primary">{localStorage.getItem('myUser')}</button>: ""} */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
