import React, { useRef, useState } from 'react'
import './List.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import ListItem from '../ListItem/ListItem'

function List() {
/*--instead of query selector we use useRef Hook--*/
  const listRef = useRef()
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)
    let space = listRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + space}px)`
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + space}px)`
    }
    // console.log(space)
  }
  return (
    <div className='list'>
        <span className='listtitle'>Continue to Watch</span>
        <div className='wrapper'>
          <MdArrowBackIos className='sliderarrow left' onClick={() => handleClick("left")} style={{display: !isMoved && "none"}}/>
          <div className='container' ref={listRef}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
          <MdArrowForwardIos className='sliderarrow right' onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default List