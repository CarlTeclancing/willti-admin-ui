import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './css/SideBar.css'


//importing the routs from react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashbaord from './dashboard/Index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashbaord />,
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
