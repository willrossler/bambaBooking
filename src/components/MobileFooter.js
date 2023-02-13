import React, { useEffect, useState } from "react";
import bLogo from "../assets/logos/bLogo.svg";
import "../componentStyles/mobileFooter.css";
import FooterLinks from "./FooterLinks";
import ContactInfo from "./ContactInfo";
import { Link, useLocation } from "react-router-dom";

const MobileFooter = () => {
  const location = useLocation();
  const [footerColor, setfooterColor] = useState("black");

  useEffect(() => {
    if (location.pathname === "/booking") {
      setfooterColor("#000000");
    } else {
      setfooterColor("#3C469C");
    }
  }, [location.pathname]);

  return (
    <>
      <div
        class="mobileFooter parent"
        style={{
          backgroundColor: footerColor,
          marginTop: "40px",
          marginBottom: "40px",
          paddingTop: "40px",
        }}
      >
        <div class="div1 container px-4">
          <img src={bLogo} style={{ width: "70px", height: "70px" }} />
        </div>
        <div class="div2">
          <FooterLinks />
        </div>
        <div class="div3 ">
          <ContactInfo />
        </div>
      </div>
    </>
  );
};
export default MobileFooter;
