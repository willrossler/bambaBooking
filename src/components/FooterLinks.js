import React from "react";
import { Link } from "react-router-dom";
import "../componentStyles/footerLinksStyles.css";

const linkStyles = {
  textDecoration: "none",
  color: "#fff",
};

const FooterLinks = () => {
  return (
    <div style={{ lineHeight: "45px" }} className="col text-start text-white ">
      <Link to="/home" style={linkStyles}>
        <p className="footer-link">PHILOSOPHY</p>
      </Link>
      <Link to="/training" style={linkStyles}>
        <p className="footer-link">TRAINING</p>
      </Link>
      <Link to="/contact" style={linkStyles}>
        <p className="footer-link">CONTACT</p>
      </Link>
      <Link to="/shop" style={linkStyles}>
        <p className="footer-link">SHOP</p>
      </Link>
      <Link to="/booking" style={linkStyles}>
        <p className="footer-link">BOOK CLASSES</p>
      </Link>
    </div>
  );
};

export default FooterLinks;
