import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import pawprint from './blue-pawprint.png'
import bentleyPhoto from './bentley-crop.jpeg'
import './Profile.css'

const Profile = () => {

    let {id} = useParams();

    const [user, setUser] = useState();
  

  useEffect(() => {
    fetch(`https://petwork-backend.herokuapp.com/profile/${id}`)
    .then(res => res.json())
    .then(res => {
      setUser(res.result)
    })
    .catch(console.error)
  }, [])

  return (
    <div className='profile'>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>My Profile</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>

      <div className='profile-container'>

      {/* Begin Descriptive Info */}
        <div className='profile-info'>

          <img className='profile-pic' src={bentleyPhoto} alt="User's profile"/>

            <h2>{user.username}</h2>

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