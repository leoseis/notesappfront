import React  from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({searchText}) => {
  return (
   <>
   <NavBar searchText={searchText}/>
   <ToastContainer/>
   < Outlet/>
   </>
  )
}

export default MainLayout
