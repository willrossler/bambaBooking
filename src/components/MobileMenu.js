import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "../componentStyles/mobileMenuStyles.css";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="container">
        <div className="">
          <div>
            <div className="menuLinks">
              <Link to="/home">
                <h3>— PHILOSOPHY</h3>{" "}
              </Link>
              <Link to="/training">
                <h3>— TRAINING</h3>{" "}
              </Link>
              <Link to="/contact">
                <h3>— CONTACT</h3>{" "}
              </Link>
              <Link to="/shop">
                <h3>— SHOP</h3>{" "}
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
              <p>Bamba | Lutzengatan 10 | 11520 Stockholm | Sweden</p>
            </div>
            <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
            <div class="d-flex">
              <p>Instagram @bambagym | E-mail info@bambaostermalm.se</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
