import React, {useRef, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from './SignUpAxios';
import './SignInUp.css'
import pawprint from './blue-pawprint.png'

const SignIn = () => {

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] =useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 
    if (userInfo){
      console.log(userInfo)
      navigate(`/profile/${userInfo.username}`)
    } 
  }, [navigate])


  async function handleSubmit(e){
    e.preventDefault();

    try{
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }
      setSuccess(true)

      const {data} = await axios.post('https://petwork-backend.herokuapp.com/profile/:id', {
        username,
        password,
      },
      config
      );
      setUsername(data.username)
      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data))
      window.location.reload(false)
    } catch(error) {
      setErrorMessage(error.response.data.message)
    }
}


  return (
    <>
    {success ? (
      <section>
        <h1> You are now signed in!</h1>
        <p>
          <Link to={`/profile/${username}`}>Go to your Profile</Link>
        </p>
      </section>
    ):(
    <div>

      <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
        <img className='pawprint' src={pawprint} alt='pawprint'/>
          <h2 className='title'>Sign In</h2>
        <img className='pawprint' src={pawprint} alt='pawprint'/>

    <form onSubmit={handleSubmit} >
      <div className="form">
    <input 
      className="username input"
      placeholder="Username" 
      type="text" 
      name="username"
      ref={userRef}
      autoComplete="off" 
      onChange = {(e) => setUsername(e.target.value)}
      value={username}
      required />
   
    <input 
      className ="input"
      placeholder="Password" 
      type="password" 
      name="password" 
      ref={userRef}
      onChange = {(e) => setPassword(e.target.value)}
      value={password}
      required />
   
    <button className="signinButton" type="submit"
      
    >Sign In</button>
    </div>
    </form>
    <p> Don't have an account? 
      <Link to='/SignUp'>
        <span className="link"> Click Here</span>
      </Link>
    </p>
    </div>
    )}
    </>
  )
}


export default SignIn