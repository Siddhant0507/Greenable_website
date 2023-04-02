import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Components/styles/solar.css";

function SolarPanel() {
  return (
    <>
      <Navbar />
      <div className="solar-div">
        <h1 className="solar-heading">Solar Panels and Battery Storage</h1>
      </div>

      {/* first div */}
      <div className="container">
        <img src="../solar1.png" alt="big_image" className="ev1" />
        <div className="text-div">
          <h1 className="ev-heading">Solar PV Panels</h1>
          <p className="big-desc">
            Lorem Ipsum is simply dummy text of the printing ntypesetting
            industry. Lorem Ipsum has been the industry's standarddummy text
            ever since the 1500s, when an unknown printer took a alley of type
            and scrambled it to make a type specimen book. xczn,ml lorem ipsum
          </p>
        </div>
      </div>
      <div className="small-container">
        <img src="../solar2.png" alt="big_image" className="ev2" />

        <div>
          <p className="small-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="get-btn">Get a Quote today .</button>
        </div>
      </div>

      {/* second div */}
      <div className="container">
        <div className="text-div">
          <h1 className="ev-heading">Solar Panel Installation</h1>
          <p className="big-desc">
            Lorem Ipsum is simply dummy text of the printing ntypesetting
            industry. Lorem Ipsum has been the industry's standarddummy text
            ever since the 1500s, when an unknown printer took a alley of type
            and scrambled it to make a type specimen book. xczn,ml lorem ipsum
          </p>
        </div>
        <img src="../solar3.png" alt="big_image" className="ev1" />
      </div>

      <div className="small-container1">
        <div>
          <p className="big-desc1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="get-btn">Get a Quote today</button>
        </div>
        <img src="../solar4.jpg" alt="big_image" className="ev2" />
      </div>

      {/* third div */}

      <div className="container">
        <img src="../solar5.jpg" alt="big_image" className="ev1" />
        <div className="text-div">
          <h1 className="ev-heading">Solar PV Panels</h1>
          <p className="big-desc">
            Lorem Ipsum is simply dummy text of the printing ntypesetting
            industry. Lorem Ipsum has been the industry's standarddummy text
            ever since the 1500s, when an unknown printer took a alley of type
            and scrambled it to make a type specimen book. xczn,ml lorem ipsum
          </p>
        </div>
      </div>
      <div className="small-container2">
        <img src="../solar6.jpg" alt="big_image" className="ev2" />

        <div>
          <p className="small-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="get-btn">Get a Quote today .</button>
        </div>
      </div>

      {/* fourth div */}
      <div className="container">
        <div className="text-div">
          <h1 className="ev-heading">Solar Panel Installation</h1>
          <p className="big-desc">
            Lorem Ipsum is simply dummy text of the printing ntypesetting
            industry. Lorem Ipsum has been the industry's standarddummy text
            ever since the 1500s, when an unknown printer took a alley of type
            and scrambled it to make a type specimen book. xczn,ml lorem ipsum
          </p>
        </div>
        <img src="../solar7.jpg" alt="big_image" className="ev1" />
      </div>

      <div className="small-container3">
        <div>
          <p className="big-desc1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="get-btn">Get a Quote today</button>
        </div>
        <img src="../solar8.jpg" alt="big_image" className="ev2" />
      </div>

<Footer/>
    </>
  );
}

export default SolarPanel;
