import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { render } from '@testing-library/react';
import axios from './SignUpAxios'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,20}$/;

const signUpURL = '/profile' //endpoint for signup?

const SignUp = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);


//use for password confirmation
  // const [passwordMatch, setPasswordMatch] = useState("");
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  const[ errorMessage, setErrorMessage] = useState("");
  const [succes, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus()
  }, [])


  //testing against username
  useEffect(()=>{
    const result= USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  //teting against password
  useEffect(()=>{
    const result = PWD_REGEX.test(password);
    console.log(result)
    setValidPassword(result);
    // const match = password ===passwordMatch;
    // setValidMatch(match);
  }, [password])// passwordMatch])

  useEffect(()=>{
    setErrorMessage("")
  }, [user, password]) //passwordMatch])


  async function handleSubmit(e){
    e.preventDefault();
    
    try{
      const response = await axios.post(signUpURL, JSON.stringify({username: user, password}),
      {
        headers:{ 'Content-Type' : 'application/json'},
        withCredentials: true
      }
      );
      console.log(response.data)
      console.log(JSON.stringify)
      setSuccess(true)

    }catch(error){
      if(error.response.status ===409){
        setErrorMessage("Username Taken. Sorry!")
      }else{
        setErrorMessage("Registration Failed. Try Again!")
      }
    }
  }


  return (
    <div>
      <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
      <h2>Sign Up</h2>
    <form className="username-input" onSubmit = {handleSubmit}>
    
    <input 
      placeholder="Username" 
      type="text" 
      name="username" 
      required
      ref={userRef}
      autoComplete="off"
      onChange = {(e) => setUser(e.target.value)}
      onFocus={()=>setUsernameFocus(true)}
      onBlur={()=>setUsernameFocus(false)}
      aria-invalid = {validName ? "false" : "true"}
      aria-describedby="usernamenote"
      />
     <span className={validName ? 'valid' : 'display:none'}>
        <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={validName || !user ? 'display:none' : "invalid"}>
        <FontAwesomeIcon icon={faTimes}/>
      </span>

      <p id= "usernamenote" className={usernameFocus && user && !validName ? "instuctions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle}/>
        6 to 16 characters.<br></br>
        Must begin with a letter <br></br>and can include letters and numbers.
      </p>
      

    </form><br></br>
    <form class="password-input">
    <input 
      placeholder="Password" 
      type="password" 
      name="password" 
      required
      onChange = {(e) => setPassword(e.target.value)}
      onFocus={()=>setPasswordFocus(true)}
      onBlur={()=>setPasswordFocus(false)}
      aria-invalid = {validPassword ? "false" : "true"}
      aria-describedby="passwordnote"
      />

     <span className={validPassword ? 'valid': 'hide'}>
      <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={validPassword || !user ? "hide" : "invalid"}>
        <FontAwesomeIcon icon={faTimes}/>
      </span>

      <p id = "passwordnote" className={passwordFocus && !validPassword ? "instuctions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle}/>
        8 to 21 characters.<br></br>
        Must begin with a letter <br></br>and must include <br></br>
        an uppercase letter and a number.
      </p>
    </form><br></br>
    <form class="dogName-input">
    <input placeholder="Dog's Name" type="text" name="dogName" required/>
    </form><br></br>
    <form class="dogBreed-input">
    <input placeholder="Dog's Breed" type="text" name="dogBreed" required/>
    </form><br></br>
    <form class="dogBirthday-input">
    <input placeholder="Dog's Birthday" type="text" name="dogBirthday" required/>
    </form><br></br>
    <form class="dogToy-input">
    <input placeholder="Favorite Toy" type="text" name="dogToy" required/>
    </form><br></br>
    <form class="dogDescription-input">
    <input placeholder="Describe Your Dog!" type="text" name="dogDescription" required/>
    </form><br></br>


    



    <button disabled={!validName ||!validPassword? true : false} >Submit</button>
    
    <p> Already registered?<Link to='/SignIn'> Sign In</Link></p>
   
    </div>
  
  )
  
}



export default SignUp;




