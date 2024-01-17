import React from 'react'
import SignupTemplate from '../Components/SignupTemplate'
import loginImg from '../assets/login.png'

function Login({setLoggedIn}) {
  
  return (
    <SignupTemplate
      title = "Welcome Back" 
      desc1 = "Build Skills for today , tomorrow , and beyond"
      desc2 = "Education to future-proof your career."
      image={loginImg}
      formType="login"
      setLoggedIn={setLoggedIn}
    />
  )
}

export default Login;
