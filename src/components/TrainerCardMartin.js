import React from "react";
import martinPic from "../assets/images/martinPic.png";
import "../componentStyles/trainerCard.css";
const TrainerCardMartin = () => {
  return (
    <div className="d-flex flex-col">
      <div className="d-flex flex-column trainerCard">
        <img src={martinPic} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p>Martin Pettersson</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personal Trainer</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <p>martin@bamba.se</p>
          <p>+467 012 345 67</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardMartin;
