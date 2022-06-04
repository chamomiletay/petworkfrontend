import React from 'react'
import './Footer.css'
import { Link as LinkRouter } from 'react-router-dom'
import { FooterItems } from './FooterItems'


const Footer = () => {
  return (
    <div className='footer'>

      <nav>
        <div className='petwork-logo'>
          {/* <img className="logo" src={logo} alt="petwork-logo"></img> */}
        </div>

          <ul className='footer-items'>{FooterItems.map((item, index)=> {
            return(
              <div className='nav'>
                <LinkRouter to={item.path}>
                  <li key={index}>{item.title} 
                    <span className='bar'> | </span>
                  </li>
                </LinkRouter>
              </div>
            )
          })}
          </ul>

        </nav>
    
        
          <p>© Petwork 2022 by Purp5. All rights reserved.</p>
        
        
    </div>
  )
}

export default Footer