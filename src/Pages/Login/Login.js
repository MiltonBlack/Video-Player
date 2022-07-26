import React, { useRef, useState } from 'react'
import './Login.css'

const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const handleStart = () => {
//     setEmail(emailRef.current.value)
//   }
//   const handleFinish = () => {
//     setPassword(passwordRef.current.value)
//   }
  return (
    <div className='login'>
        <div className='top'>
          <div className='wrapper'>
            <img src='logo512.png' alt='' className='logo'/>
            {/* <button className='login'>Sign In</button> */}
          </div>
        </div>
        <div className='container'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder="email or phone Number ..."/>
                <input type='password' placeholder="password..." />
                <button className='loginbtn'>Sign In</button>
                <span>New to NetFlix? <b>Sign Up Now</b></span>
                <small>
                    This page is protected by Google reCaptcha to ensure
                    you are not a bot. <b>Learn More</b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login