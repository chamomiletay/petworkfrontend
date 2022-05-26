import React from 'react'
import {HeaderItems} from './HeaderItems'
import './Header.css'
import logo from './PetworkLogo.svg'

const Header = () => {
  return (
    <div className='header'>

        <h1>Hola</h1>


        <nav> 
          
          <div class="petwork-logo">
            <img class="logo" src={logo} alt="petwork-logo"></img>
          </div>
          <ul  class="header-items">
            {HeaderItems.map((item, index)=>{
              return(
                  <li key={index}><a className={item.cName} href={item.url}>
                    {item.title}
                    
                    </a></li>
              )
              })}


          </ul>


        </nav>

    </div>
  )
}

export default Header;
