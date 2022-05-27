import React from 'react'
import { Link } from 'react-router-dom'


const SignIn = () => {

  return (
    <div>
      <h2>Sign In</h2>
    <form class="username-input" >
    <input placeholder="Username" type="text" name="username" required />
    </form>
    <form class="password-input"><br></br>
    <input placeholder="Password" type="text" name="password" required />
    </form><br></br>
    <button type="submit"><Link to='/Profile'>Submit</Link></button>

    <p> Don't have an account? 
      <Link to='/SignUp'>
      
      Click Here</Link>
      
      </p>

     


    </div>
  )
}


export default SignIn