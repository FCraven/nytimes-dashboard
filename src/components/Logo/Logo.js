import React from 'react'
import './Logo.css'

const Logo =()=> {
    return (
      <div className='logo'>

       <h3> **This app is for demonstration purposes only** </h3>
       <a href='https://developer.nytimes.com/'><h5>Please visit here for more information</h5></a>
        <img  className='times-logo'
              src='https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png'
              alt='The New York Times Logo' />

      </div>
    )
}

export default Logo
