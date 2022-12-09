import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import "./cardStyles.css";

const BookingCamp = () => {
  return (
    <div className="">
      <div className="card text-center d-flex text-center bookingCard">
        <div className="card-body d-flex flex-column justify-content-center ">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/booking"
          >
            <p style={{ fontWeight: "600" }} className="card-text">
              BOOK <br />—
            </p>
            <h5 style={{ fontWeight: "600" }} className="bootClass card-title">
              BOOTCAMP
            </h5>
            <ArrowRight color="black" size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCamp;
