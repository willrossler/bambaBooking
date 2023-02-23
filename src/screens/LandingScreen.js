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
      <section className="container d-flex justify-content-center ">
        <div className="backgroundContDesk desktopView">
          <svg
            viewBox="0 0 113 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="top-left-svg"
          >
            <path
              d="M56.5 29.1899H28.2449V0.778809H0V29.1899H28.2449V57.6009H56.4898C64.034 57.6009 71.1308 60.5566 76.4687 65.9258C81.8065 71.2951 84.7449 78.4234 84.7449 86.0222C84.7449 93.621 81.8065 100.749 76.4687 106.119C71.1308 111.488 64.0442 114.444 56.4898 114.444C48.9355 114.444 41.8488 111.488 36.511 106.119C31.1731 100.749 28.2348 93.621 28.2348 86.0222V57.6112H0V86.0222C0 117.409 25.2964 142.855 56.5 142.855C87.7036 142.855 113 117.409 113 86.0222C113 54.6351 87.7036 29.1899 56.5 29.1899Z"
              fill="#F5AAC9"
            />
          </svg>

          <svg
            viewBox="0 0 113 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="bottom-right-svg"
          >
            <path
              d="M56.5 29.1899H28.2449V0.778809H0V29.1899H28.2449V57.6009H56.4898C64.034 57.6009 71.1308 60.5566 76.4687 65.9258C81.8065 71.2951 84.7449 78.4234 84.7449 86.0222C84.7449 93.621 81.8065 100.749 76.4687 106.119C71.1308 111.488 64.0442 114.444 56.4898 114.444C48.9355 114.444 41.8488 111.488 36.511 106.119C31.1731 100.749 28.2348 93.621 28.2348 86.0222V57.6112H0V86.0222C0 117.409 25.2964 142.855 56.5 142.855C87.7036 142.855 113 117.409 113 86.0222C113 54.6351 87.7036 29.1899 56.5 29.1899Z"
              fill="#F5AAC9"
            />
          </svg>
          <div>
            <div className="textOne">
              HÄR FÖR ATT <br /> FORMA DITT NYA JAG
            </div>
            <br />
            <div style={{}} className=" textTwo">
              FYSISKT — MENTALT — SPIRITUELLT
            </div>
          </div>

          <div class="grid-container " style={{ marginBottom: "120px" }}>
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

      <hr className="mobileView" style={{ margin: "0" }} />
      <section className="container d-flex justify-content-center ">
        <div className="backgroundCont mobileView">
          <div className=" ">
            <div className="textOne h2" style={{}}>
              HÄR FÖR ATT <br /> FORMA DITT NYA JAG
            </div>
            <div style={{}} className=" textTwo h4">
              FYSISKT — MENTALT — SPIRITUELLT
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
