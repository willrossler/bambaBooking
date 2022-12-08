import React from "react";
import bambaLogo from "../assets/logos/bambaLogo.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: "#3C469C" }}>
        <nav className="bambaNavbar navbar">
          <div className="container logoContainer">
            <a href="/">
              <img className="bambaLogo " src={bambaLogo}></img>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
