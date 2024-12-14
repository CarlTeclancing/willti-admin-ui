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
import Wallet from '../../assets/icons/wallet.svg'
import ArrowLeft from '../../assets/icons/arrow-right.svg'
import idDemo from '../../assets/images/idDemo.png'
import TuggleSwitch from '../../components/TuggleSwitch'


export default function DriversDetails() {
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

// const rides = [
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     },
//     {
//         time: "Morning ride at 10:40",
//         start: "Entre simbock",
//         end: "Dovv Mendong",
//         price: 1700,
//         car:CarImg

//     }
// ]
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

        <SideBar setActive={3} />
        <div className="narrow">
            <TopBar PageTitle='Profile'/>
            <div className="column">
                <div className="row-fluid">
                    <div className="tabs">
                        <div 
                            className={turgle === 1?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(1)}
                            >
                            User Profile
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
                            Driver Documents
                        </div>

                        <div 
                            className={turgle === 4?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(4)}
                        >
                            Car Documents
                        </div>

                        <div 
                            className={turgle === 5?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(5)}
                        >
                            Security
                        </div>

                        <div 
                            className={turgle === 6?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(6)}
                        >
                            Wallet & Transactions
                        </div>
                    </div>
                    <div 
                        className={turgle ===1?'tab-content':'none'}
                    >
                        <h4>Driver Detiails</h4>
                        
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
                                {rides.map((ride)=>(

                                <tr className={count % 2 === 0 ?'table-r1':'table-r2'}>
                                    <td>{count +=1}</td>
                                    <td>{ride.time}</td>
                                    <td>{ride.start}</td>
                                    <td>{ride.end}</td>
                                    <td><span className="verify">{rideData.price}</span></td>
                                    <td><img src={ride.car} alt="" /></td>
                                    
                                </tr>
                                ))}
                            </table>
                        

                    </div>

                    <div 
                        className={turgle ===3?'tab-content':'none'}
                    >
                        
                        <div className="row-fluid">
                            <h3>ID Documents</h3>
                            <div className="row-100">
                                <div className="inner-section">
                                    <span className="small">Front of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>

                                <div className="inner-section">
                                    <span className="small">Back of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>
                            </div>

                            <h3>Drivers License Documents</h3>
                            <div className="row-100">
                                <div className="inner-section">
                                    <span className="small">Front of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>

                                <div className="inner-section">
                                    <span className="small">Back of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div 
                        className={turgle ===4?'tab-content':'none'}
                    >
                        
                        <div className="row-fluid">
                        <h3>Car Documents</h3>
                            <div className="row-100">
                                <div className="inner-section">
                                    <span className="small">Front of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>

                                <div className="inner-section">
                                    <span className="small">Back of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>
                            </div>

                            <h3>Drivers License Documents</h3>
                            <div className="row-100">
                                <div className="inner-section">
                                    <span className="small">Front of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>

                                <div className="inner-section">
                                    <span className="small">Back of ID</span>
                                    <img src={idDemo} alt="" />
                                </div>
                            </div>

                        

                        </div>

                    </div>

                    <div 
                        className={turgle ===5?'tab-content':'none'}
                    >
                        
                        <div className="row-fluid">
                        <h3>Security</h3>
                        
                        <TuggleSwitch label='Access to Support' />
                        <TuggleSwitch label='Access to driver management ' />
                        <TuggleSwitch label='Access to Agency management ' />
                        <TuggleSwitch label='Admin Access' />

                        </div>

                    </div>

                    <div 
                        className={turgle ===6?'tab-content':'none'}
                    >
                        <h4>Wallet And Transctions</h4>
                        <div className="row-fluid">
                            <div className="wallet">
                                <div className="row-200">
                                    <span><img src={Wallet} alt="" /> User Balance</span>
                                </div>

                                <div className="row-200">
                                    <h3>0.00FCFA</h3>
                                    <img src={ArrowLeft} alt="" />
                                </div>

                                <Button value='Edit Balance' className='w-100' />
                            </div>

                            <h3>Recent Transactions</h3>
                            
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
