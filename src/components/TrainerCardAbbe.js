import React from "react";
import abbePic from "../assets/images/abbePic.png";
import "../componentStyles/trainerCard.css";

const TrainerCardAbbe = () => {
  return (
    <div className="d-flex flex-col trainerCard">
      <div className="d-flex flex-column ">
        <img src={abbePic} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p style={{ fontWeight: "500" }}>Abbe Joof</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personal Trainer</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <p style={{ fontWeight: "400" }}>abbe@bamba.se</p>
          <p style={{ fontWeight: "400" }}>+467 012 345 67</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardAbbe;
