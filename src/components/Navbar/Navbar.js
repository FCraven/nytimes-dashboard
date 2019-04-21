import React from 'react'
import './Navbar.css'

const Navbar =()=> {
  const dummyLinks = ['Archive','Article Search','Books','Geographical','Popular','Top Stories']
  return (
    <div className="container">
      <ul className='navbar'>
        {dummyLinks.map(link => <li className='nav-link'>{link}</li>)}
      </ul>
    </div>
  )
}

export default Navbar
