import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function Support() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Support' />
        </div>
    
  </div>
  )
}
