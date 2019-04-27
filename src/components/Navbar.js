import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar(){
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand">ReactGallery</span>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                </li>
            </ul>
        </nav>
      </div>
    );
}

export default Navbar
