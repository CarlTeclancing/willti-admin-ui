import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideBar from "../../components/SideBar"
import TopBar from "../../components/TopBar"
import User from '../../assets/icons/user.svg'
import CarImg from '../../assets/icons/car.png'
import Rating from '../../assets/icons/vip.svg'
import Bus from '../../assets/icons/bus.png'
import Button from '../../components/Button'

export default function RidesDetails() {
    const location = useLocation()
    const { user, rideData } = location.state

    return (

        //modal for this page desplay
        <div className="modal-container">
            <div className="modal">
                <Link to="/dashboard/users/user-detials" state={ {user, rideData} } className="back"><i class="bi bi-x-square-fill close"></i></Link>
                
                <div className="map">

                </div>
                <h4>{rideData.time}</h4>
                <div className="location">
                    <div className="circle-location red"></div>
                    <p>{rideData.start}</p>
                </div>
                <div className="location">
                    <div className="circle-location blue"></div>
                    <p>{rideData.end}</p>
                </div>
                <h1>Total ...................................................{rideData.price}cfa</h1>
                <h4>Driver</h4>
                <div className="driver">
                    <img src={User} className='img' alt="" />
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>

            </div>
        </div>
    
    
  )
}
