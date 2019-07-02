import React from 'react'
import './MainMenuCard.css'



const MainMenuCard =(props)=> {
  const strops = {title: 'Test Subject'}
  return (
    <section className='main-menu-card'>
      <nav>
        <span>{strops.title}</span>
      </nav>
    </section>
  )
}

export default MainMenuCard
