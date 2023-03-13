import React from "react";
import abbe from "../assets/images/abbePic.jpg";
import "../screenStyles/aboutUsScreen.css";

const AbbeShort = () => {
  return (
    <>
      <div>
        <img
          src={abbe}
          className="img-fluid"
          alt="Abbe Joof"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">Abbe Joof</h1>
        <p className="descriptionTextMobile" style={{ fontWeight: "500" }}>
          Ägare + Personlig Tränare
        </p>
        <hr style={{}} className="aboutUsHR" />
        <p className="lineClamp descriptionTextMobile">
          Jag är dubbel VM-medaljör i thaiboxning, före detta socialarbetare och
          arbetar som personlig tränare och coach. Jag var med i SVT:s program
          Bästa Träningen och har även varit bokad som tränare på GIHs Idrotts-
          och hälsokonvent 2022. Min inneboende passion för träning, människor
          och kampsport har tagit mig på flera specialutbildningar inom
          personlig träning och kostrådgivning. Jag har coachat aktiva tävlande
          inom{" "}
        </p>
      </div>
    </>
  );
};

export default AbbeShort;
