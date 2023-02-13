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
      console.log(footerColor);
    } else {
      setfooterColor("#3C469C");
      console.log(footerColor);
    }
  }, [location.pathname]);

  return (
    <div
      className="desktopView"
      style={{
        backgroundColor: footerColor,
        padding: "50px",
      }}
    >
      <Container style={{ paddingTop: "40px" }} className="desktopView">
        <Row>
          <Col xs={12} md={6} style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ marginRight: "15%" }}
              className="footerLogo "
              src={bLogo}
            />

            <ul className="list-unstyled h-100 text-start infoStylesFooter">
              <li>
                <p>Bamba</p>
              </li>
              <li>
                <p style={{ opacity: "0.5" }}>Lützengatan 10</p>
                <p style={{ opacity: "0.5" }}>11520 Stockholm</p>
                <p style={{ opacity: "0.5" }}>Sweden</p>
              </li>
              <br />
              <li>
                <p>info@bambaostermalm.se</p>
                <p>www.bambaostermalm.se</p>
              </li>
              <br />
              <li>
                <p>Instagram@bambaostermalm</p>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <div className="col linkStylesFooter">
              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    <p>— Filosofi</p>
                  </Link>
                </li>
                <li>
                  <Link to="/training">
                    <p>— Träning </p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    {" "}
                    <p>— Kontakt </p>
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    <p> — Om oss</p>
                  </Link>
                </li>
                <li>
                  <Link to="/booking">
                    <p>— Boka</p>
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
