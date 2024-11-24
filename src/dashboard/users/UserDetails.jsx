import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from "../../components/SideBar"
import TopBar from "../../components/TopBar"
import User from '../../assets/icons/user.svg'
import CarImg from '../../assets/icons/car.png'
import TuggleSwitch from '../../components/TuggleSwitch'
import Button from '../../components/Button'

export default function UserDetails() {

    
    const location = useLocation()
    const { user } = location.state || {} // Destructure item from state
    const [turgle, setTurgle] = useState(1)

    const HandleTurgle = (index)=>{
        setTurgle(index)
    }
    if (!user) return <p>No user data found.</p>; 
  return (
    <div className="container">

        <SideBar setActive={0} />
        <div className="narrow">
            <TopBar PageTitle='Profile'/>
            <div className="column">
                <div className="row">
                    <div className="tabs">
                        <div 
                            className={turgle === 1?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(1)}
                            >
                            My Profile
                        </div>

                        <div 
                            className={turgle === 2?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(2)}
                        >
                            Rides History
                        </div>

                        <div 
                            className={turgle === 3?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(3)}
                        >
                            Booking History
                        </div>
                    </div>
                    <div 
                        className={turgle ===1?'tab-content':'none'}
                    >
                        <h4>Profile Detiails</h4>
                        
                        <form action="" className='user-form'>
                            
                            <img src={User} alt="user image" className='profile-image'/>
                            <div className="sec-1">
                                <div className="form-el">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" value={user.name} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="name">Phone Number</label>
                                    <input type="text" name="number" id="number" value={user.number} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="name">Date of Birth</label>
                                    <input type="text" name="dob" id="dob" value={user.gender} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" id="address" value={user.address} disabled />
                                </div>
                            </div>

                            <div className="sec-1">
                                <div className="form-el">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={user.email} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="country">Country</label>
                                    <input type="select" name="country" id="country" value={user.country} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" id="city" value={user.address} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="zopCode">Zip Code</label>
                                    <input type="text" name="zopCode" id="zopCode" value={user.zipCode} disabled />
                                </div>
                            </div>
                            
                        </form>
                        
                    </div>

                    <div 
                        className={turgle ===2?'tab-content':'none'}
                    >
                        <h4>Rides Hostory</h4>
                        <div className="row-fluid">
                            <table className="table">
                                <tr>
                                    <td>Time</td>
                                    <td>From</td>
                                    <td>To</td>
                                    <td>Charge</td>
                                    <td>Car</td>
                                    <td>Action</td>
                                </tr>

                                <tr className="table-r1">
                                <td>Time</td>
                                    <td>{user.name}</td>
                                    <td>{user.name}</td>
                                    <td><span className="verify">{user.name}</span></td>
                                    <td><img src={CarImg} alt="" /></td>
                                    <td>{user.name}</td>
                                </tr>
                            </table>
                        </div>

                    </div>

                    <div 
                        className={turgle ===3?'tab-content':'none'}
                    >
                        <h4>Booking Hostory</h4>

                    </div>

                </div>
            </div>
        </div>
    
    </div>
  )
}
