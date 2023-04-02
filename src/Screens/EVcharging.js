import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Components/styles/evcharging.css";
function EVcharging() {
  return (
    <>
      <Navbar />

      <div className="ev-charging-img">
        <h1 className="ev-title">
          <span className="green-text">EV Charging</span> Station Installation
        </h1>
      </div>

      {/* Second Div */}

      <div className="container">
        <img src="../ev1.jpg" alt="big_image" className="ev1" />

        <div className="text-div">
          <h1 className="ev-heading">
            Offering a wide range of EV charge points
          </h1>
          <p className="big-desc">
            Lorem Ipsum is simply dummy text of the printing ntypesetting
            industry. Lorem Ipsum has been the industry's standarddummy text
            ever since the 1500s, when an unknown printer took a alley of type
            and scrambled it to make a type specimen book. xczn,ml lorem ipsum
          </p>
        </div>
      </div>
      <div className="small-container">
        <img src="../ev2.jpg" alt="big_image" className="ev2" />
        <p className="big-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* Third Div */}

      <div className="container">
        <div className="text-div">
          <h1 className="ev-heading">
            Offering a wide range of EV charge points
          </h1>
          <p className="big-desc">
            Lorem Ipsum is simply dummy text of the printing ntypesetting
            industry. Lorem Ipsum has been the industry's standarddummy text
            ever since the 1500s, when an unknown printer took a alley of type
            and scrambled it to make a type specimen book. xczn,ml lorem ipsum
          </p>
        </div>
        <img src="../ev3.jpg" alt="big_image" className="ev1" />
      </div>

      <div className="small-container1">
        <div>
        <p className="big-desc1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button className="get-btn">Get a Quote today</button>
        </div>
        <img src="../ev4.jpg" alt="big_image" className="ev2" />
      </div>


      <Footer/>
    </>
  );
}

export default EVcharging;
