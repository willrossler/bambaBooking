import React from "react";
import jocke from "../assets/images/Jocke.jpg";

const JockeShort = () => {
  return (
    <>
      <div>
        <img
          src={jocke}
          className="img-fluid"
          alt="Jocke Karlsson"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">Joakim Karlsson</h1>
        <p className="descriptionTextMobile" style={{ fontWeight: "500" }}>
          Personlig Tränare
        </p>
        <hr style={{}} className="aboutUsHR" />
        {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

        <p className="lineClamp descriptionTextMobile">
          Träning har varit en konstant i mitt liv, allt från hockey, fotboll
          till kampsport. Jag har gått ett trettiotal matcher som professionell
          atlet inom Thaiboxning & K-1 och har medaljer från SM & VM i mitt
          bagage. Efter avslutad karriär sadlade jag om till thaiboxningscoach
          och är idag förbundstränare åt det Svenska landslaget i thaiboxning.
          Med min bakgrund inom kampsport har jag förstått vikten av att kunna
        </p>
      </div>
    </>
  );
};

export default JockeShort;
