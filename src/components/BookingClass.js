import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const BookingClass = () => {
  return (
    <div>
      <div
        className="card text-center d-flex text-center"
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
          <h5 style={{ fontSize: "48px" }} className="card-title">
            CLASS
          </h5>
          <Link to="/booking">
            <ArrowRight color="black" size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingClass;
