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
        <p className="footer-link">Filosofi</p>
      </Link>
      <Link to="/training" style={linkStyles}>
        <p className="footer-link">Träning</p>
      </Link>
      <Link to="/contact" style={linkStyles}>
        <p className="footer-link">Kontakt</p>
      </Link>
      <Link to="/shop" style={linkStyles}>
        <p className="footer-link">Om Oss</p>
      </Link>
      <Link to="/booking" style={linkStyles}>
        <p className="footer-link">Boka</p>
      </Link>
    </div>
  );
};

export default FooterLinks;
