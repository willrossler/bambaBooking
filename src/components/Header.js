import Button from "react-bootstrap/Button";
import React from "react";
import bambaLogo from "../assets/logos/bambaLogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{ backgroundColor: "#3C469C" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        <div className="navbar-brand py-5 ">
          <Link to="/">
            <img src={bambaLogo} />
          </Link>
        </div>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                Philosophy
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Training
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Shop
              </a>
            </li> */}
          </ul>
          {/* <Button
            style={{
              borderRadius: "0px",
              fontSize: "18px",
              fontWeight: "500",
            }}
            variant="light"
          >
            <Link to="/booking">BOOK</Link>
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
