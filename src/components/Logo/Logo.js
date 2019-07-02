import React from 'react'
import './Logo.css'

const Logo =()=> {
    return (
    <header>
      <div className='logo'>
      <div id=''>
       <small> **This app is for demonstration purposes only** </small>
       <a href='https://developer.nytimes.com'>
          <small>Please visit here for more information</small>
        </a>
        </div>
        <img  className='times-logo'
              src='https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png'
              alt='The New York Times Logo' />
      </div>
    </header>
    )
}

export default Logo
