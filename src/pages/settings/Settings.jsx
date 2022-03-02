import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'> Update Your Account</span>
          <span className='settingsDeleteTitle'> Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>
            Profile Picture
          </label>
          <div className='settingsPP'>

            <img src='https://www.neurosciencemarketing.com/wp-content/uploads/2016/08/mona-lisa.jpg' alt='' />

  
            <label htmlFor='fileinput'>
              <i id='settingsPPIcon' class="fa-solid fa-circle-user"></i>
            </label>
            <input type='file' id='fileinput' style={{display:'none'}} />
          </div>

          <label> Username </label>
          <input type="text" placeholder='Safak'/>

          <label> Email </label>
          <input type="email" placeholder='safak@gmail.com'/>

          <label> Password </label>
          <input type='password'/>
          
          <button className='settingsSubmit'>
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
