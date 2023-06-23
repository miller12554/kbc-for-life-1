// import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { UserAuth } from '../../context/AuthContext'

// export default function Navbar() {
//  const { user, logout } = UserAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/');
//       console.log('You are logged out')
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   return (
// 	  <>
	  
// 		  <div className="flex -mb-auto space-x-10 justify-center bg-black h-20 w-full text-white">
// 		  <ul className="li"><NavLink to="/">Home</NavLink></ul>
// 		  <ul className="li"><NavLink to="/sign-in">Sign In</NavLink></ul>
// 		  <ul className="li"><NavLink to="/sign-up">Register</NavLink></ul>
// 		  <ul className="li"><NavLink onClick={handleLogout}>LogOut</NavLink></ul>
// 		  <ul className="li"><NavLink to="forgot-password">Forgot Passwprd</NavLink></ul>
// 		  <ul className="li"><NavLink to="account-profile">Account</NavLink></ul>
// 		  </div>
	  
	  
// 	  </>
//   )
// }