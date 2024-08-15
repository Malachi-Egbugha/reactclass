import React from 'react'
import './Header.css'
import {config} from "../../Services";

function Header() {
  var logout = ()=>{
    //clear local storage
    localStorage.removeItem("userid");
    //redirect to login page
    window.location.replace(config.routeconfig.login);
  }
  return (
    <div className='header'>
      <div className="logout">
        <button onClick={logout}>Logout</button>
      </div>
      
    </div>
  )
}

export default Header