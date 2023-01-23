import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import "../componentStyles/cardStyles.css";

const BookingClass = () => {
  return (
    <div className=" p-2">
      <div className="card text-center d-flex text-center bookingCard ">
        <div className="card-body d-flex flex-column justify-content-center ">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/schedule"
          >
            <p style={{ fontWeight: "600" }} className="card-text">
              BOKA <br />—
            </p>
            <h5 style={{ fontWeight: "600" }} className="bootClass card-title">
              GRUPPTRÄNING
            </h5>
            <ArrowRight className="arrowCard" color="black" size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingClass;
