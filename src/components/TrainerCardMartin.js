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
          <p style={{ fontWeight: "500" }}>Martin Pettersson</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personal Trainer</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <p style={{ fontWeight: "400" }}>martin@bamba.se</p>
          <p style={{ fontWeight: "400" }}>+467 012 345 67</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardMartin;
