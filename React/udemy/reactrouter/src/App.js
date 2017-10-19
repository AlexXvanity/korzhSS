import React, { Component } from 'react';
// import {Router, Route} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () =>  <h1>Home</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component = {Home}></Route>
          <Route path="/about" component = {Home}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
