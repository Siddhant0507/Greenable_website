import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Components/styles/solar.css";

function SolarPanel() {
  return (
    <>
      <Navbar />
      <div className="solar-div">
        <h1 className="solar-heading">Solar Power 101  A Quick Rundown of the Process </h1>
      </div>

      <div className="cotation">
        <h2 className="incentiveHeading">Financing Options and Solar Incentives</h2>
        <p>There are a variety of incentives available for solar PV systems, including tax credits, rebates, and grants. We can help you understand and take advantage of these incentives, reducing the cost of your solar PV system and maximizing your return on investment.</p>
      </div>

      <img src="../frame3.png" alt="img"/>

<Footer/>
    </>
  );
}

export default SolarPanel;
