import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className='title'>Petwork</h1>
        <p>Already a user? <Link to=''>Sign In</Link></p>
    </div>
  )
}

export default Home