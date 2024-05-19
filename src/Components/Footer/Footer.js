import "./Footer.css";
import React from 'react';
import {  FaHome,  FaMailBulk, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-container">
          <div className="left">
            <div className="location">
              <FaHome data-testid='home-icon' size={30} style={{ color: 'white', marginRight: "2rem" }} />
              <p>
                Ramachandrapuram<br />
                Andhra Pradesh <br />
              </p>
            </div>
            <div classname="phone">
              <h4><FaPhone data-testid='phone-icon' size={20} style={{ color: 'white', marginRight: "2rem" }} />+91 9876543210</h4>
            </div>
            <div classname="email">
              <h4><FaMailBulk  data-testid='email-icon' size={20} style={{ color: 'white', marginRight: "2rem" }} />eComm@gmail.com</h4>
            </div>
          </div>
          <div className="right">
            <h4 className="Cupid"> Code Cupid</h4>
            <p>
              In the realm of love, I'm a coding whiz,<br />
              By Debugging hearts with laughter and fizz!<br />
            </p>
       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
