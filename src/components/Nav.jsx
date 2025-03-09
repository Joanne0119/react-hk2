import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <li><a href='#' className='text logo'><img src='./public/RobotLogo.png' className='logoimage'/></a></li>
        <li><a href='#' className='text'>Home</a></li>
        <li><a href='#' className='text'>About</a></li>
        <li><a href='#' className='text'>Contact</a></li>    
    </div>
  )
}

export default Nav