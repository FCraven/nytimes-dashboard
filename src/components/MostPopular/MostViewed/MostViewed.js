import React from 'react'
import './MostViewed.css'
import MostCard from '../MostCard'

const MostViewed =(props)=> {
  return(
    <div id='most-viewed-container'>
      <MostCard info={props.viewed.results}/>
    </div>
  )
}

//create a card to map out in the 'MOST' section

export default MostViewed;
