import React, { useState, useEffect } from "react";
import bLogo from "../assets/logos/bLogo.svg";
import "../componentStyles/footer.css";
import "../globalStyles/textStyles.css";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();
  const [footerColor, setfooterColor] = useState("black");

  useEffect(() => {
    if (location.pathname === "/booking") {
      setfooterColor("black");
    } else {
      setfooterColor("#3C469C");
    }
  }, [location.pathname]);

  return (
    <div
      className="desktopView"
      style={{
        backgroundColor: footerColor,
        padding: "50px",
        marginTop: "100px",
      }}
    >
      <Container style={{ paddingTop: "40px" }} className="desktopView">
        <Row>
          <Col xs={12} md={6} style={{ display: "flex", flexDirection: "row" }}>
            <Link style={{ marginRight: "15%" }} to="/">
              <img className="footerLogo " src={bLogo} />
            </Link>
            <ul className="list-unstyled h-100 text-start infoStylesFooter">
              <li>
                <Link to="/">
                  <p id="hoverPink">Bamba</p>
                </Link>
              </li>
              <li>
                <p style={{ opacity: "0.5" }}>Lützengatan 10</p>
                <p style={{ opacity: "0.5" }}>11520 Stockholm</p>
                <p style={{ opacity: "0.5" }}>Sweden</p>
              </li>
              <br />
              <li>
                <a href="mailto:info@bambaostermalm.se">
                  <p id="hoverPink">
                    {" "}
                    <span>info@bambaostermalm.se</span>
                  </p>
                </a>
                <a href="www.bambaostermalm.se">
                  <p id="hoverPink">www.bambaostermalm.se</p>
                </a>
              </li>
              <br />
              <li>
                <a href="https://www.instagram.com/bambaostermalm/">
                  <p id="hoverPink">Instagram@bambaostermalm</p>
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <div className="col linkStylesFooter">
              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    <p id="hoverPink">— Filosofi</p>
                  </Link>
                </li>
                <li>
                  <Link to="/training">
                    <p id="hoverPink">— Träning </p>
                  </Link>
                  <Link to="/medlemskap">
                    <p id="hoverPink">— Medlemskap </p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    {" "}
                    <p id="hoverPink">— Kontakt </p>
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    <p id="hoverPink"> — Om oss</p>
                  </Link>
                </li>
                <li>
                  <Link to="/booking">
                    <p id="hoverPink">— Boka</p>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
