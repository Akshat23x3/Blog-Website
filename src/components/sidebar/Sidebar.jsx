import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebaritem'>
        <span className='sidebartitle'> About me</span>
        <br />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXsIkEuHogqkl_GHx4_QlXGuf0lI5WwLTNQ&usqp=CAU' alt='' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='sidebaritem'>
        <span className='sidebartitle'> Categories </span>
        <ul className='sidebarlist'>
          <li className='sidebarlistitem'> Life</li>
          <li className='sidebarlistitem'> Music</li>
          <li className='sidebarlistitem'> style</li>
          <li className='sidebarlistitem'> sport</li>
          <li className='sidebarlistitem'> Tech</li>
          <li className='sidebarlistitem'> Cinema</li>
        </ul>
      </div>

      <div className='sidebaritem'>
        <span className='sidebartitle'> Follow Us </span>
        <div className='sidebarsocial'>
          <i class="sidebaricon fa-brands fa-facebook-square"></i>
          <i class="sidebaricon fa-brands fa-instagram-square"></i>
          <i class="sidebaricon fa-brands fa-twitter-square"></i>
          <i class="sidebaricon fa-brands fa-pinterest-square"></i>
        </div>

      </div>
      </div>
      )
}
