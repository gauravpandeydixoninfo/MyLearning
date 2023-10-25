// import logo from './logo.svg';
// import './App.css';


import React, { Component } from 'react';
import News from './components/News.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <Router>
          <Switch>
        <Route exact path='/'><News key="general" pageSize={5} category="general" country="in"/></Route>
        <Route exact path='/Business'><News key="business" pageSize={5} category="business" country="in"/></Route>
        <Route exact path='/Entertainment'><News key="entertainment" pageSize={5} category="entertainment" country="in"/></Route>
        <Route exact path='/Health'><News key="health" pageSize={5} category="health" country="in"/></Route>
        <Route exact path='/Science'><News key="science" pageSize={5} category="science" country="in"/></Route>
        <Route exact path='/Sports'><News key="sports" pageSize={5} category="sports" country="in"/></Route>
        <Route exact path='/Technology'><News key="technology" pageSize={5} category="technology" country="in"/></Route>
        </Switch>
        </Router>
      </div>
    );
  }
}


