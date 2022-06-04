import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from './SignUpAxios';
import './SignInUp.css'
import pawprint from './blue-pawprint.png'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,20}$/;

const SignUp = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);


  const[ errorMessage, setErrorMessage] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus()
  }, [])


  //testing against username
  useEffect(()=>{
    const result= USER_REGEX.test(username)
    console.log(result)
    console.log(username)
    setValidName(result)
  }, [username])

  //teting against password
  useEffect(()=>{
    const result = PWD_REGEX.test(password);
    console.log(result)
    setValidPassword(result);
  }, [password])

  useEffect(()=>{
    setErrorMessage("")
  }, [username, password])


  async function handleSubmit(e){
    e.preventDefault();
    
    try{
      const config = 
      {
        headers:{ 'Content-type' : 'application/json'},
      }
      setSuccess(true);

      const {data} = await axios.post('https://petwork-backend.herokuapp.com/profile',
      {username, password},
      config
      );
      localStorage.setItem("userInfo", JSON.stringify(data))

    }catch(error){
      if(error.response.status ===409){
        setErrorMessage("Username Taken. Sorry!")
      }else{
        setErrorMessage("Registration Failed. Try Again!")
      }
    }
  }


  return (
    <>
    {success ? (
      <section>
        <h1> You are now signed up!</h1>
        <p>
          <Link to="/profile">Go to your Profile</Link>
        </p>
      </section>
    ):(
    <div>
      <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
      
      <img className='pawprint' src={pawprint} alt='pawprint'/>
        <h1 className='title'>Sign Up</h1>
      <img className='pawprint' src={pawprint} alt='pawprint'/>

    <form  onSubmit = {handleSubmit}>

    <input 
      className="username input"
      placeholder="Username" 
      type="text" 
      name="username" 
      required
      ref={userRef}
      autoComplete="off"
      onChange = {(e) => setUsername(e.target.value)}
      onFocus={()=>setUsernameFocus(true)}
      onBlur={()=>setUsernameFocus(false)}
      aria-invalid = {validName ? "false" : "true"}
      aria-describedby="usernamenote"
      />
     <span className={validName ? 'valid' : 'display:none'}>
        <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={validName || !username ? 'display:none' : "invalid"}>
        <FontAwesomeIcon icon={faTimes}/>
      </span>

      <p id= "usernamenote" className={usernameFocus && username && !validName ? "instuctions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle}/>
        6 to 16 characters.<br></br>
        Must begin with a letter <br></br>and can include letters and numbers.
      </p>
      

    <br></br>
    
    <input 
      class="password input"
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

     <span className={validPassword ? 'valid' : 'hide'}>
      <FontAwesomeIcon icon={faCheck}/>
      </span>
      <span className={validPassword || !username ? "hide" : "invalid"}>
        <FontAwesomeIcon icon={faTimes}/>
      </span>

      <p id = "passwordnote" className={passwordFocus && !validPassword ? "instuctions" : "offscreen"}>
        <FontAwesomeIcon icon={faInfoCircle}/>
        8 to 21 characters.<br></br>
        Must begin with a letter <br></br>and must include <br></br>
        an uppercase letter and a number.
      </p>
    <div class="doginfo">
    <input className="dogName input" placeholder="Dog's Name" type="text" name="dogName"/>
   
    <input className="dogBreed input" placeholder="Dog's Breed" type="text" name="dogBreed" />
  
    <input className="dogBirthday input" placeholder="Dog's Birthday" type="text" name="dogBirthday"/>
   
    <input className="dogToy input" placeholder="Favorite Toy" type="text" name="dogToy"/>
   
    <textarea className="dogDescription input"placeholder="Describe Your Dog!" type="text" name="dogDescription" rows="10" cols="30"/>
    <br></br>
    </div> 
    <p>*Psssst! Only a Password and Username are required at signup*</p>

    



    <button className="signinButton" disabled={!validName ||!validPassword? true : false} >Submit</button>

    </form>
    
    <p> Already registered?<Link to='/SignIn'> <span className="link">Sign In</span></Link></p>
   
    </div>
    )}
    </>
  
  )
  
}



export default SignUp;




