import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
const BookingPT = () => {
  return (
    <div className=" p-2">
      <Link style={{ textDecoration: "none", color: "black" }} to="/schedule">
        <div className="card text-center d-flex text-center bookingCard ">
          <div className="card-body d-flex flex-column justify-content-center ">
            <p style={{ fontWeight: "500" }} className="card-text">
              BOKA <br />—
            </p>
            <h5 style={{ fontWeight: "500" }} className="bootClass card-title">
              CAMP
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRight className="arrowCard" color="black" size={48} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookingPT;
