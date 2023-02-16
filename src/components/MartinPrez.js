import React from "react";
import martin from "../assets/images/Martin.jpg";

const MartinPrez = () => {
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

        <p className="descriptionTextMobile">
          Mitt sportutövande tar avstamp i amerikansk fotboll där jag, efter
          några år i landslaget, bl.a. tog guld i det nordiska mästerskapet. Med
          en avslutad sportkarriär i ryggen så är jag idag specialist inom
          tyngdlyftning och styrketräning samtidigt som jag själv lär mig
          diverse kampsporter. Arbetskarriären inom träning började på West
          Barbell Club i Bromma, ett gym med fokus på att bygga upp och utveckla
          atleter. Utöver det har jag varit coach för Alvik Basket,
          Brommapojkarna och Bromma Maniacs i amerikansk fotboll. Sedan 2015 har
          jag arbetat som lärare på Personal Training School, där jag utbildar
          personliga tränare i det praktiska utövandet samt i grundläggande
          anatomi.
          <br />
          <br />
          Min drivkraft som personlig tränare är att se din utveckling för att
          tillsammans kunna glädjas åt att du uppnått dina mål. Under våra
          sessioner kan du förvänta dig fokus på precision och noggrannhet i
          både utövande och träningsprogram.{" "}
        </p>
        <br />
        <p
          className="descriptionTitleMobile"
          style={{ fontWeight: "500", marginTop: "10px" }}
        >
          Specialicerad inom:
        </p>
        <ul
          className="descriptionTextMobile"
          style={{ marginBottom: "30px", lineHeight: "21px" }}
        >
          <li>Styrketräning</li>
          <li>Tyngdlyftning</li>
          <li>Sportspecifik prestation</li>
          <li>Öka muskelmassa</li>
        </ul>
      </div>
    </>
  );
};

export default MartinPrez;
