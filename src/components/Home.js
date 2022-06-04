import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Video from './videos/Video.mp4'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1} from './HomeElements'
// import About from './About'



const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  
  return (
    <div>
      <HomeContainer>
        <HomeBg>
       

          <VideoBg autoPlay loop muted src={Video} type='viedo/mp4'/>

        <p>From building up your pet's care arsenal to finding the latest pawrent meetups, we've got all your needs covered!</p>

        {!userInfo?<p>Already a user? 
          <Link to={'/signin'}>
            <span className='link'> Sign In</span>
          </Link>
        </p>
        : <h1 className='welcome'>Welcome, {userInfo.dogName}!</h1>}
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