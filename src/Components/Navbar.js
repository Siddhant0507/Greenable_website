import React from "react";
import "./styles/navbar.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav-div">
        <h3 className="logo">GRENEWABLE LTD</h3>

        <nav className="nav-menu">
          <ul>
            <li className="nav-options">
              {" "}
              <NavLink to="/" className="navLink">Home</NavLink>{" "}
            </li>
            <li className="nav-options">
              {" "}
              <NavLink to="/SolarPanel" className="navLink">SolarPanel</NavLink>{" "}
            </li>
            <li className="nav-options">
              {" "}
              <NavLink to="/EVcharging" className="navLink">Evcharging</NavLink>{" "}
            </li>
            <li className="nav-options">
              {" "}
              <NavLink to="/About" className="navLink">About</NavLink>{" "}
            </li>
            <li className="nav-options">
              <NavLink to="/Contact" className="navLink">Contact</NavLink>{" "}
            </li>
          </ul>
        </nav>

        <button className="btn">
          Request a demo <AiOutlineArrowRight />{" "}
        </button>
      </div>
    </>
  );
}

export default Navbar;
