import React from "react";
import najMedin from "../assets/images/Najmedin.jpg";

import "../componentStyles/trainerCard.css";

const TrainerCardNaj = () => {
  return (
    <div className="d-flex flex-col trainerCard">
      <div className="d-flex flex-column ">
        <img src={najMedin} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p>Najmedin Razavi</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Mental Coach</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardNaj;
