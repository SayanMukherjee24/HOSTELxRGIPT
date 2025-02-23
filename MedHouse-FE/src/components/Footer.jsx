import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/adminpage") {
    return null; // Hide Navbar for paths "/" and "/adminpage"
  }

  return (
    <>
      <div className="Footer">
        <div className="Footer-logo">
          <span style={{ color: "#FF4500" }}>HostelX</span>
          <span style={{ color: "#00FFFF" }}>RGIPT</span>
        </div>
        <div className="Footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/reservations">RESERVATIONS</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/checkout">CHECKOUT</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-contact">
          <address>
            Jais
            <br />
            Amethi,
            <br />
            U.P, <br />
            India. <br />
            +91 7631440002
          </address>
        </div>
      </div>
    </>
  );
};

export default Footer;
