import React from 'react'
import './Footer.css'
import logo from './PetworkLogo.svg'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='petwork-logo'>
        {/* <img className="logo" src={logo} alt="petwork-logo"></img> */}
      </div>
      
        <p>© Petwork 2022 by Purp5. All rights reserved.</p>
    </div>
  )
}

export default Footer