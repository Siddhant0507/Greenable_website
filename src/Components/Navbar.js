import React from "react";
import "./styles/navbar.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav-div">
        <h3 className="logo">GRENEWABLE LTD</h3>

        <nav className="nav-menu">
          <Link to='/' className="nav-options">Home</Link>
          <a href="/SolarPanel" className="nav-options">Solar Panel</a>
          <a href="/EVcharging" className="nav-options">EV Charging </a>
          <a href="About" className="nav-options">AboutUs</a>
          <a href="/Contact" className="nav-options">ContactUs</a>
        </nav>

        <button className="btn">Request a demo < AiOutlineArrowRight/> </button>
        
      </div>
    </>
  );
}

export default Navbar;
