import React from 'react'
import './MostCard.css'

const MostCard =(props)=> {


const { info =  [] } = props


console.log(`props.info -->`,info)
  return (
    <div className="most-card">
      <div className="most-card-image">
        <img alt='a card representing a piece of news'src='...'/>
      </div>
      <div className="most-card-text"></div>
    </div>
  )
}

export default MostCard
