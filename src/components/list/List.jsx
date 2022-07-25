import React from 'react'
import './List.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import ListItem from '../ListItem/ListItem'

function List() {
  return (
    <div className='list'>
        <span className='listtitle'>Continue to Watch</span>
        <div className='wrapper'>
          <MdArrowBackIos/>
          <div className='container'>
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
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
          <MdArrowForwardIos/>
        </div>
    </div>
  )
}

export default List