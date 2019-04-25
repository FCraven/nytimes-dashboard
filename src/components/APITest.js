import React, { Component } from 'react'
import { NYTIMES_API_KEY } from '../secrets'
import axios from 'axios'


export default class APITest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      isLoading: false
    }
  }

  async componentDidMount(){
    try {
      this.setState({isLoading: true})
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYTIMES_API_KEY}`)
      console.log(`apiKey ==>`, res.data.results)
      this.setState({
        isLoading: false,
        articles: res.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(`STATE ==>`,this.state)
    const isLoading = this.state.isLoading
    return (
                <div>
          { isLoading ? 'Loading...' :

                  <div>
                      {this.state.articles.map(
                        (article) =>
                          <div  className="card" style={{width: "18em"}}>
                                 <img src={article.multimedia[0] ? article.multimedia[0].url : '' } className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.abstract}.</p>
                                    <button><a href={article.short_url} >Go to the Article</a></button>
                                </div>
                        </div>
                      )}
                      </div>
        }
              </div>
      )
  }
}
