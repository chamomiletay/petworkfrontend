import React from 'react'
import pawprint from './blue-pawprint.png'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>My Profile</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
    </div>
  )
}

export default Profile