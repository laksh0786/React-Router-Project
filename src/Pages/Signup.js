import React from 'react'
import SignupTemplate from '../Components/SignupTemplate'
import signupImage from  "../assets/signup.png";

function Signup({setLoggedIn}) {
  return (
    <SignupTemplate
      title="Join the millions learning to code with studynotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImage}
      formType="signup"
      setLoggedIn={setLoggedIn}
    />
  )
}

export default Signup