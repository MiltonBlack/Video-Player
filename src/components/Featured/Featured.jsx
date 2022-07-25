import React from 'react'
import './Featured.css'
import { FaPlay, FaInfo } from 'react-icons/fa'
const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (<div className='category'> 
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name='genre' id='genre'>
                <option>Genre</option>
                <option value='kids'>kids</option>
                <option value='teens'>teens</option>
                <option value='super-hero'>super Hero</option>
                <option value='sci-fi'>sci-fi</option>
                <option value='animation'>animation</option>
                <option value='adventure'>adventure</option>
                <option value='fantasy'>fantasy</option>
                <option value='crime'>crime</option>
            </select>
        </div>)}
        {/*----------Navbar Background tag start----------*/}
        <img src='./img.jpeg' alt=''/>
        {/*----------Navbar Background end-----------------*/}
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