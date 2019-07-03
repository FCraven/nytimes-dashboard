import React, {Component} from 'react'
import './MostPopular.css'
import axios from 'axios'
import { NYTIMES_API_KEY } from '../../secrets'

export default class MostPopular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailed: [],
      shared: [],
      viewed: [],
      emailInput: '1',
      sharedInput: '1',
      viewedInput: '1'
    }
  }

  async componentDidMount() {
    try {
      const emailedPeriod = this.state.emailInput
      const sharedPeriod = this.state.sharedInput
      const viewedPeriod = this.state.viewedInput

      const emailedRes = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/${emailedPeriod}.json?api-key=${NYTIMES_API_KEY}`)

      const sharedRes = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${sharedPeriod}.json?api-key=${NYTIMES_API_KEY}`)

      const viewedRes = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/${viewedPeriod}.json?api-key=${NYTIMES_API_KEY}`)

      await this.setState({
        emailed: emailedRes.data,
        shared: sharedRes.data,
        viewed: viewedRes.data
      })

      console.log(`emailed ==>`,this.state.emailed)
      console.group()
      console.log('shared ==>', this.state.shared)
      console.group()
      console.log('viewed ==>',this.state.viewed)
    } catch (error) {
      console.log(error)
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




