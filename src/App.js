import React, { Component } from 'react';
import './App.css';
// import APITest from './components/APITest'
import Logo from './components/Logo'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (

          <div className="App">
              <Sidebar />
              <div id='header-main'>
                <Logo />
                <Main />
            </div>
          </div>

    );
  }
}

export default App;
