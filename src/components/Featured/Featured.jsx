import React from 'react'
import './Featured.css'
import { FaPlay, FaInfo } from 'react-icons/fa'
const Featured = () => {
  return (
    <div className='featured'>
        <img src='./img.jpeg' alt=''/>
        <div className='info'>
            <img src='./img.jpeg' alt=''/>
            <span className='desc'> 
                this is an action movie, sit back, watch and relax, catch thrills, suspense and drama.
            </span>
            <div className='buttons'>
                <button className='play'>
                    <FaPlay/>
                    <span>play</span>
                </button>
                <button className='more'>
                    <FaInfo/>
                    <span>more info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured