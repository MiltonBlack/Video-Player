import React, { useRef, useState } from 'react'
import './Register.css'

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }
  return (
    <div className='register'>
        <div className='top'>
          <div className='wrapper'>
            <img src='logo512.png' alt='' className='logo'/>
            <button className='login'>Sign In</button>
          </div>
        </div>
        <div className='container'>
            <h1>Unlimited Movies, TV shows, and more.</h1>
            <h2>Watch anywhere, cancel anytime</h2>
            <p>Ready to watch? Enter your email to create or retart your membership.</p>
            {!email ? (<div className='input'>
                <input type='email' placeholder='email address...' ref={emailRef}/>
                <button className='regbtn' onClick={handleStart}>Get Started</button>
            </div>) :
            (<form className='input'>
                <input type='password' placeholder='password...' ref={passwordRef}/>
                <button className='regbtn' onClick={handleFinish}>Start</button>
            </form>)}
        </div>
    </div>
  )
}
