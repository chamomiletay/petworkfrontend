import React from 'react'
import { Link } from 'react-router-dom'
import {HeaderItems} from './HeaderItems'

const Home = () => {
  return (
    <div>
        <h1 className='title'>Petwork</h1>
        <p>Already a user? <Link to={HeaderItems[2].path}>Sign In</Link></p>
    </div>
  )
}

export default Home