import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const BookingMembership = () => {
  return (
    <div className=" p-2">
      <div className="card text-center d-flex text-center bookingCard ">
        <div className="card-body d-flex flex-column justify-content-center ">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/ptschedule"
          >
            <p style={{ fontWeight: "600" }} className="card-text">
              BOKA <br />—
            </p>
            <h5 style={{ fontWeight: "600" }} className="bootClass card-title">
              PERSONLIG TRÄNING
            </h5>
            <ArrowRight className="arrowCard" color="black" size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingMembership;
