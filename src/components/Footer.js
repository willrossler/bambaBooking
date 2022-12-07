import React from "react";
import bLogo from "../assets/logos/bLogo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "black" }}
      className="p-5 d-flex text-white text-center position-relative"
    >
      <div
        style={{ gap: "" }}
        className="container d-flex flex-row justify-content-start"
      >
        {/* <p className="lead">Copyright &copy; 2022 Bamba AB</p> */}
        <img src={bLogo} />
        <div className="contactInfo text-start">
          <p>Bamba</p>
          <p>Lützengatan 10</p>
          <p>11520 Stockholm</p>
          <p>Sweden</p>
          <p>info@bamba.se</p>
          <p>www.bambaostermalm.se</p>
          <p>Instagram @bambaostermalm</p>
        </div>

        <a href="/" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1 color-white"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
