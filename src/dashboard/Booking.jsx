import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function Booking() {
  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Bookings' />
        </div>
    
  </div>
  )
}
