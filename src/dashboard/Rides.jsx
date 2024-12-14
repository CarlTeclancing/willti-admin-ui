import React from 'react'
import { useState } from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
import CarImg from '../assets/icons/car.png'

export default function Rides() {

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

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Rides' />
            <div className="column">
                    <h4>Rides Hostory</h4>
                        <div className="row-fluid">
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
                                            state={{ rideData }} 
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
  )
}
