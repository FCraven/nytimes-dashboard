import React, {Component} from 'react'
import './MostPopular.css'

export default class MostPopular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailed: [],
      shared: [],
      viewed: []
    }
  }


  render() {
    return (
      <div id='most-popular-container'>
        <div className="test">HELLO WORLD</div>

      </div>
    )
  }
}




