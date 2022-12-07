import React from "react";
import BookingCamp from "./BookingCamp";
import BookingClass from "./BookingClass";

const LandingContent = () => {
  return (
    <>
      <div className="d-flex justify-content-center text-start">
        <div
          style={{ paddingBottom: "200px" }}
          className=" d-flex justify-content-start "
        >
          <div class="d-flex flex-column">
            <h2
              style={{ fontSize: "64px", color: "#FFF", lineHeight: "74.8px" }}
            >
              HERE TO HELP YOU SHAPE <br />
              YOUR NEW IMPROVED YOU
            </h2>
            <p
              style={{
                fontSize: "32px",
                color: "#fff",
                lineHeight: "38.4px",
                marginBottom: "100px",
                marginTop: "100px",
              }}
            >
              PHYSICAL — MENTAL — SPIRITUAL
            </p>
            <div style={{}} className=" d-flex align-items-stretch ">
              <BookingClass />
              <BookingCamp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingContent;
