import React, { Component } from 'react'
import axios from 'axios'
import './Main.css'

export default class Main extends Component {
  constructor (props) {
    super (props)

    this.state = {
      articles:[],
      isLoading: false
    }
  }

  render() {
    return (
      <div className='container-main'>
        <h1> Hello World from the Main Component </h1>
      </div>
    )
  }
}


//implement redux so you can flesh out the skeleton here
