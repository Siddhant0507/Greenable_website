import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/styles/contact.css";
import Footer from "../Components/Footer"
function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-div">
        <h1 className="contact-title">
          <span className="green-text">Contact</span> Us
        </h1>
      </div>

      <div className="contact-heading-div">
        <h1 className="contact-heading">
          Get in <span className="green-text">Touch</span>
        </h1>
        <p className="contact-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>

      <div className="div-grid">
        <div className="contact-info">
          <h2> contact Number </h2>
          <p>123456677</p>
          <p>123455677</p>

          <h2>Email id</h2>
          <p>example@gmail.com</p>

          <h2>Location</h2>
          <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
        </div>

        <input className="form-input form-input-div" placeholder="First Name" />

        <input className="form-input form-input-div" placeholder="last name" />

        <input
          className="form-input form-input-div"
          placeholder="Phone Number "
        />

        <input className="form-input form-input-div" placeholder="Email ID" />

        <input
          className="form-input form-input-div input-service "
          placeholder="Services"
        />

        <input
          className="form-input form-input-div input-service"
          placeholder="Msg us "
        />
      </div>
      <div  className="map-div">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.594549107508!2d73.81598231487901!3d18.547215587393517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6adfb28f53%3A0x23f1871914c9360b!2sG.R%20Greenlife%20Energy%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1680211366938!5m2!1sen!2sin"
          width="100%"
          height="688px"
          title="google-map-location"
         
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer/>
    </>
  );
}

export default Contact;
