import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function Rides() {
  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Rides' />
        </div>
    
  </div>
  )
}
