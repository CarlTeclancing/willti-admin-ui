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
import userRating from '../../assets/icons/userrating.png'
import qrCode from '../../assets/icons/qrcode.png'

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
    var { user } = location.state || {} // Destructure item from state
    const [turgle, setTurgle] = useState(1)
    const [modalValueRides, setModalValueRides] = useState(0)
    const [modalValueBooking, setModalValueBooking] = useState(0)

    var [rideData, setRideData ] =useState({
        time: null,
        start:null,
        end: null,
        price:null,
        car:null,
    })

    var [bookingData, setBookingData ] =useState({
        time: null,
        start:null,
        end: null,
        price:null,
        car:null,
    })

    

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

const ModalRides = (index, rideData)=>{
    if(index===1){
        setRideData(rideData)
        setModalValueRides(index)
    }else{
        setRideData({
            time: null,
            start:null,
            end: null,
            price:null,
            car:null,
        })
        setModalValueRides(index)
    }
    
    
}

const ModalBooking = (index, bookingData)=>{
    if(index===1){
        setBookingData(bookingData)
        setModalValueBooking(index)
    }else{
        setBookingData({
            time: null,
            start:null,
            end: null,
            price:null,
            car:null,
        })
        setModalValueBooking(index)
    }
    
}
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
                                        <span 
                                            onClick={()=>ModalRides(1, rideData)} 
                                            state={{ user, rideData }} 
                                            className='btn-outline'
                                        >
                                            View More
                                        </span></td>
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
                                    <td><img src={Bus} alt="" /></td>
                                    <td>
                                        <span 
                                            onClick={()=>ModalBooking(1, bookingData)} 
                                            state={{ user, booking }} 
                                            className='btn-outline'
                                        >
                                            View More
                                        </span></td>
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



        {/* modal for rides orders */}
        <div className={modalValueRides == 1?"modal-container":"none"}>
            <div className="modal">
                <div className="close">
                    <i class="bi bi-x-square-fill" onClick={()=>ModalRides(0)}></i>
                </div>
                
                <div className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127380.10837455055!2d11.550719999999998!3d3.8895616000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1733377803347!5m2!1sen!2scm" 
                        allowFullScreen 
                        loading="lazy" 
                        className='map-1'
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Responsive Google Map'>
                        
                    </iframe>
                </div>
                <h4>{rideData.time? `${rideData.time}`:""}</h4>
                <div className="location">
                    <div className="circle-location red"></div>
                    <p>{rideData.start? `${rideData.start}`:""}</p>
                </div>
                <div className="location">
                    <div className="circle-location blue"></div>
                    <p>{rideData.end? `${rideData.end}`:""}</p>
                </div>
                <h1>Total ...................................................{rideData.price? `${rideData.price}`:""}cfa</h1>
                <h4>Driver</h4>
                <div className="driver">
                    <img src={User} className='img' alt="" />
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="rating">
                        <h4>Ratings</h4>
                        <img src={userRating} alt="" />
                    </div>
                </div>
                <div className="driver flex">
                    <h4>White Corlla</h4>
                    <img src={rideData.car} alt="" />
                    <p>Economy <span className='verify'>Available</span></p>
                </div>

            </div>
        </div>

        
        {/* modal for bookings orders */}
        <div className={modalValueBooking == 1?"modal-container":"none"}>
        <div className="modal">
                <div className="close">
                    <i class="bi bi-x-square-fill" onClick={()=>ModalBooking(0)}></i>
                </div>
            <h4>Vatican Express</h4>
            

                <div className="location">
                    <div className="circle-location blue"></div>
                    <span>Bamenda</span><br/>

                    
                    <div className="circle-location red"></div>
                    <span>Yaounde</span>
                    
                </div>
                <div className="row-200">
                            <span>Price</span>
                            <span>6000cfa</span>
                    </div>

                    <div className="row-200">
                            <span>Booking fee</span>
                            <span>500cfa</span>
                    </div>
                    <div className="row-200">
                            <span>Transaction ID</span>
                            <span>123456789225</span>
                    </div>
                <h4>Ticket</h4>
                <div className="box">

                <div className="row-200">

                    <div className="row-100">
                        <h3>VATICAN <br/>Express</h3>
                        <span className='small'>www.vaticanexpress.com</span><br/>
                        <span className='small'>booking@vaticanexpress.com</span><br/>
                        <span className='small'>236 672765292</span><br/>
                    </div>
                    
                    <img className='img-1' src={qrCode} alt="" />

                    
                </div><hr />
                <h3 className='text-center'>Mr Yuven Carlson</h3>
                    <div className="row-200">
                        <span>Passenger code</span>
                        <span>03E0DD</span>
                    </div>

                    <div className="row-200">
                        <span>Travel Type</span>
                        <span>One way</span>
                    </div>
                    <div className="row-200">
                        <span>Departure location</span>
                        <span>Bamenda</span>
                    </div>
                    <div className="row-200">
                        <span>Amount</span>
                        <span>6500cfa</span>
                    </div>
                    <img src={Rating} alt="" />
                    <div className="row-200">
                        <span>Date</span>
                        <span>20/12/2024</span>
                    </div>

                    <div className="message">
                        <p className='text-center small'>Make sure to redeem this ticket once you arrive the agency to travel so as not to have problems with your travel</p>
                    </div>
                    <span className="btn-outline">
                        Download Reciep Now
                    </span>
                </div>
                
            


         </div>   
        </div>
        
    
    </div>
  )
}
