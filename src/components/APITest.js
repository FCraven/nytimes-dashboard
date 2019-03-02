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
      console.log(`apiKey ==>`,res.data.results)
      this.setState({
        articles: res.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(`STATE ==>`,this.state)
    return (
                <div>
                      {this.state.articles.map(
                        (article) =>
                          <div class="card" style={{width: "18rem"}}>
                                 <img src={article.multimedia[3].url} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{article.title}</h5>
                                    <p class="card-text">{article.abstract}.</p>
                                    <a href={article.short_url} class="btn btn-primary">Go to the Article</a>
                                </div>
                        </div>
                      )}
              </div>
      )
  }
}
