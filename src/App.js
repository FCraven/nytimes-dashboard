import React, { Component } from 'react';
import './App.css';
import APITest from './components/APITest'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <APITest />
      </div>
    );
  }
}

export default App;
