import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='register'>
        <div className='top'>
            <img src='logo512.png' alt='' className='logo'/>
            <button className='login'>Sign In</button>
        </div>
        <div className='container'>
            <h1>Unlimited Movies, TV shows, and more.</h1>
            <h2>Watch anywhere, cancel anytime</h2>
            <p>Ready to watch? Enter your email to create or retart your membership.</p>
            <div className='input'>
                <input type='email' placeholder='email address...'/>
                <button className='regbtn'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
