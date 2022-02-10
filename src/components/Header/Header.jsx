import React from 'react'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_content'>
        <ul>
          <li>photos</li>
          <li>tours</li>
          <li>about us</li>
          <li>guids</li>
        </ul>
        <span>nomad tours</span>
      </div>
    </div>
  )
}

export default Header