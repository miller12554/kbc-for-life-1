import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  return
  <><Spinner />{children};</>
  
};

export default ProtectedRoute;


