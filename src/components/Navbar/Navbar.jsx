import React, {useState} from 'react'
import './Navbar.css'
import { MdSearch, MdNotifications, MdArrowCircleDown } from 'react-icons/md'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    // console.log(window.pageYOffset)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    };
    console.log(isScrolled)
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src='./logo512.png' alt=''/>
                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <MdSearch className='icon'/>
                <span>Kid</span>
                <MdNotifications className='icon'/>
                <div className='profile'>
                    <MdArrowCircleDown className='icon'/>
                    <div className='options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default Navbar