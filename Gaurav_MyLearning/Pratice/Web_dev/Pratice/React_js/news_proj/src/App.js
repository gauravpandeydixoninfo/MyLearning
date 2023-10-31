// import logo from './logo.svg';
// import './App.css';


import React, { Component } from 'react';
import News from './components/News.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state= {
    progress: 0
  }
  setProgress=(progress) =>{
    this.setState({progress: progress})
  }
  // apiKey=process.env.REACT_APP_NEWS_API;
  apiKey='5a0e740334694b1ea36ba2a1b410c030';
  render() {
    return (
      <div>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        />
        <Router>
          <Switch>
        <Route exact path='/'><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={20} category="general" country="in"/></Route>
        <Route exact path='/Business'><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={20} category="business" country="in"/></Route>
        <Route exact path='/Entertainment'><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={20} category="entertainment" country="in"/></Route>
        <Route exact path='/Health'><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={20} category="health" country="in"/></Route>
        <Route exact path='/Science'><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={20} category="science" country="in"/></Route>
        <Route exact path='/Sports'><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={20} category="sports" country="in"/></Route>
        <Route exact path='/Technology'><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={20} category="technology" country="in"/></Route>
        </Switch>
        </Router>
      </div>
    );
  }
}


