import React, { Component } from 'react';
import './App.css';
import APITest from './components/APITest'
import Logo from './components/Logo'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navbar />
        <APITest />
      </div>
    );
  }
}

export default App;
