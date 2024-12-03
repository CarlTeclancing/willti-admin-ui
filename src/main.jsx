import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './css/SideBar.css'
import './css/Pages.css'
import './css/Toggle.css'


//importing the routs from react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashbaord from './dashboard'
import Profile from './dashboard/Profile.jsx'
import Agencies from './dashboard/Agencies.jsx'
import Booking from './dashboard/Booking.jsx'
import Drivers from './dashboard/Drivers.jsx'
import Revenue from './dashboard/Revenue.jsx'
import Rides from './dashboard/Rides.jsx'
import Settings from './dashboard/settings.jsx'
import Support from './dashboard/support.jsx'
import Users from './dashboard/Users.jsx'
import UserDetails from './dashboard/users/UserDetails.jsx'
import BookingDetails from './dashboard/booking/BookingDetails.jsx'
import RidesDetails from './dashboard/rides/RidesDetails.jsx'
import DriversDetails from './dashboard/drivers/DriversDetails.jsx'
import AgencyDetails from './dashboard/agency/AgencyDetails.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashbaord />,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
  },

  {
    path: "/dashboard/agencies",
    element: <Agencies />,
  },
  {
    path: "/dashboard/bookings",
    element: <Booking />,
  },
  {
    path: "/dashboard/drivers",
    element: <Drivers />,
  },
  {
    path: "/dashboard/revenue",
    element: <Revenue />,
  },
  {
    path: "/dashboard/rides",
    element: <Rides />,
  },
  {
    path: "/dashboard/settings",
    element: <Settings />,
  },
  {
    path: "/dashboard/support",
    element: <Support />,
  },
  {
    path: "/dashboard/users",
    element: <Users />,
  },
  {
    path: "/dashboard/users/user-detials",
    element: <UserDetails />,
  },
  {
    path: "/dashboard/users/booking-details",
    element: <BookingDetails />,
  },
  {
    path: "/dashboard/users/ride-details",
    element: <RidesDetails />,
  },
  {
    path: "dashboard/drivers/driver-detials",
    element: <DriversDetails />,
  },
  {
    path: "dashboard/agency/agency-detials",
    element: <AgencyDetails />,
  },
  


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
