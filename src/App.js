import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import APITest from './components/APITest'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import MostPopular from './components/MostPopular'
import { NYTIMES_API_KEY } from './secrets'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       arts: {},
       automobiles: {},
       books: {},
       business: {},
       fashion: {},
       food: {},
       health: {},
       home: {},
       insider: {},
       magazine: {},
       movies: {},
       national: {},
       nyregion: {},
       obituaries: {},
       opinion: {},
       politics: {},
       realestate: {},
       science: {},
       sports:{},
       sundayreview: {},
       technology: {},
       theater: {},
       tmagazine: {},
       travel: {},
       upshot: {},
       world: {}
    }
  }

  async componentDidMount() {
    // const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home','insider','magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater','tmagazine', 'travel','upshot', 'world']

    try{

       const {data} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYTIMES_API_KEY}`)
       this.setState({home : data})

      console.log(`State ---> `, this.state)


      } catch (err) {
        console.log(err)
    }
  }

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
