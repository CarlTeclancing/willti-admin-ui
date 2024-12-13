import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from "../../components/SideBar"
import TopBar from "../../components/TopBar"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Route } from 'react-router-dom'
import imgBus from '../../assets/images/Rectangle 24521.png'

export default function AgencyDetails() {

    const location = useLocation()
    var { agency } = location.state || {} // Destructure item from state
    const [turgle, setTurgle] = useState(1)
    const HandleTurgle = (index)=>{
        setTurgle(index)
    }

  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Agencies Details' />
            <div className="column">
                <div className="row-100">

                    <h3>Agency Management | {agency.name}</h3>
                    <Button value="Add Branch"/>
                </div>
                <div className="row-100">
                    <img src={imgBus} alt="" />
                    <div className="section">
                        <h4>{agency.name}</h4>
                        <p>This is one of the best and oldest agency in Cameroon focusing on traveling from Yaoundé to bafoussam, yaounde to bamenda, bamenda to Yaoundé and all travels around the NWE, West Routs</p>
                        <span>Branches : 10</span> <span>No of Cars: 44</span>
                        <div className="col">

                            <button className="btn-secondary">65 Drivers</button>
                            <button className="btn-secondary">200 Orders</button>
                            <button className="btn-secondary">21mil Revenue</button>
                        </div>
                    </div>
                </div>
            <div className="row-100">
            <div className="row-fluid">
                    <div className="tabs">
                        <div 
                            className={turgle === 1?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(1)}
                            >
                            Branch Agencies
                        </div>

                        <div 
                            className={turgle === 2?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(2)}
                        >
                            Order History
                        </div>

                        <div 
                            className={turgle === 3?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(3)}
                        >
                            Wallet & Transactions
                        </div>

                        <div 
                            className={turgle === 4?'tab-el active-tab':'tab-el'}
                            onClick={() =>HandleTurgle(4)}
                        >
                            Admin & User Account
                        </div>
                    </div>
                    </div>
            </div>
                
            </div>

        </div>

    </div>
  )
}
