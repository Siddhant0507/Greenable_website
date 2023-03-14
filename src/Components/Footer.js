import React from 'react'
import './footer.css';
import { BsFacebook } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";
 import {BsTwitter} from "react-icons/bs";
function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='row'>
            
            <div className='column'>
            <h2>GREENABLE LTD</h2>
            </div>

            <div className='column'>
                <h3>Learn More</h3>
                <p>About Us</p>
                <p>Privacy Policy</p>
            </div>

            <div className='column'>
                <h3>Contact Us</h3>
                <p>Email : contact@charzit.com</p>
                <p>Contact No. : 123456789</p>
            </div>

            <div className='column'>
                <h3>Social Media</h3>
                <p className='social'><BsFacebook/></p>
                <p className='social'><BsInstagram/></p>
                <p className='social'><BsTwitter/></p>
            </div>
        </div>
        <div className='footer-line'></div>
    </footer>
    </>
  )
}

export default Footer