import React, { Component } from 'react';
import './App.css';
import APITest from './components/APITest'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <APITest />
      </div>
    );
  }
}

export default App;
