import React, {useRef, useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthCon from './SignInAuth';
import axios from './SignUpAxios';
import './SignInUp.css'
import pawprint from './blue-pawprint.png'

const signinURL = 'https://petwork-backend.herokuapp.com/profile/:id' //endpoint for signin page


const SignIn = () => {


  const {setAuth} =useContext(AuthCon)

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] =useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    setErrorMessage("");
  }, [user, password])

  async function handleSubmit(e){
    e.preventDefault();
    try{ const response = await axios.post(signinURL, JSON.stringify({username:user, password}),
      {
        headers: {'Content-Type': 'application/json' },
        withCredentials: true 
      }
    );
      console.log(JSON.stringify(response?.data))
      setAuth({user, password})
    setUser('');
    setPassword('');
    setSuccess(true)
  }catch(error){
    if(!error.response){
      setErrorMessage('No Response from Server')
    }else if (error.response?.status ===400){
      setErrorMessage('Either the username or password is missing')
    }else{
      setErrorMessage('Login Failed')
    }
    errRef.current.focus();
  }}

  return (
    <>
    {success ? (
      <section>
        <h1> You are now signed in!</h1>
        <p>
          <Link to="/profile/:id">Go to your Profile</Link>
        </p>
      </section>
    ):(
    <div>
      <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
        <img className='pawprint' src={pawprint} alt='pawprint'/>
          <h2 className='title'>Sign In</h2>
        <img className='pawprint' src={pawprint} alt='pawprint'/>
    <form onSubmit={handleSubmit} >
    <input 
      className="username input"
      placeholder="Username" 
      type="text" 
      name="username"
      ref={userRef}
      autoComplete="off" 
      onChange = {(e) => setUser(e.target.value)}
      value={user}
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
   
    <button className="signin" type="submit"
      
    >Sign In</button>
    </form>
    <p> Don't have an account? 
      <Link to='/SignUp'>
        <span className="link">Click Here</span>
      </Link>
    </p>
    </div>
    )}
    </>
  )
}


export default SignIn