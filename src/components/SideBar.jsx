import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import DashIcon from '../assets/icons/Category.svg'
import { useState } from 'react'



export default function SideBar() {
    const [active, setActive] = useState(1)

    const toggleTab = (index)=>{
        setActive(index)
        //console.log(index)
    }
  return (
    <div className='side-bar'>
        <img src={Logo} alt="Willtilogo" />

        <Link 
            to="" 
            className={active === 1 ? 'nav-el-active' : 'nav-el'}
            onClick={()=> toggleTab(1)}
            >
            <i className="bi bi-list icon"></i>
            <span className='nav'>Dashbaord</span>
        </Link>

        <span className='nav-category'>User Management </span>

        <Link to="" 
            className={active === 2 ? 'nav-el-active' : 'nav-el'} 
            onClick={()=> toggleTab(2)}>

            <i className="bi bi-person icon"></i>
            <span className='nav'>Users</span>
        </Link>

        <Link to="" 
            className={active === 3 ? 'nav-el-active' : 'nav-el'} 
            onClick={()=> toggleTab(3)}>
            <i className="bi bi-people icon"></i>
            <span className='nav'>Drivers</span>
        </Link>

        <Link to="" 
            className={active === 4 ? 'nav-el-active' : 'nav-el'} 
            onClick={()=> toggleTab(4)}>
            <i className="bi bi-bus-front-fill icon"></i>
            <span className='nav'>Agencies</span>
        </Link>

        <span className="nav-category">Rides & Bookings</span>

        <Link to="" 
            className={active === 5 ? 'nav-el-active' : 'nav-el'} 
            onClick={()=> toggleTab(5)}>
            <i className="bi bi-car-front-fill icon"></i>
            <span className='nav'>Rides</span>
        </Link>

        <Link to="" 
            className={active === 6 ? 'nav-el-active' : 'nav-el'} 
                onClick={()=> toggleTab(6)}>
            <i className="bi bi-calendar-check icon"></i>
            <span className='nav'>Bookings</span>
        </Link>

        <span className="nav-category">Cash Flow</span>

        <Link to="" 
            className={active === 7 ? 'nav-el-active' : 'nav-el'} 
            onClick={()=> toggleTab(7)}>
            <i className="bi bi-clipboard-data icon"></i>
            <span className='nav'>Revenue</span>
        </Link>

        <span className="nav-category">Support Center</span>

        <Link to="" 
            className={active === 8 ? 'nav-el-active' : 'nav-el'} 
                onClick={()=> toggleTab(8)}>
            <i className="bi bi-chat-dots icon"></i>
            <span className='nav'>Support</span>
        </Link>

        <span className="nav-category">App Settings</span>
        <Link to="" 
            className={active === 9 ? 'nav-el-active' : 'nav-el'} 
                onClick={()=> toggleTab(9)}>
            <i className="bi bi-gear icon"></i>
            <span className='nav'>Settings</span>
        </Link>

    </div>
  )
}
