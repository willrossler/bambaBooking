import React from "react";
import martinPic from "../assets/images/Martin.jpg";
import "../componentStyles/trainerCard.css";
const TrainerCardMartin = () => {
  return (
    <div className="d-flex flex-col">
      <div className="d-flex flex-column trainerCard">
        <img src={martinPic} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p>Martin Pettersson</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personlig tränare</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <a href="mailto:martin@bambaostermalm.se">
            <p style={{ fontWeight: "400" }}>martin@bamba.se</p>
          </a>

          <a href="tel:+1234567890">
            <p style={{ fontWeight: "400" }}>+467 012 345 67</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardMartin;
