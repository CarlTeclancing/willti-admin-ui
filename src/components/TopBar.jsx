import React from 'react'
import Search from '../assets/icons/search.svg'
import Notification from '../assets/icons/notification.png'
import User from '../assets/icons/user.png'

export default function TopBar() {
    var PageTitle = "Dashboard"
  return (
    <div className='topbar'>
        <h4>{PageTitle}</h4>
        <div className="top-el">
            <div className="search">
                <img src={Search} alt="search icon" />
                <input type="search" placeholder='Search here ...' />
            </div>
            <div className="circle">
                <img src={Notification} alt="notification icon" />
            </div>
            <img src={User} alt="user image" />
            
        </div>
    </div>
  )
}
