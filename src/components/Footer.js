import React, { useState, useEffect } from "react";
import bLogo from "../assets/logos/bLogo.svg";
import "../componentStyles/footer.css";
import "../globalStyles/textStyles.css";
import { Link, useLocation } from "react-router-dom";

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
      style={{
        backgroundColor: footerColor,
      }}
    >
      <div class="container py-5 page-footer ">
        <div class=" d-flex justify-content-between ">
          <div class="col-4">
            <img src={bLogo} />
          </div>
          <div class="col-4">
            {" "}
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
          </div>
          <div className="col linkStylesFooter">
            <ul className="list-unstyled">
              <li>
                <Link to="/">
                  <p>— FILOSOFI</p>
                </Link>
              </li>
              <li>
                <Link to="/training">
                  <p>— TRÄNING </p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {" "}
                  <p>— KONTAKT </p>
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <p> — OM OSS</p>
                </Link>
              </li>
              <li>
                <Link to="/booking">
                  <p>— BOKA</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
