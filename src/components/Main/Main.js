import React, { Component } from 'react'
import { NYTIMES_API_KEY } from '../../secrets'
import axios from 'axios'
import './Main.css'
import MainMenuCard from './MainMenuCard/index'

export default class Main extends Component {
  constructor (props) {
    super (props)

    this.state = {
      topStories:[],
      mainMenuCards:[],
      isLoading: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({isLoading: true})
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYTIMES_API_KEY}`)
      this.setState({
        topStories: res.data.results,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='container-main'>
        <MainMenuCard />

      </div>
    )
  }
}


//implement redux so you can flesh out the skeleton here
//cut finger wide open. cannot code at hospital. fuck.
