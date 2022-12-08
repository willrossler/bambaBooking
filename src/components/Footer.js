import React from "react";
import bLogo from "../assets/logos/bLogo.svg";
import bambaLogo from "../assets/logos/bambaLogo.svg";


const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <nav className="navbar navbar-dark py-5">
          <div className="container d-flex justify-content-start sm-col">
            <a href="/">
              <img className="navbar-brand" src={bLogo}></img>
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

      {/* <hr
          style={{
            borderTop: "2px solid white",
            width: "230px",
            opactity: "1",
            transform: "rotate(90deg)",
          }}
        />
        <div className="col text-start text-white ">
          <p style={{ marginBottom: "0" }}>— PHILOSPHY</p>
          <p style={{ marginBottom: "0", opacity: "0.5" }}>— TRAINING</p>
          <p style={{ marginBottom: "0", opacity: "0.5" }}>— CONTACT</p>
          <p style={{ opacity: "0.5" }}>— BOOK CLASSES</p>
        </div> */}
    </>
    // <footer
    //   style={{ backgroundColor: "black" }}
    //   className="p-5 d-flex text-white text-center position-relative"
    // >
    //   <div
    //     style={{ gap: "" }}
    //     className="container d-flex flex-row justify-content-start"
    //   >
    //     {/* <p className="lead">Copyright &copy; 2022 Bamba AB</p> */}
    //     <img src={bLogo} />
    //     <div className="contactInfo text-start">
    //       <p>Bamba</p>
    //       <p>Lützengatan 10</p>
    //       <p>11520 Stockholm</p>
    //       <p>Sweden</p>
    //       <p>info@bamba.se</p>
    //       <p>www.bambaostermalm.se</p>
    //       <p>Instagram @bambaostermalm</p>
    //     </div>

    //     <a href="/" className="position-absolute bottom-0 end-0 p-5">
    //       <i className="bi bi-arrow-up-circle h1 color-white"></i>
    //     </a>
    //   </div>
    // </footer>
  );
};

export default Footer;
