import React from 'react'
import Search from '../assets/icons/search.svg'
import Notification from '../assets/icons/notification.png'
import User from '../assets/icons/user.png'
import { Link } from 'react-router-dom'

export default function TopBar({PageTitle}) {
    
  return (
    <div className='topbar'>
        <h2>{PageTitle}</h2>
        <div className="top-el">
            <div className="search">
                <img src={Search} alt="search icon" />
                <input type="search" placeholder='Search here ...' />
            </div>
            <div className="circle">
                <img src={Notification} alt="notification icon" />
            </div>

            <Link to='/dashboard/profile'><img src={User} alt="user image" /></Link>
            
            
        </div>
    </div>
  )
}
