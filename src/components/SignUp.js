import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
    <form class="username-input">
    <input placeholder="Username" type="text" name="username" required/>
    </form><br></br>
    <form class="password-input">
    <input placeholder="Password" type="text" name="password" required/>
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


    



    <button type="submit">Submit</button>
    </div>
  )
}

export default SignUp;




