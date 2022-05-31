import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {HeaderItems} from './HeaderItems'
import './About.css'
import Video from './videos/Video.mp4'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1} from './HomeElements'
// import About from './About'


const Home = () => {
  return (
    <div>
     
      <HomeContainer>
        <HomeBg>
       

          <VideoBg autoPlay loop muted src={Video} type='viedo/mp4'/>

        <p>From building up your pet's care arsenal to finding the latest pawrent meetups, we've got all your needs covered!</p>

        <p>Already a user? 
          <Link to={HeaderItems[2].path}>
            <span className='link'>Sign In</span>
          </Link>
        </p>
        </HomeBg>
        <HomeContent>
          <HomeH1>Petwork</HomeH1>
        </HomeContent>
      </HomeContainer>
      {/* <About></About> */}
    </div>
    
  )
}

export default Home