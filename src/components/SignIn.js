import React, {useRef, useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from './SignUpAxios';
import './SignInUp.css'
import pawprint from './blue-pawprint.png'

const SignIn = ({history}) => {

  const navigate = useNavigate();
  let {id} = useParams();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] =useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo")
 
    if (userInfo){
      navigate(`/profile/${username}`)
    }
  }, [history])

  async function handleSubmit(e){
    e.preventDefault();

    try{
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }
      setSuccess(true)

      const {data} = await axios.post('http://localhost:4321/profile/:id', {
        username,
        password,
      },
      config
      );
      setUsername(data.username)
      console.log(username)
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
      setErrorMessage(error.response.data)
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