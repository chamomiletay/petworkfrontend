import React from 'react'
import pawprint from './blue-pawprint.png'
import bentleyPhoto from './bentley-crop.jpeg'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>My Profile</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>

      <div className='profile-container'>

      {/* Begin Descriptive Info */}
        <div className='profile-info'>

          <img className='profile-pic' src={bentleyPhoto} alt="User's profile"/>

            <h2>[ Username from input goes here ]</h2>

          <div className='descript-container'>

            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Breed: [ user input ]</h3>

          </div>
          
          <div className='descript-container'>
            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Birthday: [ user input ]</h3>
          </div>
          
          <div className='descript-container'>
            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Fav Toy: [ user input ]</h3>
          </div>
          
          <div className='descript-container'>
            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Description: [ user input ]</h3>
          </div>
          
        </div>
        
      {/* End Descriptive Info */}
        
      <div>
          
        </div>

      </div>
    </div>
  )
}

export default Profile