import React from "react";
import martin from "../assets/images/Martin.jpg";
const MartinShort = () => {
  return (
    <>
      <div>
        <img
          src={martin}
          style={{ marginBottom: "40px", marginTop: "40px" }}
          className="img-fluid"
          alt="Martin Pettersson"
        />
        <h1 className="title">Martin Pettersson</h1>
        <p className="descriptionTextMobile" style={{ fontWeight: "500" }}>
          Personlig Tränare
        </p>
        <hr style={{}} className="aboutUsHR" />
        {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

        <p className="lineClamp descriptionTextMobile">
          Mitt sportutövande tar avstamp i amerikansk fotboll där jag, efter
          några år i landslaget, bl.a. tog guld i det nordiska mästerskapet. Med
          en avslutad sportkarriär i ryggen så är jag idag specialist inom
          tyngdlyftning och styrketräning samtidigt som jag själv lär mig
          diverse kampsporter. Arbetskarriären inom träning började på West
          Barbell Club i Bromma, ett gym med fokus på att bygga upp och utveckla
          atleter. Utöver det har jag varit coach för Alvik Basket,
          Brommapojkarna och Bromma Maniacs
        </p>
      </div>
    </>
  );
};

export default MartinShort;
