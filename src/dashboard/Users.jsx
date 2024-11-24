import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function Users() {
  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Users' />
            <div className="column">
            <h1>User Management (345)</h1>
                <div className="row">
                    
                </div>
            </div>
        </div>
    
  </div>
  )
}
