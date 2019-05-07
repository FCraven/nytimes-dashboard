import React from 'react'
import './Navbar.css'

const Navbar =()=> {
  const links = [{name:'World', href:'#world'}, {name:'U.S.', href:'#us'}, {name:'Politics', href:'#politics'}, {name:'N.Y.', href:'#ny'}, {name:'Business', href:'#business'},{name:'Opinion', href:'#opinion'}, {name:'Tech', href:'#tech'}, {name:'Science', href:'#science'}, {name:'Health', href:'#health'}, {name:'Sports', href:'#sports'}, {name:'Arts', href:'#arts'}, {name:'Books', href:'#books'},{name:'Style', href:'#style'},{name:'Food', href:'#food'},{name:'Travel', href:'#travel'},{name:'Magazine', href:'#magazine'},{name:'T Magazine', href:'#t-magazine'}, {name:'Real Estate', href:'#real-estate'}, {name:'Video', href:'#video'}]
  return (
    <div className="container">
      <ul className='navbar'>
        {links.map((link,idx) => <a key={idx}href={link.href}><li key={idx} className='nav-link'>{link.name}</li></a>)}
      </ul>
    </div>
  )
}

export default Navbar

//create navlink component tomrrow when finger pain eases up a bit
