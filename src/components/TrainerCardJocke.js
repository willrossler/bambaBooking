import React from "react";
import { Link } from "react-router-dom";

import jockePic from "../assets/images/Jocke.jpg";
import "../componentStyles/trainerCard.css";

const TrainerCardJocke = () => {
  return (
    <div className="d-flex flex-col trainerCard">
      <div className="d-flex flex-column ">
        <img src={jockePic} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p>Joakim Karlsson</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personlig Tränare</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <a href="mailto:email@example.com">
            <p id="hoverPink" style={{ fontWeight: "400" }}>
              jocke@bamba.se
            </p>
          </a>
          <a href="tel:+1234567890">
            <p id="hoverPink" style={{ fontWeight: "400" }}>
              +467 012 345 67
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardJocke;
