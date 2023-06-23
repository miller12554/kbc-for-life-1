import React from 'react'
// import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import BeauBar from '../components/navbar/BeauBar'
function SiteLayout() {
  return (
    <>
    <header>
      <BeauBar  />
    </header>
    <main>
    
    </main>
    <Outlet />
    </>
      
  )
}

export default SiteLayout