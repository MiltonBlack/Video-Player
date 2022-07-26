import React from 'react'
import './Watch.css'
import { MdArrowBack } from 'react-icons/md'

export default function Watch() {
  return (
    <div className='watch'>
        <div className='back'>
            <MdArrowBack/>
            home
        </div>
        <video className='video' autoPlay progress controls src=''/>
    </div>
  )
}
