import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import pawprint from './blue-pawprint.png'
import bentleyPhoto from './bentley-crop.jpeg'
import './Profile.css'

const Profile = () => {
  const navigate = useNavigate();
  let {id} = useParams();

  const [user, setUser] = useState("")
 
  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 
    if (userInfo){
      console.log(userInfo)
      navigate(`/profile/${userInfo.username}`)
    } 
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4321/profile/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUser(res)
    })
    .catch(error => console.log(error))
    // eslint-disable-next-line
  }, [])

  console.log(user.dogName)

  return (
    <div className='profile'>
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h2 className='title'>My Profile</h2>
      <img className='pawprint' src={pawprint} alt='pawprint'/>

      <div className='profile-container'>

      {/* Begin Descriptive Info */}
        <div className='profile-info'>

          {user ? <h2 className='user'>{user.username}</h2> : <h2 className='user'>Dog Name</h2>}

          <img className='profile-pic' src={bentleyPhoto} alt="User's profile"/>

          <div className='descript-container'>

            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Pet Name: {user.dogName}</h3>

          </div>

          <div className='descript-container'>

            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Breed: {user.dogBreed}</h3>

          </div>
          
          <div className='descript-container'>
            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Birthday: {user.dogBirthday}</h3>
          </div>
          
          <div className='descript-container'>
            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Fav Toy: {user.favoriteToy}</h3>
          </div>
          
          <div className='descript-container'>
            <img className='pawprint' src={pawprint} alt='pawprint'/>
            <h3 className='descriptor'>Description: {user.dogDescription}</h3>
          </div>
          
        </div>
        
      {/* End Descriptive Info */}

      </div>
      <button className="title logoutButton" onClick={() => {
        localStorage.removeItem("userInfo");
        navigate('/signin')
        window.location.reload(false)
          }}>
          Log Out
      </button>
    </div>
  )
}

export default Profile