import React from "react";
import bLogo from "../assets/logos/bLogo.svg";

import BookingCamp from "../components/BookingCamp";
import BookingClass from "../components/BookingClass";
import "./landingScreen.css";

const LandingScreen = () => {
  const bgColor = "#3C469C";
  return (
    <>
      <img className="desktop" src={bLogo} />

      <div className="bgDivOne">
        <img className="bLogoBG" src={bLogo} />

        <section
          style={{ backgroundColor: bgColor }}
          className="sectionWrapper p-5 d-flex justify-content-center"
        >
          <div className="container">
            <hr className="mobileHr" />
            <div className="textOne h2 py-4 ">
              HERE TO HELP YOU SHAPE YOUR NEW IMPROVED YOU
            </div>
            <div style={{}} className=" textTwo h4">
              PHYSICAL — MENTAL — SPIRITUAL
            </div>
            <div className="cardWrapper row">
              <div className="cardContainer col">
                <BookingClass className="bookClass" />
              </div>
              <div className="cardContainer col">
                <BookingCamp className="bookCamp" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingScreen;
