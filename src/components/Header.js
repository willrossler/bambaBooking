import Button from "react-bootstrap/Button";
import React from "react";
import bambaLogo from "../assets/logos/bambaLogo.svg";
import { Link } from "react-router-dom";
import BookingClass from "./BookingClass";
import BookingCamp from "./BookingCamp";

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: "#3C469C" }}>
        <nav className="navbar navbar-dark py-5">
          <div className="container">
            <a href="/">
              <img className="navbar-brand" src={bambaLogo}></img>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
