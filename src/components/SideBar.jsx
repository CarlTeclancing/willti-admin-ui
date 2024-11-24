import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import DashIcon from '../assets/icons/Category.svg'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'



export default function SideBar() {
    
    const location = useLocation()
    const [state, setState] = useState('')

    // const toggleTab = (index)=>{
    //     setActive(index)
    //     //console.log(index)
    // }
  return (
    <div className='side-bar'>
        <img src={Logo} alt="Willtilogo" />

        <Link 
            to="/dashboard" 
            
            className={location.pathname === '/dashboard' ? 'nav-el-active' : 'nav-el'}
            
            >
            <i className="bi bi-list icon"></i>
            <span className='nav'>Dashbaord</span>
        </Link>

        <span className='nav-category'>User Management </span>

        <Link to="/dashboard/users" 
            className={location.pathname === '/dashboard/users' ? 'nav-el-active' : 'nav-el'} 
            >

            <i className="bi bi-person icon"></i>
            <span className='nav'>Users</span>
        </Link>

        <Link to="/dashboard/drivers" 
            className={location.pathname === '/dashboard/drivers' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-people icon"></i>
            <span className='nav'>Drivers</span>
        </Link>

        <Link to="/dashboard/agencies" 
            className={location.pathname === '/dashboard/agencies' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-bus-front-fill icon"></i>
            <span className='nav'>Agencies</span>
        </Link>

        <span className="nav-category">Rides & Bookings</span>

        <Link to="/dashboard/rides" 
            className={location.pathname === '/dashboard/rides' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-car-front-fill icon"></i>
            <span className='nav'>Rides</span>
        </Link>

        <Link to="/dashboard/bookings" 
            className={location.pathname === '/dashboard/bookings' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-calendar-check icon"></i>
            <span className='nav'>Bookings</span>
        </Link>

        <span className="nav-category">Cash Flow</span>

        <Link to="/dashboard/revenue" 
            className={location.pathname === '/dashboard/revenue' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-clipboard-data icon"></i>
            <span className='nav'>Revenue</span>
        </Link>

        <span className="nav-category">Support Center</span>

        <Link to="/dashboard/support" 
            className={location.pathname === '/dashboard/support' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-chat-dots icon"></i>
            <span className='nav'>Support</span>
        </Link>

        <span className="nav-category">App Settings</span>
        <Link to="/dashboard/settings" 
            className={location.pathname === '/dashboard/settings' ? 'nav-el-active' : 'nav-el'} 
            >
            <i className="bi bi-gear icon"></i>
            <span className='nav'>Settings</span>
        </Link>

    </div>
  )
}
