import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className = "App" >
        <div class="img-div"> 
        <img src={logo} className="App-logo" alt="logo" align = ""/>
        </div>
        <h1 className = "header"> Welcome </h1> 
      </div>
    );
  }
}

export default Dashboard;