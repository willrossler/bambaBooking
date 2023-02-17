import React from "react";
import BookingPT from "../components/BookingPT";
import BookingCamp from "../components/BookingCamp";
import BookingClass from "../components/BookingClass";
import BookingMembership from "../components/BookingMembership";
import "../screenStyles/landingScreen.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import bLogo from "../assets/logos/bLogo.svg";
import bLogo2 from "../assets/logos/bLogo2.svg";
const LandingScreen = () => {
  const bgColor = "#3C469C";

  return (
    <>
      <hr className="mobileView" style={{ margin: "0" }} />
      <section className="container d-flex justify-content-center ">
        <div className="-">
          <div className=" ">
            <div className="textOne h2 py-4 " style={{}}>
              HERE TO HELP YOU SHAPE <br className="break" /> YOUR NEW IMPROVED
              YOU
            </div>
            <div style={{}} className=" textTwo h4">
              PHYSICAL — MENTAL — SPIRITUAL
            </div>
          </div>

          <div class="grid-container " style={{ marginBottom: "80px" }}>
            <div class="grid-item">
              <BookingMembership />
            </div>
            <div class="grid-item">
              <BookingClass />
            </div>
            <div class="grid-item">
              <BookingPT />
            </div>
            <div class="grid-item">
              <BookingCamp />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingScreen;
