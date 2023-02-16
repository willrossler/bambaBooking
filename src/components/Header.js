import React, { useState, useEffect } from "react";
import { List, X } from "react-bootstrap-icons";
import bambaLogo from "../assets/logos/bambaLogo.svg";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../componentStyles/mobileMenuStyles.css";
import "../componentStyles/header.css";

function Header() {
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState("black");
  const [buttonBackground, setButtonBackground] = useState("white");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (location.pathname === "/booking") {
      setButtonBackground("#F5AAC9");
    } else {
      setButtonBackground("white");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/booking") {
      setHeaderColor("#3C469C");
    } else {
      setHeaderColor("black ");
    }
  }, [location.pathname]);

  return (
    <Navbar
      style={{
        width: "100%",
        backgroundColor: headerColor,
      }}
      expand="lg"
      className="navbar navbar-dark"
    >
      {/* todo synka logans med text-start genom länkar och knapp - CHECK */}
      {/* todo kolla transition för active link */}
      <Container>
        <Navbar.Brand>
          {/* logotyp storlek */}
          <Link to="/">
            <img className="bambaLogo" src={bambaLogo} alt="Bamba Logotype" />
          </Link>
        </Navbar.Brand>

        <List
          className="d-lg-none "
          style={{ color: "#fff", height: "40px", width: "40px" }}
          onClick={handleShow}
        />

        <Offcanvas
          style={{
            backgroundColor: "#3C469C",
            maxWidth: "100%",
            height: "100%",
            border: "none",
          }}
          show={show}
          onHide={handleClose}
          responsive="lg"
        >
          <Offcanvas.Header
            className="container"
            style={{
              maxWidth: "100%",
              backgroundColor: "#3C469C",
              height: "82px",
              paddingRight: "12px",
            }}
          >
            <Navbar.Brand>
              <Link className="d-lg-none" to="/">
                <img
                  className="bambaLogo"
                  src={bambaLogo}
                  alt="Bamba Logotype"
                />
              </Link>
            </Navbar.Brand>
            <X
              className="d-lg-none"
              style={{
                width: "40",
                height: "40",
                color: "#fff",
              }}
              onClick={handleClose}
            />
          </Offcanvas.Header>
          <hr className="shadowHr mobileView" />
          <Offcanvas.Body>
            <Nav id="navBar" className="ms-auto d-flex ">
              <Nav.Link>
                <Link
                  id="hoverLink"
                  to="/"
                  className={
                    location.pathname === "/"
                      ? " d-none d-lg-inline active-link mx-3"
                      : "d-none d-lg-inline mx-3"
                  }
                >
                  FILOSOFI
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  id="hoverLink"
                  to="/training"
                  className={
                    location.pathname === "/training" ||
                    location.pathname === "/boxing" ||
                    location.pathname === "/weightlifting" ||
                    location.pathname === "/bootcamp" ||
                    location.pathname === "/mentailtraining" ||
                    location.pathname === "/martialarts" ||
                    location.pathname === "/personaltraining"
                      ? "d-none d-lg-inline active-link mx-3"
                      : "d-none d-lg-inline mx-3"
                  }
                >
                  TRÄNING
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  id="hoverLink"
                  to="contact"
                  className={
                    location.pathname === "/contact"
                      ? "d-none d-lg-inline active-link mx-3"
                      : "d-none d-lg-inline mx-3"
                  }
                >
                  KONTAKT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  id="hoverLink"
                  to="/shop"
                  className={
                    location.pathname === "/shop"
                      ? "d-none d-lg-inline active-link mx-3"
                      : "d-none d-lg-inline mx-3"
                  }
                >
                  {" "}
                  OM OSS
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  id="bookingBtn"
                  style={{
                    backgroundColor: buttonBackground,
                  }}
                  to="/booking"
                  className="d-none d-lg-inline"
                >
                  {" "}
                  BOKA
                </Link>
              </Nav.Link>

              {/*  MOBILE LINKS */}
              <div className="mobileLinksStyle">
                <Nav.Link>
                  <Link to="/" className="d-lg-none " onClick={handleClose}>
                    — FILOSOFI
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/training"
                    className="d-lg-none "
                    onClick={handleClose}
                  >
                    — TRÄNING
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="contact"
                    className="d-lg-none "
                    onClick={handleClose}
                  >
                    {" "}
                    — KONTAKT
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/shop" className="d-lg-none" onClick={handleClose}>
                    {" "}
                    — OM OSS
                  </Link>
                </Nav.Link>
              </div>

              {/* MOBILE BUTTON AND TEXT */}

              <button className="d-lg-none btn mobileButton">
                <Link
                  className="mobileButton"
                  onClick={handleClose}
                  to="/booking"
                >
                  BOKA
                </Link>
              </button>

              {/* todo markera träning i meny när man är i sub-kategorier */}
              <div className="d-lg-none container bottomInfo">
                <div class="d-flex align-items-end  ">
                  <p
                    className="text-end"
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    Bamba{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      color: "#fff",
                    }}
                  >
                    &nbsp;|&nbsp;
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    {" "}
                    Lützengatan 10
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    &nbsp;|&nbsp;
                  </p>

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    11520 Stockholm
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    &nbsp;|&nbsp;
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    Sverige{" "}
                  </p>
                </div>
                <hr />

                <div class="d-flex   ">
                  <p
                    className="text-end"
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    Instagram@
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                      color: "#fff",
                    }}
                  >
                    &nbsp; &nbsp;bambaostermalm
                  </p>
                </div>
                <div class="d-flex   ">
                  <p
                    className="text-end"
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    E-mail:
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                      color: "#fff",
                    }}
                  >
                    &nbsp;&nbsp;info@bambaostermalm.se
                  </p>
                </div>

                {/* todo varsin rad, instagram & email, text start, satt avstånd på |  */}
              </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
