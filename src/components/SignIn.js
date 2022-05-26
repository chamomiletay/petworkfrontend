import React from 'react'

const SignIn = () => {
  return (
    <div>
      <h2>SignIn</h2>
    <form class="username-input">
    <input placeholder="Username" type="text" name="username" required/>
    </form>
    <form class="password-input"><br></br>
    <input placeholder="Password" type="text" name="password" required/>
    </form><br></br>
    <button type="submit">Submit</button>




    </div>
  )
}

export default SignIn