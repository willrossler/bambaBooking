import React from "react";
import bLogo from "../assets/logos/bLogo.svg";
import BookingPT from "../components/BookingPT";
import BookingCamp from "../components/BookingCamp";
import BookingClass from "../components/BookingClass";
import BookingMembership from "../components/BookingMembership";
import "../screenStyles/landingScreen.css";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  const bgColor = "#3C469C";

  return (
    <>
      <img className="desktop" src={bLogo} />

      <div className="bgDivOne">
        <img className="bLogoBG" src={bLogo} />

        <section
          style={{ backgroundColor: bgColor }}
          className="sectionWrapper d-flex justify-content-center pb-5"
        >
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
        </section>
      </div>
    </>
  );
};

export default LandingScreen;
