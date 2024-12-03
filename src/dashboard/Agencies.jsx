import React from 'react'
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Agencies() {

  const agencies = [
    {
      id:1,
      name: "VATICAN EXPRESS",
      braches: 12,
      cars: 33,
      address: "Yaounde Cameroon",
      status:1
    
    },
    {
      id:2,
      name: "AMOUMEZAM EXPRESS",
      braches: 7,
      cars: 55,
      address: "Yaounde Cameroon",
      status:1
    
    },
    {
      id:1,
      name: "VATICAN EXPRESS",
      braches: 12,
      cars: 33,
      address: "Yaounde Cameroon",
      status:1
    
    },
    {
      id:2,
      name: "AMOUMEZAM EXPRESS",
      braches: 7,
      cars: 55,
      address: "Yaounde Cameroon",
      status:1
    
    },
    {
      id:1,
      name: "VATICAN EXPRESS",
      braches: 12,
      cars: 33,
      address: "Yaounde Cameroon",
      status:1
    
    },
    {
      id:2,
      name: "AMOUMEZAM EXPRESS",
      braches: 7,
      cars: 55,
      address: "Yaounde Cameroon",
      status:1
    
    },
  ]

  let count = 0
  return (
    <div className="container">

        <SideBar />
        <div className="narrow">
            <TopBar PageTitle='Agencies' />
            <div className="column">
              <div className="row-100">
                <h3>Agency Management</h3>
                <Button value="Add Agency" />
              </div>

              <div className="row-fluid">
              <table className="table">
                        
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Branches</th>
                            <th>No of Cars</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                        {agencies.map((agency) =>(
                        
                        <tr className={count % 2 === 0 ?'table-r1':'table-r2'} key={agency.id} >
                            <td>{count +=1}</td>
                            <td>{agency.name}</td>
                            <td>{agency.braches}</td>
                            <td>{agency.cars}</td>
                            <td>{agency.address}</td>
                            <td><span className='verify'>{agency.status}</span></td>
                            <td><Link to={`/dashboard/agency/agency-detials?id=${agency.id}`} state={{ agency }} className='btn-outline'>View More</Link></td>
                        </tr>
                        
                        
                        ) )}

                    </table>
              </div>
            </div>

        </div>
    
  </div>
  )
}
