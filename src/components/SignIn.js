import React, {useRef, useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthCon from './SignInAuth';
import axios from './SignUpAxios';


const signinURL = '/profile' //endpoint for signin page


const SignIn = () => {


  const {setAuth} =useContext(AuthCon)

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