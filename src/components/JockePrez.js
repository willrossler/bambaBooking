import React from "react";
import jocke from "../assets/images/Jocke.jpg";

const JockePrez = () => {
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

        <p className="descriptionTextMobile">
          Träning har varit en konstant i mitt liv, allt från hockey, fotboll
          till kampsport. Jag har gått ett trettiotal matcher som professionell
          atlet inom Thaiboxning & K-1 och har medaljer från SM & VM i mitt
          bagage. Efter avslutad karriär sadlade jag om till thaiboxningscoach
          och är idag förbundstränare åt det Svenska landslaget i thaiboxning.
          Med min bakgrund inom kampsport har jag förstått vikten av att kunna
          grunderna i aktiviteter för att utvecklas både inom sport men också
          som person. Jag tror på fördelen med att nyttja kroppen på alla
          parametrar: frekvens, styrka, och uthållighet, för att enklare nå
          atletiska mål. Jag kommer senast från Allstars Training Center där jag
          var huvudcoach för thaiboxningen och har haft äran att ta fram både
          svenska och europeiska världsmästare. Som tränare är jag lyhörd och
          inkännande samtidigt som jag är tuff när det behövs. Som coach är jag
          pedagogisk och tålmodig.
          <br />
          <br />
          Mitt mål som tränare är att hjälpa dig uppnå dina mål, pusha dig till
          nya nivåer samt ge dig ökad styrka, starkare självkänsla och ett
          hälsosammare liv.
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
          <li>Kampsport</li>
          <li>Teknik</li>
          <li>Fys</li>
          <li>Löpning</li>
        </ul>
      </div>
    </>
  );
};

export default JockePrez;
