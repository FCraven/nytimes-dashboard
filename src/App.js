import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import APITest from './components/APITest'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import MostPopular from './components/MostPopular'
import { NYTIMES_API_KEY } from './secrets'

class App extends Component {
  render() {
    return (

          <div id="App">
              <Sidebar />
              <Main />
              <MostPopular />
          </div>

    );
  }
}

export default App;
