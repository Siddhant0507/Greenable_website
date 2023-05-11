import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/styles/about.css";
import Footer from "../Components/Footer";
import "react-multi-carousel/lib/styles.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-div">
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="container">
        <img src="../about1.jpg" alt="big_image" className="ev1" />

        <div className="text-div">
          <h1 className="ev-heading">
            Our Mission
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
        <img src="../about2.jpg" alt="big_image" className="ev2" />
        <p className="big-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

    
      <div className="card-maindiv">
        <div className="about-card-body">
          <img src="../card1.jpg" className="review-img" />
          <h2>Sara Grant</h2>
          <p className="review-desc-about">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
        </div>

        <div className="about-card-body">
          {" "}
          <img src="../card2.jpg" className="review-img" />
          <h2>Sara Grant</h2>
          <p className="review-desc-about">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
        </div>

        <div className="about-card-body">
          {" "}
          <img src="../card3.jpg" className="review-img" />
          <h2>Sara Grant</h2>
          <p className="review-desc-about">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
        </div>
      </div>

      {/* <h1 className="about-heading-title">
        We’ are committed to make the World Cleaner
      </h1>
      <p className="about-progress-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <div className="progressbar-div">
        <div>
          <div className="about-container">
            <div className="circular-progress">
              <span className="progress-value">90%</span>
            </div>
          </div>
          <h2 className="progress-heading2">Lorem Ipsum Sit Amet</h2>
          <p className="progress-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
        </div>

        <div className="progressbar-div">
          <div className="about-container">
            <div className="circular-progress">
              <span className="progress-value">50%</span>
            </div>
          </div>
          <h2 className="progress-heading2">Lorem Ipsum Sit Amet</h2>
          <p className="progress-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
        </div>

        <div className="progressbar-div">
          <div className="about-container">
            <div className="circular-progress">
              <span className="progress-value">80%</span>
            </div>
          </div>
          <h2 className="progress-heading2">Lorem Ipsum Sit Amet</h2>
          <p className="progress-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
        </div>
      </div> */}

      <Footer/>
    </>
  );
}

export default About;
