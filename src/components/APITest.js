import React, { Component } from 'react'
import {NYTIMES_API_KEY} from '../secrets'
import axios from 'axios'


export default class APITest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  async componentDidMount(){
    try {
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${NYTIMES_API_KEY}`)
      console.log(`apiKey ==>`,res)
    } catch (error) {
      console.log(error)
    }

  }

  render() {
    return (
      <div>
        {this.state.articles}
      </div>
    )
  }
}
