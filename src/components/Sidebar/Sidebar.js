import React from 'react'
import './Sidebar.css'

const Sidebar =(props)=> {

      const links = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home','Insider','Magazine', 'Movies', 'National', 'NY Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater','T Magazine', 'Travel','Upshot', 'World']



  console.log(`proooopppppppps-->`,props)
  return (

      <div id="sidebar-container">
          <ul id='sidebar'>
            {links.map((link,idx) =>
              <a key={idx} href='...'>
                <li key={idx}
                    className='sidebar-link'
                    >{link}</li>
              </a>)}
          </ul>
      </div>

  )
}


export default Sidebar

//create navlink component tomrrow when finger pain eases up a bit
