import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SignUp from './SignUp'


async function signinUser(credentials){
  return fetch('https://petwork-backend.herokuapp.com/signin',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(cata =>DataTransfer.json())
}


const SignIn = ({setToken}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e =>{
    e.preventDefault();
    const token = await signinUser({
      username,
      password
    })
    setToken(token);
  }


  return (
    <div>
      <h2>Sign In</h2>
    <form class="username-input" onSubmit={handleSubmit}>
    <input placeholder="Username" type="text" name="username" required onChange={e =>setUsername(e.target.value)}/>
    </form>
    <form class="password-input"><br></br>
    <input placeholder="Password" type="text" name="password" required onChange={e =>setPassword(e.target.value)}/>
    </form><br></br>
    <button type="submit"><Link to='/Profile'>Submit</Link></button>

    <p> Don't have an account? 
      <Link to='/SignUp'>
      
      Click Here</Link>
      
      </p>

     


    </div>
  )
}

SignUp.propTypes={
  setToken:PropTypes.func.isRequired
}

export default SignIn