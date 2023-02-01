import React, { useState, useEffect } from "react";
import { List, X } from "react-bootstrap-icons";
import bambaLogo from "../assets/logos/bambaLogo.svg";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";

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
      className="navbar navbar-dark py-2"
    >
      {/* todo synka logans med text-start genom länkar och knapp - CHECK */}
      {/* todo hover rosa transition på länkar + knapp - CHECK */}
      {/* todo kolla avstånd mellan länkar CHECK? kanske för mycket */}
      {/* todo kolla transition för active link */}
      {/* todo rosa knapp BOOK på bokningssidans -CHECK*/}
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className="bambaLogo" src={bambaLogo} />
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
              height: "72px",
              paddingRight: "12px",
            }}
          >
            <Navbar.Brand>
              <Link className="d-lg-none" to="/">
                <img className="bambaLogo" src={bambaLogo} />
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
            <Nav className="ms-auto py-3 d-flex align-items-center">
              <Nav.Link id="hoverLink">
                <Link
                  id="hoverLink"
                  style={{ color: "#fff", paddingBottom: "15px" }}
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
                  style={{ color: "#fff", paddingBottom: "15px" }}
                  to="/training"
                  className={
                    location.pathname === "/training"
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
                  style={{ color: "#fff", paddingBottom: "15px" }}
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
                  style={{ color: "#fff", paddingBottom: "15px" }}
                  to="/shop"
                  className={
                    location.pathname === "/shop"
                      ? "d-none d-lg-inline active-link mx-3"
                      : "d-none d-lg-inline mx-3"
                  }
                >
                  {" "}
                  SHOP
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

              {/* BIG SCREEN BUTTON */}

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

              <button
                style={{
                  marginTop: "130px",
                  marginBottom: "50px",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-lg-none btn btn-primary btn-light  py-2 rounded-0 "
              >
                <Link
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                  onClick={handleClose}
                  to="/booking"
                >
                  BOKA
                </Link>
              </button>

              {/* to do  */}

              <div className="d-lg-none container bottomInfo">
                <div class="d-flex align-items-end  ">
                  <p
                    className="text-end"
                    style={{ fontSize: "14px", marginBottom: "0" }}
                  >
                    Bamba{" "}
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "0" }}>
                    &nbsp;|&nbsp;
                  </p>
                  <p
                    style={{
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
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    &nbsp;|&nbsp;
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    11520 Stockholm
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    &nbsp;|&nbsp;
                  </p>
                  <p
                    style={{
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
                    style={{ fontSize: "14px", marginBottom: "0" }}
                  >
                    Instagram@
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    &nbsp;bambaostermalm
                  </p>
                </div>
                <div class="d-flex   ">
                  <p
                    className="text-end"
                    style={{ fontSize: "14px", marginBottom: "0" }}
                  >
                    E-mail:
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "0",
                      opacity: "0.5",
                    }}
                  >
                    &nbsp;info@bambaostermalm.se
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
