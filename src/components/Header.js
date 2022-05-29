import React from 'react'
import {HeaderItems} from './HeaderItems'
import './Header.css'
import logo from './PetworkLogo.svg'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='header'>

        <nav> 
          
          <div className="petwork-logo">
            <img className="logo" src={logo} alt="petwork-logo"></img>
          </div>
          <ul className="header-items">
            {HeaderItems.map((item, index)=>{
              return(
                <div className='pages'>
                  <Link to={item.path}>
                  <li key={index}> {item.title} <span> | </span> </li>
                  </Link>
                </div>
              )
              })}


          </ul>


        </nav>

    </div>
  )
}

export default Header;
