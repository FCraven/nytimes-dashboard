import React, {Component} from 'react'
import './MostPopular.css'
import axios from 'axios'
import { NYTIMES_API_KEY } from '../../secrets'
import MostViewed from './MostViewed'

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

    } catch (error) {
      console.log(error)
    }
  }


  render() {
    const viewed = this.state.viewed;
    return (
      <div id='most-popular-container'>
        <div id="most-viewed-container">
          <MostViewed viewed={viewed} />
        </div>

      </div>
    )
  }
}




