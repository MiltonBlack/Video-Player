import React from 'react'
import './Home.css'
import { MdAcUnit } from 'react-icons/md'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/list/List'

function Home() {
  return (
    <div className='home'>
     <Navbar/>
     {/* <img src='/img.jpeg' alt='' width='100%'/> */}
     <Featured 
    //  type="movie"
     />
     <List/>
     <List/>
     <List/>
     <List/>
     <List/>
    </div>
  )
}

export default Home