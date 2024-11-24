import React, { useState } from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"


export default function Dashbaord() {
    
    useState(1)
  return (
    <div className="container">

    <SideBar setActive={1} />
    <div className="narrow">
      <TopBar PageTitle='Dashboard' />
    </div>
    
  </div>
  )
}
