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


    const agencyData = [
        { agencyBranch: "Central Station", noOfBusses: 12, monthlyRevenue: 45000, address: "123 Main St, Cityville", status: "Active" },
        { agencyBranch: "North Hub", noOfBusses: 8, monthlyRevenue: 32000, address: "456 North Ave, Uptown", status: "Inactive" },
        { agencyBranch: "East Terminal", noOfBusses: 15, monthlyRevenue: 56000, address: "789 East Blvd, Eastside", status: "Active" },
        { agencyBranch: "West Depot", noOfBusses: 10, monthlyRevenue: 40000, address: "101 West St, Westville", status: "Active" },
        { agencyBranch: "South Cross", noOfBusses: 6, monthlyRevenue: 25000, address: "202 South Rd, Southend", status: "Inactive" },
      ];
      
      // Generate 95 more unique entries
      for (let i = 1; i <= 95; i++) {
        const entry = {
          agencyBranch: `Branch ${i}`,
          noOfBusses: Math.floor(Math.random() * 20) + 5, // Random between 5 and 24
          monthlyRevenue: Math.floor(Math.random() * 100000) + 10000, // Random between 10k and 110k
          address: `${i} Example St, District ${Math.floor(Math.random() * 10) + 1}`, // District 1-10
          status: Math.random() > 0.5 ? "Active" : "Inactive", // Random Active/Inactive
        };
        agencyData.push(entry);
      }


      const agencyDataPerPage = 10;
      const [currentPage, setCurrentPage] = useState(0)


      //to ident the row colors 
      
  
        // Slice the agencyData array to show only the agencyData for the current page
    const currentAgencies = agencyData.slice(currentPage * agencyDataPerPage, (currentPage + 1) * agencyDataPerPage);
  
    const handleNext = () => {
      // Make sure we don't go past the last page
      if ((currentPage + 1) * agencyDataPerPage < agencyData.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
    let count = 0
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

                    <div 
                        className={turgle ===1?'tab-content':'none'}
                    >
                        <table className="table">
                            <tr>
                                <th>Id</th>
                                <th>Agency Branch</th>
                                <th>No of Busses</th>
                                <th>Monthly Revenue</th>
                                <th>Address</th>
                                <th>Status</th>

                            </tr>
                            {currentAgencies.map((data) => 
                            <tr className={count % 2 ===0 ? 'table-r1':'table-r2'}>
                                <td>{count ++}</td>
                                <td>{data.agencyBranch}</td>
                                <td>{data.noOfBusses}</td>
                                <td>{data.monthlyRevenue}</td>
                                <td>{data.address}</td>
                                <td>{data.status}</td>
                            </tr>  
        )}  
                        </table> 
                        <div className='pagination'>
                                <button onClick={handlePrevious} disabled={currentPage === 0} className='btn-outline'>Previous</button>
                                <button onClick={handleNext} disabled={(currentPage + 1) * agencyDataPerPage >= agencyData.length} className='btn-outline'>Next</button>
                        </div>
                    </div>

                    <div 
                        className={turgle ===2?'tab-content':'none'}
                    >
                        tab two 

                    </div>

                    <div 
                        className={turgle ===3?'tab-content':'none'}
                    >
                        tab three 

                    </div>

                    <div 
                        className={turgle ===4?'tab-content':'none'}
                    >
                        tab four 

                    </div>

 
                    </div>
            </div>
                
            </div>

        </div>

    </div>
  )
}
