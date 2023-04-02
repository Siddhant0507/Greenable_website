import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/styles/about.css";


import "react-multi-carousel/lib/styles.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-div">
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="card-maindiv">
        <div className="about-card-body"></div>
        <div className="about-card-body"></div>
        <div className="about-card-body"></div>
      </div>

      <div className="about-container">
        <div className="circular-progress">
          <span className="progress-value">0%</span>
        </div>
      </div>
    </>
  );
}

export default About;
