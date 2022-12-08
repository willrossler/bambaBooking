import React from "react";
import BgComponent from "../components/BgComponent";
import BookingCamp from "../components/BookingCamp";
import BookingClass from "../components/BookingClass";

const LandingScreen = () => {
  const bgColor = "#3C469C";
  return (
    <>
      <section style={{ backgroundColor: bgColor }} className="p-5">
        <div className="container">
          <div
            className="h2 py-4"
            style={{ color: "#FFF", fontSize: "64px", lineHeight: "76px" }}
          >
            HERE TO HELP YOU SHAPE <br />
            YOUR NEW IMPROVED YOU
          </div>
          <div
            style={{ color: "#FFF", fontSize: "32px", lineHeight: "38px" }}
            className="py-4 h4"
          >
            PHYSICAL — MENTAL — SPIRITUAL
          </div>
          <div className="row ">
            <div className="col">
              <BookingClass />
            </div>
            <div className="col">
              <BookingCamp />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingScreen;
