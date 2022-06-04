import React from 'react'
import {HeaderItems} from './HeaderItems'
import './Header.css'
import logo from './PetworkLogo.svg'
import { Link as LinkRouter } from 'react-router-dom'
import {animateScroll} from 'react-scroll'


const scrollHome = ()=>{
  animateScroll.scrollToTop()
};


const Header = () => {

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

            {/* <LinkRouter to={ userInfo ? `/profile/${userInfo.username}` : '/signin'} className="pages profile">{userInfo? <li>Profile</li> : <li>Sign In</li>}</LinkRouter>
            <span className="pages bar">|</span> */}
            <LinkRouter to={`/profile/${userInfo.username}`} className="pages profile">Profile</LinkRouter>

            <LinkRouter to="/favorites" className="pages profile"><li>Favorites</li></LinkRouter>

          </ul>


        </nav>

    </div>
  )
}

export default Header;
