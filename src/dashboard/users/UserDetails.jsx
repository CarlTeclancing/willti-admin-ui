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

export default function UserDetails() {
const rides = [
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    },
    {
        time: "Morning ride at 10:40",
        start: "Entre simbock",
        end: "Dovv Mendong",
        price: 1700,
        car:CarImg

    }
]
//object with bookings data

const bookings = [
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    {
        id:"1111234",
        agency: "Vatican Express",
        dep: "Yaounde",
        dest: "Bamenda",
        price: 6500,
        carType: Rating,
        car:Bus
    },
    
]
//assessing state from the url location variable
    
    const location = useLocation()
    const { user } = location.state || {} // Destructure item from state
    const [turgle, setTurgle] = useState(1)

    const HandleTurgle = (index)=>{
        setTurgle(index)
    }
    if (!user) return <p>No user data found.</p>; 

    
    const [currentPage, setCurrentPage] = useState(0);
    const ridesPerPage = 10;

    //to ident the row colors 
    var count = 0;

      // Slice the rides array to show only the rides for the current page
  const currentRides = rides.slice(currentPage * ridesPerPage, (currentPage + 1) * ridesPerPage);

  const handleNext = () => {
    // Make sure we don't go past the last page
    if ((currentPage + 1) * ridesPerPage < rides.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">

        <SideBar setActive={0} />
        <div className="narrow">
            <TopBar PageTitle='Profile'/>
            <div className="column">
                <div className="row-fluid">
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
                        
                            <table className="table">
                                <tr>
                                    <td>Id</td>
                                    <td>Time</td>
                                    <td>From</td>
                                    <td>To</td>
                                    <td>Charge</td>
                                    <td>Car</td>
                                    <td>Action</td>
                                </tr>
                                {currentRides.map((rideData)=>(

                                <tr className={count % 2 === 0 ?'table-r1':'table-r2'}>
                                    <td>{count +=1}</td>
                                    <td>{rideData.time}</td>
                                    <td>{rideData.start}</td>
                                    <td>{rideData.end}</td>
                                    <td><span className="verify">{rideData.price}</span></td>
                                    <td><img src={rideData.car} alt="" /></td>
                                    <td>
                                        <Link 
                                            to='/dashboard/users/user-detials/ride-details' 
                                            state={{ user, rideData }} 
                                            className='btn-outline'
                                        >
                                            View More
                                        </Link></td>
                                </tr>
                                ))}
                            </table>
                            <div className='pagination'>
                                <button onClick={handlePrevious} disabled={currentPage === 0} className='btn-outline'>Previous</button>
                                <button onClick={handleNext} disabled={(currentPage + 1) * ridesPerPage >= rides.length} className='btn-outline'>Next</button>
                            </div>
                        

                    </div>

                    <div 
                        className={turgle ===3?'tab-content':'none'}
                    >
                        <h4>Booking Hostory</h4>
                        <div className="row-fluid">
                            <table className="table">
                                <tr>
                                    <td>Id</td>
                                    <td>Transaction Id</td>
                                    <td>Agency</td>
                                    <td>Departure</td>
                                    <td>Destination</td>
                                    <td>Price</td>
                                    <td>Car Type</td>
                                    <td>Car</td>
                                    <td>Action</td>
                                </tr>
                                {bookings.map((booking)=>(

                                <tr className="table-r1">
                                    <td>{count +=1}</td>
                                    <td>{booking.id}</td>
                                    <td>{booking.agency}</td>
                                    <td>{booking.dep}</td>
                                    <td>{booking.dest}</td>
                                    <td><span className="verify">{booking.price}</span></td>
                                    <td><img src={booking.carType} alt="" /></td>
                                    <td><img src={booking.Bus} alt="" /></td>
                                    <td>
                                        <Link 
                                            to='/dashboard/users/booking-details' 
                                            state={{ user, booking }} 
                                            className='btn-outline'
                                        >
                                            View More
                                        </Link></td>
                                </tr>
                                ))}
                            </table>
                            <div className='pagination'>
                                <button onClick={handlePrevious} disabled={currentPage === 0} className='btn-outline'>Previous</button>
                                <button onClick={handleNext} disabled={(currentPage + 1) * ridesPerPage >= rides.length} className='btn-outline'>Next</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    
    </div>
  )
}
