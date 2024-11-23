import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"


export default function Dashbaord(active) {
    var active =2
  return (
    <div className="container">

    <SideBar />
    <div className="narrow">
      <TopBar />
    </div>
    
  </div>
  )
}
