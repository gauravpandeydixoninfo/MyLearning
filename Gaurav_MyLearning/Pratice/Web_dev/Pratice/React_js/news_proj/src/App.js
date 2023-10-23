// import logo from './logo.svg';
// import './App.css';


import React, { Component } from 'react';
import News from './components/News.js';
import NavBar from './components/NavBar.js';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    );
  }
}


