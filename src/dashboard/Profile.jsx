import React from 'react'
import { useState } from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
import User from '../assets/icons/user.svg'
import TuggleSwitch from '../components/TuggleSwitch'
import Button from '../components/Button'

//setActive(0)


export default function Profile() {

    const user = [
        {
            key: 1,
            name: "yuven carlson",
            number: "672765292",
            dob: "22/04/2002",
            address: "Tradex Simbock",
            email: "info@willti.com",
            coutry: "Cameroon",
            city: "Yaounde",
            zipCode: 8989
    
        },
        
    ];

    const [turgle, setTurgle] = useState(1)

    const HandleTurgle = (index)=>{
        setTurgle(index)
    }
    
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
                            Preferences
                        </div>

                        <div 
                            className={turgle === 3?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(3)}
                        >
                            Security
                        </div>
                    </div>
                    <div 
                        className={turgle ===1?'tab-content':'none'}
                    >
                        <h4>Profile Detiails</h4>
                        {user.map((userDetails) =>(
                        <form action="" className='user-form'>
                            
                            <img src={User} alt="user image" className='profile-image'/>
                            <div className="sec-1">
                                <div className="form-el">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" value={userDetails.name} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="name">Phone Number</label>
                                    <input type="text" name="number" id="number" value={userDetails.number} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="name">Date of Birth</label>
                                    <input type="text" name="dob" id="dob" value={userDetails.dob} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" id="address" value={userDetails.address} disabled />
                                </div>
                            </div>

                            <div className="sec-1">
                                <div className="form-el">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={userDetails.email} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="country">Country</label>
                                    <input type="select" name="country" id="country" value={userDetails.coutry} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" id="city" value={userDetails.city} disabled />
                                </div>

                                <div className="form-el">
                                    <label htmlFor="zopCode">Zip Code</label>
                                    <input type="text" name="zopCode" id="zopCode" value={userDetails.zipCode} disabled />
                                </div>
                            </div>
                            
                        </form>
                        ))}
                    </div>

                    <div 
                        className={turgle ===2?'tab-content':'none'}
                    >
                        <h4>Access</h4>
                        
                        <TuggleSwitch label='Access to Support' />
                        <TuggleSwitch label='Access to driver management ' />
                        <TuggleSwitch label='Access to Agency management ' />
                        <TuggleSwitch label='Admin Access' />
                    </div>

                    <div 
                        className={turgle ===3?'tab-content':'none'}
                    >
                        <h4>Two-factor Authentication</h4>
                        <TuggleSwitch label='Enable or disable two factor authentication' />
                        <h4>Change Password</h4>
                        <Button value='Update Password' />
                    </div>

                </div>
            </div>
        </div>
    
    </div>
  )
}
