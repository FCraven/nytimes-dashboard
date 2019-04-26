import React from 'react'
import './Navbar.css'

const Navbar =()=> {
  const dummyLinks = ['World', 'U.S.', 'Politics', 'N.Y.', 'Business','Opinion', 'Tech', 'Science', 'Health', 'Sports', 'Arts', 'Books','Style','Food','Travel','Magazine','T Magazine', 'Real Estate', 'Video']
  return (
    <div className="container">
      <ul className='navbar'>
        {dummyLinks.map((link,idx) => <li key={idx} className='nav-link'>{link}</li>)}
      </ul>
    </div>
  )
}

export default Navbar
