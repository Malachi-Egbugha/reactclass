import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


export default function Auth() {
    var isauthenticated = true;
  return (
    isauthenticated ? <Outlet/>:<Navigate to="/"/>
  )
}
