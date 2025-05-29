import React from 'react'
import './App.css'

const Navbar = () => {
    
  return (
    <div className="navBarContainer">
      <ul className='navBar'>
        <li className='navTitle'>Jacob "JT" Fox</li>
        <li className='navSpacer' />
        <li className='navItem'>About Me</li>
        <li className='navItem'>Skills</li>
        <li className='navItem'>All Projects</li>
      </ul>
    </div>
  )
}

export default Navbar