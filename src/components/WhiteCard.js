import React from "react";
import blackCard from "../assets/images/Card_Black_Square.jpg";
import whiteCard from "../assets/images/Card_White_Square.jpg";
import ptCard from "../assets/images/Card_PT_Square.jpg";
import giftCard from "../assets/images/Card_Klipp_Square.jpg";
import { Row, Col, Container } from "react-bootstrap";

const WhiteCard = () => {
  return (
    <>
      <div>
        <img
          src={whiteCard}
          className="img-fluid"
          alt="Abbe Joof"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">BAMBA VIT</h1>

        <hr style={{}} className="aboutUsHR" />
        <p className="descriptionTextMobile">
          <b>”BAMBA vit”</b> är för dig som hinner packa träningsväskan och
          komma ner till oss på morgonen, lunchen eller på kvällen för att få
          dagens träning avklarad. Medlemskapet ger dig tillgång till alla våra
          gruppass och du har möjlighet att boka upp dig på 2 pass/dag.
          <br />
          <br />
          De olika passen inkluderar fys, styrketräning och kampsport. Syftet
          med våra olika pass är att du ska få lära dig grunderna i
          styrketräning, korrekt teknik samt prova på olika träningsformer.
          Genom att lära dig rätt teknik minskar skaderisken och du kommer få
          stora fördelar för din livslånga träning.
          <br />
          <br />
          Du kan boka upp till 2 pass per dag och passen går att boka upp till 7
          dagar innan passtidens start. Avbokning av pass sker senast 2 timmar
          innan passtart.
          <br />
          <br />
        </p>
        <br />
        <p className="descriptionTitleMobile" style={{ color: "#fff" }}>
          I lokalen finns det omklädningsrum, duschar och hygienartiklar.
        </p>
        <br />

        <p className="descriptionTitleMobile" style={{ color: "#fff" }}>
          Medlemskapet har ingen bindningstid.
        </p>
      </div>
    </>
  );
};

export default WhiteCard;
