import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function Agencies() {
  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Agencies' />
        </div>
    
  </div>
  )
}
