import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {HeaderItems} from './HeaderItems'
import './Header.css'
import logo from './PetworkLogo.svg'
import { Link as LinkRouter } from 'react-router-dom'
import {Link as LinkScroll } from 'react-scroll'
import {animateScroll} from 'react-scroll'
import Profile from './Profile'

const scrollHome = ()=>{
  animateScroll.scrollToTop()
};


const Header = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 

  return (
    <div className='header'>

        <nav> 
          
          <div className="petwork-logo">
          <LinkRouter to="/"><img className="logo" src={logo} alt="petwork-logo" onClick={scrollHome}></img></LinkRouter> 
          </div>
          <ul className="header-items">
            {HeaderItems.map((item, index)=>{
              return(
                <div className='pages'>
                  <LinkRouter to={item.path}>
                  <li key={index}> {item.title} <span className="bar"> | </span> </li>
                  </LinkRouter>
                </div>
              )
              })}

            <LinkRouter to={`/profile/${userInfo.username}`} className="pages profile">Profile</LinkRouter>

          </ul>


        </nav>

    </div>
  )
}

export default Header;
