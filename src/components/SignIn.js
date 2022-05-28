import React, {useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const SignIn = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] =useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    setErrorMessage("");
  }, [user, password])

  async function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div>
      <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
      <h2>Sign In</h2>
    <form className="username-input" onSubmit={handleSubmit} >
    <input 
      placeholder="Username" 
      type="text" 
      name="username"
      ref={userRef}
      autoComplete="off" 
      onChange = {(e) => setUser(e.target.value)}
      value={user}
      required />
    </form>

    <form className="password-input"><br></br>
    <input 
      placeholder="Password" 
      type="password" 
      name="password" 
      ref={userRef}
      onChange = {(e) => setPassword(e.target.value)}
      value={password}
      required />
    </form><br></br>
    <button type="submit">Submit</button>

    <p> Don't have an account? 
      <Link to='/SignUp'>
      
      Click Here</Link>
      
      </p>

     


    </div>
  )
}


export default SignIn