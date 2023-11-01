// import logo from './logo.svg';
// import './App.css';


import React, { Component, useState } from 'react';
import News from './components/News.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const [progress, setprogess] = useState(0);

  const setProgress=(progress) =>{
    setprogess({progress})
  }
  // apiKey=process.env.REACT_APP_NEWS_API;
  const apiKey='5a0e740334694b1ea36ba2a1b410c030';

    return (
      <div>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        />
        <Router>
          <Switch>
        <Route exact path='/'><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={20} category="general" country="in"/></Route>
        <Route exact path='/Business'><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={20} category="business" country="in"/></Route>
        <Route exact path='/Entertainment'><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={20} category="entertainment" country="in"/></Route>
        <Route exact path='/Health'><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={20} category="health" country="in"/></Route>
        <Route exact path='/Science'><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={20} category="science" country="in"/></Route>
        <Route exact path='/Sports'><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={20} category="sports" country="in"/></Route>
        <Route exact path='/Technology'><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={20} category="technology" country="in"/></Route>
        </Switch>
        </Router>
      </div>
    );
  }
export default App;


