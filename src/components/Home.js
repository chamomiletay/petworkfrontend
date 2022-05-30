import React from 'react'
import { Link } from 'react-router-dom'
import {HeaderItems} from './HeaderItems'
import bentleyPhoto from './bentley.JPG'
import './Home.css'


const Home = () => {
  return (
    <div>
      <div className='main-heading'>
        <h1>Petwork</h1>
      </div>
        <p>Hello, pet pawdience! We are Petwork!</p>
        <img className='bentley' src={bentleyPhoto} alt="black and white shih-tzu"/>
        <p>From building up your pet's care arsenal to finding the latest pawrent meetups, we've got all your needs covered!</p>

        <p>Already a user? <Link to={HeaderItems[2].path}>Sign In</Link></p>
    </div>
  )
}

export default Home