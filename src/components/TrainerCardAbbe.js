import React from "react";
import abbePic from "../assets/images/abbePic.jpg";
import { Link } from "react-router-dom";

import "../componentStyles/trainerCard.css";

const TrainerCardAbbe = () => {
  return (
    <div className="d-flex flex-col trainerCard">
      <div className="d-flex flex-column ">
        <img src={abbePic} alt="" className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p>Abbe Joof</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>Personlig Tränare</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
          <a href="mailto:abbe@bambaostermalm.se">
            <p id="hoverPink" style={{ fontWeight: "400", fontSize: "14px" }}>
              abbe@bambaostermalm.se
            </p>
          </a>
          {/* <a href="tel:+1234567890">
            <p id="hoverPink" style={{ fontWeight: "400" }}>
              +467 012 345 67
            </p>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TrainerCardAbbe;
