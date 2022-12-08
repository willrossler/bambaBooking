import React from "react";
import bLogo from "../assets/logos/bLogo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <nav className="navbar navbar-dark py-5">
          <div className="container d-flex flex-row justify-content-start">
            <a href="/">
              <img className="bLogo navbar-brand" src={bLogo}></img>
            </a>

            <div className="row ">
              <hr
                style={{
                  borderTop: "2px solid white",
                  width: "230px",
                  opactity: "1",
                  transform: "rotate(90deg)",
                }}
              />
              <div className="col text-start text-white ">
                <p style={{ marginBottom: "0" }}>Bamba</p>
                <p style={{ marginBottom: "0", opacity: "0.5" }}>
                  Lützengatan 10
                </p>
                <p style={{ marginBottom: "0", opacity: "0.5" }}>
                  11520 Stockholm
                </p>
                <p style={{ opacity: "0.5" }}>Sweden</p>
                <p style={{ marginBottom: "0" }}>info@bamba.se</p>
                <p style={{}}>www.bambaostermalm.se</p>
                <p style={{ marginBottom: "0" }}>Instagram@bambaostermalm</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
