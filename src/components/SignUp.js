import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2>SignUp</h2>
    <form class="username-input">
    <input placeholder="Username" type="text" name="username" required/>
    </form>
    <form class="password-input">
    <input placeholder="Password" type="text" name="password" required/>
    </form>
    <form class="dogName-input">
    <input placeholder="Dog's Name" type="text" name="dogName" required/>
    </form>

    



    <button type="submit">Submit</button>
    </div>
  )
}

export default SignUp;




