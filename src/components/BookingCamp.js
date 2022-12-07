import React from "react";
import { Link } from "react-router-dom";

const BookingCamp = () => {
  return (
    <div className="">
      <div
        className="card text-center d-flex text-center ms-3"
        style={{ borderRadius: "0", width: "600px", height: "600px" }}
      >
        <div className="card-body d-flex flex-column justify-content-center ">
          <p className="card-text">
            BOOK <br />—
          </p>
          <h5 className="card-title">BOOTCAMP</h5>
          <Link to="/booking">asd</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCamp;
