import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className='headertitles'>
            <span className='headertitlesm'> React & Node</span>
            <span className='headertitlelg'> Blog </span>
        </div>
        <img className='headerimg' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=''/>
    </div>
  )
}
