import React from "react";
import { Link } from "react-router-dom";
import "./bookingCard.css";

const BookingClass = () => {
  return (
    <div>
      <div
        className="card text-center d-flex text-center me-3"
        style={{
          width: "100%",
          borderRadius: "0",
          width: "600px",
          height: "600px",
        }}
      >
        <div className="card-body d-flex flex-column justify-content-center  ">
          <p className="card-text">
            BOOK <br />—
          </p>
          <h5 className="card-title">CLASS</h5>
          <Link to="/booking">asd</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingClass;
