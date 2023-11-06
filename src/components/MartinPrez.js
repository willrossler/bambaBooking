import React, { useState } from "react";
import martin from "../assets/images/Martin.jpg";

const MartinPrez = () => {
  const [showMore, setShowMore] = useState(false);
  let descriptionText =
    "Jag har utövat kampsport sedan 8 års ålder inkluderat karate, kickboxning, boxning, taekwondo och Brasilianskt Jiu Jitsu. Mina främsta meriter som profissionell är pallplatser inom BJJ och Submission Wrestling. Sedan 2010 sitter jag i utbildningskomitten för Svenska Budo & Kampsportsförbundet med stor inblick i föreningslivet och utvecklingen av tränarna i Sverige. \r\n Utöver mitt yrke jobbar jag ideellt som tränare för MMA och Grappling utövare, allt från motionärer till amatörer och proffs. Min drivkraft är att engagera mig i människors idrottsliga och fysiska utveckling och prestation. Med stor motivation tränar jag både nybörjare och elitutövare på proffsnivå.";

  const handleClick = () => {
    setShowMore(!showMore);
  };

  if (!showMore) {
    descriptionText = descriptionText.substring(0, 200) + "...";
  }

  return (
    <>
      <div>
        <img
          src={martin}
          style={{ marginBottom: "40px", marginTop: "40px" }}
          className="img-fluid"
          alt="Martin Pettersson"
        />
        <h1 className="title">Altan Celik</h1>
        <p className="descriptionTextMobile" style={{ fontWeight: "500" }}>
          Personlig Tränare
        </p>
        <hr style={{}} className="aboutUsHR" />
        <hr style={{ color: "#fff", opacity: "0.2" }} />

        <p className="descriptionTextMobile">{descriptionText}</p>
        {showMore && (
          <>
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
              <li>Personlig Träning & Utveckling</li>
              <li>Kampsport</li>
              <li>Sportspecifik prestation</li>
            </ul>
          </>
        )}
        <p className="visaMer" onClick={handleClick}>
          {showMore ? "Visa mindre" : "Läs mer"}
        </p>
      </div>
    </>
  );
};

export default MartinPrez;
