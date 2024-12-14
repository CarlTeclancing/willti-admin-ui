import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from "../../components/SideBar"
import TopBar from "../../components/TopBar"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Route } from 'react-router-dom'
import Wallet from '../../assets/icons/wallet.svg'
import ArrowLeft from '../../assets/icons/arrow-right.svg'
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
// user details


const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", number: "+1 234 567 8901", gender: "Male", address: "123 Main St, Springfield, IL", country: "USA", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", number: "+44 7905 123456", gender: "Female", address: "456 Oak St, London, UK", country: "UK", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", number: "+61 411 234 567", gender: "Female", address: "789 Maple St, Sydney, Australia", country: "Australia", status: "Active" },
    { id: 4, name: "Bob Brown", email: "bob.brown@example.com", number: "+1 987 654 3210", gender: "Male", address: "101 Pine St, Toronto, Canada", country: "Canada", status: "Pending" },
    { id: 5, name: "Charlie Davis", email: "charlie.davis@example.com", number: "+1 123 456 7890", gender: "Male", address: "202 Birch St, New York, NY", country: "USA", status: "Active" },
    { id: 6, name: "David Lee", email: "david.lee@example.com", number: "+33 1 70 18 12 34", gender: "Male", address: "303 Cedar St, Paris, France", country: "France", status: "Active" },
    { id: 7, name: "Emma Wilson", email: "emma.wilson@example.com", number: "+49 170 2345678", gender: "Female", address: "404 Elm St, Berlin, Germany", country: "Germany", status: "Inactive" },
    { id: 8, name: "Frank Harris", email: "frank.harris@example.com", number: "+1 555 123 4567", gender: "Male", address: "505 Maple Ave, Los Angeles, CA", country: "USA", status: "Active" },
    { id: 9, name: "Grace Martinez", email: "grace.martinez@example.com", number: "+1 213 987 6543", gender: "Female", address: "606 Pine St, Miami, FL", country: "USA", status: "Pending" },
    { id: 10, name: "Henry Clark", email: "henry.clark@example.com", number: "+1 718 345 6789", gender: "Male", address: "707 Oak Ave, Brooklyn, NY", country: "USA", status: "Inactive" },
    { id: 11, name: "Ivy Thompson", email: "ivy.thompson@example.com", number: "+44 7401 123456", gender: "Female", address: "808 Cedar St, Manchester, UK", country: "UK", status: "Active" },
    { id: 12, name: "Jack White", email: "jack.white@example.com", number: "+34 612 345678", gender: "Male", address: "909 Birch St, Madrid, Spain", country: "Spain", status: "Active" },
    { id: 13, name: "Katherine Young", email: "katherine.young@example.com", number: "+1 313 444 5555", gender: "Female", address: "1010 Oak St, Detroit, MI", country: "USA", status: "Pending" },
    { id: 14, name: "Leo King", email: "leo.king@example.com", number: "+86 138 1234 5678", gender: "Male", address: "1111 Willow St, Beijing, China", country: "China", status: "Active" },
    { id: 15, name: "Mona Adams", email: "mona.adams@example.com", number: "+61 412 345 678", gender: "Female", address: "1212 Pine St, Melbourne, Australia", country: "Australia", status: "Inactive" },
    { id: 16, name: "Nathan Scott", email: "nathan.scott@example.com", number: "+1 404 555 1234", gender: "Male", address: "1313 Maple Ave, Atlanta, GA", country: "USA", status: "Active" },
    { id: 17, name: "Olivia Thomas", email: "olivia.thomas@example.com", number: "+44 7520 567890", gender: "Female", address: "1414 Elm St, Glasgow, UK", country: "UK", status: "Active" },
    { id: 18, name: "Paul Harris", email: "paul.harris@example.com", number: "+91 98765 43210", gender: "Male", address: "1515 Oak St, Mumbai, India", country: "India", status: "Pending" },
    { id: 19, name: "Quincy Walker", email: "quincy.walker@example.com", number: "+49 151 23456789", gender: "Male", address: "1616 Birch St, Frankfurt, Germany", country: "Germany", status: "Active" },
    { id: 20, name: "Rachel Green", email: "rachel.green@example.com", number: "+1 202 555 7890", gender: "Female", address: "1717 Pine Ave, Washington, DC", country: "USA", status: "Inactive" },
    { id: 21, name: "Steve King", email: "steve.king@example.com", number: "+33 6 12 34 56 78", gender: "Male", address: "1818 Oak St, Lyon, France", country: "France", status: "Pending" },
    { id: 22, name: "Tina Hall", email: "tina.hall@example.com", number: "+44 7300 876543", gender: "Female", address: "1919 Cedar St, Bristol, UK", country: "UK", status: "Active" },
    { id: 23, name: "Ursula Carter", email: "ursula.carter@example.com", number: "+1 555 678 1234", gender: "Female", address: "2020 Willow Ave, Houston, TX", country: "USA", status: "Inactive" },
    { id: 24, name: "Victor Murphy", email: "victor.murphy@example.com", number: "+1 617 987 6543", gender: "Male", address: "2121 Maple St, Boston, MA", country: "USA", status: "Active" },
    { id: 25, name: "Wendy Lewis", email: "wendy.lewis@example.com", number: "+61 431 987 654", gender: "Female", address: "2222 Elm St, Perth, Australia", country: "Australia", status: "Pending" },
    { id: 26, name: "Xander Wood", email: "xander.wood@example.com", number: "+1 512 234 5678", gender: "Male", address: "2323 Oak St, Austin, TX", country: "USA", status: "Active" },
    { id: 27, name: "Yvonne Wilson", email: "yvonne.wilson@example.com", number: "+44 7865 432109", gender: "Female", address: "2424 Birch Ave, Leeds, UK", country: "UK", status: "Inactive" },
    { id: 28, name: "Zachary Moore", email: "zachary.moore@example.com", number: "+1 323 555 6789", gender: "Male", address: "2525 Pine St, San Francisco, CA", country: "USA", status: "Active" },
    { id: 29, name: "Annie King", email: "annie.king@example.com", number: "+1 805 555 3456", gender: "Female", address: "2626 Willow St, Santa Barbara, CA", country: "USA", status: "Inactive" },
    { id: 30, name: "Benjamin Clark", email: "benjamin.clark@example.com", number: "+44 7389 123456", gender: "Male", address: "2727 Elm St, Bristol, UK", country: "UK", status: "Pending" },
    { id: 31, name: "Catherine Lee", email: "catherine.lee@example.com", number: "+61 410 654 987", gender: "Female", address: "2828 Birch St, Adelaide, Australia", country: "Australia", status: "Active" },
    { id: 32, name: "Derek Scott", email: "derek.scott@example.com", number: "+33 7 12 34 56 78", gender: "Male", address: "2929 Cedar St, Toulouse, France", country: "France", status: "Pending" },
    { id: 33, name: "Ella Bennett", email: "ella.bennett@example.com", number: "+44 7500 987654", gender: "Female", address: "3030 Pine Ave, Nottingham, UK", country: "UK", status: "Active" },
    { id: 34, name: "Frank Wright", email: "frank.wright@example.com", number: "+1 408 555 7890", gender: "Male", address: "3131 Oak St, San Jose, CA", country: "USA", status: "Active" },
    { id: 35, name: "Georgia Jackson", email: "georgia.jackson@example.com", number: "+49 160 1234567", gender: "Female", address: "3232 Willow St, Munich, Germany", country: "Germany", status: "Inactive" },
    { id: 36, name: "Hannah Martin", email: "hannah.martin@example.com", number: "+33 1 70 01 23 45", gender: "Female", address: "3333 Oak St, Lyon, France", country: "France", status: "Pending" },
    { id: 37, name: "Ian Brooks", email: "ian.brooks@example.com", number: "+1 424 555 9876", gender: "Male", address: "3434 Birch St, Pasadena, CA", country: "USA", status: "Active" },
    { id: 38, name: "Jessica Taylor", email: "jessica.taylor@example.com", number: "+1 530 555 2345", gender: "Female", address: "3535 Pine Ave, Sacramento, CA", country: "USA", status: "Inactive" },
    { id: 39, name: "Kevin Harris", email: "kevin.harris@example.com", number: "+1 602 555 7890", gender: "Male", address: "3636 Willow St, Phoenix, AZ", country: "USA", status: "Active" },
    { id: 40, name: "Laura Reed", email: "laura.reed@example.com", number: "+44 7352 987654", gender: "Female", address: "3737 Cedar St, Liverpool, UK", country: "UK", status: "Inactive" },
    { id: 41, name: "Mike Powell", email: "mike.powell@example.com", number: "+1 617 555 1234", gender: "Male", address: "3838 Oak St, Cambridge, MA", country: "USA", status: "Active" },
    { id: 42, name: "Nina Evans", email: "nina.evans@example.com", number: "+61 414 234 567", gender: "Female", address: "3939 Birch St, Sydney, Australia", country: "Australia", status: "Pending" },
    { id: 43, name: "Owen Harris", email: "owen.harris@example.com", number: "+1 415 555 6789", gender: "Male", address: "4040 Pine St, San Francisco, CA", country: "USA", status: "Active" },
    { id: 44, name: "Pamela King", email: "pamela.king@example.com", number: "+44 7551 234567", gender: "Female", address: "4141 Oak St, London, UK", country: "UK", status: "Inactive" },
    { id: 45, name: "Quinn Green", email: "quinn.green@example.com", number: "+1 303 555 4321", gender: "Male", address: "4242 Willow St, Denver, CO", country: "USA", status: "Active" },
    { id: 46, name: "Randy Wright", email: "randy.wright@example.com", number: "+49 170 2345678", gender: "Male", address: "4343 Birch St, Frankfurt, Germany", country: "Germany", status: "Pending" },
    { id: 47, name: "Sophie Morris", email: "sophie.morris@example.com", number: "+1 510 555 2345", gender: "Female", address: "4444 Pine Ave, Oakland, CA", country: "USA", status: "Active" },
    { id: 48, name: "Thomas Cooper", email: "thomas.cooper@example.com", number: "+44 7032 987654", gender: "Male", address: "4545 Cedar St, Edinburgh, UK", country: "UK", status: "Inactive" },
    { id: 49, name: "Ursula Carter", email: "ursula.carter@example.com", number: "+1 708 555 6789", gender: "Female", address: "4646 Willow St, Chicago, IL", country: "USA", status: "Pending" },
    { id: 50, name: "Victor James", email: "victor.james@example.com", number: "+33 1 80 12 34 56", gender: "Male", address: "4747 Elm St, Nice, France", country: "France", status: "Active" }
];


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
                        <table className="table">
                        
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Status</th>
                        </tr>
                        {users.map((user) =>(
                        
                        <tr className={count % 2 === 0 ?'table-r1':'table-r2'} key={user.id} >
                            <td>{count +=1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>{user.gender}</td>
                            <td>{user.address}</td>
                            <td>{user.country}</td>
                            <td><span className='verify'>{user.status}</span></td>
                            <td><Link to={`/dashboard/users/user-detials?id=${user.id}`} state={{ user }} className='btn-outline'>View More</Link></td>
                        </tr>
                        
                        
                        ) )}

                    </table>

                    </div>

                    <div 
                        className={turgle ===3?'tab-content':'none'}
                    >
                        <h4>Wallet And Transctions</h4>
                        <div className="row-fluid">
                            <div className="wallet">
                                <div className="row-200">
                                    <span><img src={Wallet} alt="" /> User Balance</span>
                                </div>

                                <div className="row-200">
                                    <h3>0.00FCFA</h3>
                                    <img src={ArrowLeft} alt="" />
                                </div>

                                <Button value='Edit Balance' className='w-100' />
                            </div>
                            

                        </div>

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
