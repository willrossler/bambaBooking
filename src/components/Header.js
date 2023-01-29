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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pStyles = {
    paddin: "0px",
    margin: "0px",
    fontSize: "13px",
    color: "#fff",
    opacity: "0.5",
  };

  useEffect(() => {
    if (location.pathname === "/booking") {
      setHeaderColor("#3C469C");
      console.log(headerColor);
    } else {
      setHeaderColor("black ");
      console.log(headerColor);
    }
  }, [location.pathname]);

  return (
    <Navbar
      style={{
        backgroundColor: headerColor,
      }}
      expand="lg"
      className="navbar navbar-dark py-3"
    >
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
          style={{ backgroundColor: "#3C469C", width: "100%", height: "100&" }}
          className="ms-auto "
          show={show}
          onHide={handleClose}
          responsive="lg"
        >
          <Offcanvas.Header
            style={{
              backgroundColor: "#3C469C",
              height: "72px",
            }}
          >
            <Navbar.Brand>
              <Link className="d-lg-none" to="/">
                <img className="bambaLogo" src={bambaLogo} />
              </Link>
            </Navbar.Brand>

            <X
              className="d-lg-none "
              style={{ width: "40px", height: "40px", color: "#fff" }}
              onClick={handleClose}
            />
          </Offcanvas.Header>
          <hr className="shadowHr" />
          <Offcanvas.Body>
            <Nav className="ms-auto py-3  ">
              <Nav.Link>
                <Link
                  style={{ color: "#fff", paddingBottom: "15px" }}
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "d-none d-lg-inline active-link"
                      : "d-none d-lg-inline "
                  }
                >
                  PHILOSOPHY
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "#fff", paddingBottom: "15px" }}
                  to="/training"
                  className={
                    location.pathname === "/training"
                      ? "d-none d-lg-inline active-link"
                      : "d-none d-lg-inline "
                  }
                >
                  TRAINING
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "#fff", paddingBottom: "15px" }}
                  to="contact"
                  className={
                    location.pathname === "/contact"
                      ? "d-none d-lg-inline active-link"
                      : "d-none d-lg-inline "
                  }
                >
                  {" "}
                  CONTACT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "#fff", paddingBottom: "15px" }}
                  to="/shop"
                  className={
                    location.pathname === "/shop"
                      ? "d-none d-lg-inline active-link"
                      : "d-none d-lg-inline "
                  }
                >
                  {" "}
                  OM OSS
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
              <div class="col-4 text-center d-flex">
                {/* BIG SCREEN BUTTON */}

                <button
                  style={{
                    marginLeft: "100px",
                    backgroundColor: "#fff",
                  }}
                  class="btn btn-primary btn-light px-5 py-2 rounded-0 d-none d-lg-block d-xl-block"
                >
                  <Link style={{ color: "black" }} to="/booking">
                    BOOK
                  </Link>
                </button>
              </div>

              {/* MOBILE BUTTON AND TEXT */}

              <button
                style={{
                  marginTop: "50px",
                  marginBottom: "50px",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-lg-none btn btn-primary btn-light px-5 py-2 rounded-0 "
              >
                <Link
                  style={{ color: "black", fontSize: "18px" }}
                  onClick={handleClose}
                  to="/booking"
                >
                  BOKA
                </Link>
              </button>
              <div className="d-lg-none">
                <div class="d-flex">
                  <p style={pStyles}>
                    Bamba | Lutzengatan 10 | 11520 Stockholm | Sweden
                  </p>
                </div>
                <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
                <div class="d-flex">
                  <p style={pStyles}>
                    Instagram @bambagym | E-mail info@bambaostermalm.se
                  </p>
                </div>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
