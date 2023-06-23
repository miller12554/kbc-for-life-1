import ReactDOM from 'react-dom/client'
import "./index.css";
import React from 'react';
import SiteRoot from './SiteRoot/SiteRoot'
import { AuthContextProvider } from './context/AuthContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthContextProvider >
  <SiteRoot />
</AuthContextProvider>
     
   
  </React.StrictMode>,
)
