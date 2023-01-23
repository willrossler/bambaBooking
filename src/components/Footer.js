import React, { useState, useEffect } from "react";
import bLogo from "../assets/logos/bLogo.svg";
import "../componentStyles/footer.css";
import ContactInfo from "./ContactInfo";
import FooterLinks from "./FooterLinks";
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
      <div style={{ color: "#fff" }} class="container py-5 page-footer ">
        <div class="row d-flex justify-content-between ">
          <div class="col-4">
            <img
              src={bLogo}
              className=""
              style={{ height: "140px", width: "auto" }}
            />
          </div>
          <div class="col-4">
            {" "}
            <ul
              style={{ color: "#fff", fontSize: "14px" }}
              className="list-unstyled h-100 text-start"
            >
              <li>
                <p style={{ marginBottom: "0" }}>Bamba</p>
              </li>
              <li>
                <p style={{ opacity: "0.5", marginBottom: "0" }}>
                  Lützengatan 10
                </p>
                <p style={{ opacity: "0.5", marginBottom: "0" }}>
                  11520 Stockholm
                </p>
                <p style={{ opacity: "0.5", marginBottom: "0" }}>Sweden</p>
              </li>
              <br />
              <li>
                <p style={{ marginBottom: "0" }}>info@bambaostermalm.se</p>
                <p style={{ marginBottom: "0" }}>www.bambaostermalm.se</p>
              </li>
              <br />
              <li>
                <p style={{ marginBottom: "0" }}>Instagram@bambaostermalm</p>
              </li>
            </ul>
          </div>
          <div class="col-4 d-flex ">
            <ul className="list-unstyled h-100 text-start ">
              <li>
                <Link style={{ color: "#fff" }} to="/">
                  — FILOSOFI
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} to="/training">
                  — TRAINING
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} to="/contact">
                  — CONTACT
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} to="/shop">
                  — SHOP
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} to="/booking">
                  — BOOK CLASSES
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
