import React from "react";
import jockePic from "../assets/images/jockePic.png";
import "../componentStyles/trainerCard.css";
const TrainerCardJocke = () => {
  return (
    <div style={{ padding: "40px 0 40px 0" }} className="d-flex flex-col">
      <div className="d-flex flex-column">
        <img
          src={jockePic}
          alt=""
          className="user-image"
          style={{ width: "100%", borderRadius: "50%" }}
        />
        <hr
          style={{
            width: "auto",
            opacity: "0.5",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        />
        <div className="trainerCardP">
          <p style={{ fontSize: "18px", margin: "0" }}>Joakim Karlsson</p>
          <p style={{ opacity: "0.5", fontSize: "18px", margin: "0" }}>
            Personal Trainer
          </p>
          <p style={{ opacity: "50%", fontSize: "18px", margin: "0" }}> — </p>
          <p style={{ fontSize: "18px", margin: "0" }}>jocke@bamba.se</p>
          <p style={{ fontSize: "18px", margin: "0" }}>+467 012 345 67</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardJocke;
