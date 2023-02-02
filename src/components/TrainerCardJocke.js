import React from "react";
import jockePic from "../assets/images/jockePic.png";
import "../componentStyles/trainerCard.css";

const TrainerCardJocke = () => {
  return (
    <div className="d-flex flex-col trainerCard">
      <div className="d-flex flex-column ">
        <img src={jockePic} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p style={{ fontWeight: "500" }}>Joakim Karlsson</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personal Trainer</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <p style={{ fontWeight: "400" }}>jocke@bamba.se</p>
          <p style={{ fontWeight: "400" }}>+467 012 345 67</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardJocke;
