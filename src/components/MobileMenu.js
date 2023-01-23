import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const linkStyles = {
    color: "#fff",
    fontSize: "32px",
    lineHeight: "48px",
    fontWeight: "500",
  };

  const pStyles = {
    paddin: "0px",
    margin: "0px",
    fontSize: "13px",
    color: "#fff",
    opacity: "0.5",
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#3C469C",
          alignItems: "center",
          zIndex: "10",
          top: "0",
        }}
      >
        <div className="container">
          <div
            style={{
              height: "500px",
              display: "flex",
            }}
          >
            <div>
              <Link to="/home">
                <h3 style={linkStyles}>— PHILOSOPHY</h3>{" "}
              </Link>
              <Link to="/training">
                <h3 style={linkStyles}>— TRAINING</h3>{" "}
              </Link>
              <Link to="/contact">
                <h3 style={linkStyles}>— CONTACT</h3>{" "}
              </Link>
              <Link to="/shop">
                <h3 style={linkStyles}>— SHOP</h3>{" "}
              </Link>
            </div>
          </div>
          <div style={{ paddingBottom: "40px" }} class="d-grid">
            <button
              type="button"
              style={{
                height: "50px",
                fontSize: "18px",
                backgrounColor: "#fff",
                marginBottom: "50px",
              }}
            >
              BOOK
            </button>

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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
