import React from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SiteLayout from './SiteLayout'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Logout from '../pages/Logout'
import ForgotPassword from '../pages/ForgotPassword'
import AccountProfile from '../pages/AccountProfile'
import ProtectedRoute from '../components/ProtectedRoute'



const router = createBrowserRouter(
  createRoutesFromElements(

      

    <Route path="/" element={<SiteLayout />} >
      <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUp  />} />
         <Route path="/logout" element={<Logout  />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route path="/account-profile" element={
        <ProtectedRoute><AccountProfile /></ProtectedRoute>
         } />
        
        

      
    </Route>



    
  )
)


function SiteRoot() {
  return <RouterProvider router={router} />
}

export default SiteRoot