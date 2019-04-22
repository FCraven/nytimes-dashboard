import React from 'react'
import './Navbar.css'

const Navbar =()=> {
  const dummyLinks = ['Arts','Automobiles','Books','Business','Fashion','Food','Health','Home','Movies','National','Politics','Real Estate','Science','Sports','Tech','Theater','Travel', 'World']
  return (
    <div className="container">
      <ul className='navbar'>
        {dummyLinks.map(link => <li className='nav-link'>{link}</li>)}
      </ul>
    </div>
  )
}

export default Navbar
