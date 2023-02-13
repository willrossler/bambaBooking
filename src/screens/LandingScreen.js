import React from "react";
import BookingPT from "../components/BookingPT";
import BookingCamp from "../components/BookingCamp";
import BookingClass from "../components/BookingClass";
import BookingMembership from "../components/BookingMembership";
import "../screenStyles/landingScreen.css";
import { Link } from "react-router-dom";
import bLogo from "../assets/logos/bLogo.svg";
import bLogo2 from "../assets/logos/bLogo2.svg";
const LandingScreen = () => {
  const bgColor = "#3C469C";

  return (
    <>
      <hr className="mobileView" style={{ margin: "0" }} />

      <section className=" d-flex justify-content-center ">
        <div className="mobileView logoMobile">
          <img src={bLogo} />
        </div>
        <div className="logo-container">
          <div className="desktopView top-left-logo">
            <img src={bLogo} />
          </div>
          <div className="desktopView bottom-right-logo">
            <img src={bLogo2} />
          </div>
          <div className="container ">
            <div className="textOne h2 py-4 ">
              HERE TO HELP YOU SHAPE <br className="break" /> YOUR NEW IMPROVED
              YOU
            </div>
            <div style={{}} className=" textTwo h4">
              PHYSICAL — MENTAL — SPIRITUAL
            </div>
            {/* <div style={{}} className=" textTwo h4">
              <p className="seSchema">
                {" "}
                Vill du se vårat schema för olika träningstyper <br /> gör du
                det <Link to="weeklyschedule">här.</Link>
              </p>
            </div> */}
            {/*  hover rosa färg på rutor */}
            <div className="">
              <div className="row text-center pb-5 ">
                <div className="col">
                  <BookingPT />
                  <BookingClass />
                </div>
                <div className="col">
                  <BookingMembership />
                  <BookingCamp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingScreen;
