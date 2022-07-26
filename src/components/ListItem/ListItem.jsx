import React, { useState } from 'react'
import './ListItem.css'
import { MdPlayArrow, MdThumbUp, MdAdd, MdThumbDown } from 'react-icons/md'

const ListItem = ({index}) => {
  const trailer = "video.mp4"
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='listitem' 
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter={()=> setIsHovered(true)} 
      onMouseLeave={()=> setIsHovered(false)}>
        <img src='/usher.jpeg' alt=''/>
        {isHovered && (<>
        <video src={trailer} autoPlay={true} loop/>
        <div className='iteminfo'>
          <div className='icons'>
            <MdPlayArrow className='icon'/>
            <MdAdd className='icon'/>
            <MdThumbUp className='icon'/>
            <MdThumbDown className='icon'/>
          </div>
          <div className='iteminfotop'>
            <span>1 hour 50 min</span>
            <span className='pg'>+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Usher is one of the world best R&B Singers, he is known
            for some famous titles like the "good kisser" and "new flames"
          </div>
          <div className="genre">Action</div>
        </div></>)}
    </div>
  )
}

export default ListItem