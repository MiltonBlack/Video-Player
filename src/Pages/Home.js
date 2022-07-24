import React from 'react'
import './Home.css'
import { MdAcUnit } from 'react-icons/md'
import Navbar from '../components/Navbar/Navbar'
import Featured from '../components/Featured/Featured'

function Home() {
  return (
    <div className='home'>
     <Navbar/>
     {/* <img src='/img.jpeg' alt='' width='100%'/> */}
     <Featured/>
    </div>
  )
}

export default Home