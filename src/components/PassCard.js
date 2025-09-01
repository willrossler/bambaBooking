import React from "react";
import blackCard from "../assets/images/Card_Black_Square.jpg";
import whiteCard from "../assets/images/Card_White_Square.jpg";
import ptCard from "../assets/images/Card_PT_Square.jpg";
import giftCard from "../assets/images/Card_Klipp_Square.jpg";
import { Row, Col, Container } from "react-bootstrap";

const PassCard = () => {
  return (
    <>
      <div>
        <img
          src={giftCard}
          className="img-fluid"
          alt="Abbe Joof"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">BAMBA KLIPPKORT</h1>

        <hr style={{}} className="aboutUsHR" />
        <p className="descriptionTextMobile">
          Vill du komma igång och träna hos oss finns möjligheten att köpa
          klippkort för ett begränsat antal gånger, både för gruppträning men
          även för personlig träning.
          <br />
          <br />
          De olika passen inkluderar fys, styrketräning och kampsport. Syftet
          med våra olika pass är att du ska få lära dig grunderna i
          styrketräning, korrekt teknik samt prova på olika träningsformer.
          Genom att lära dig rätt teknik minskar skaderisken och du kommer få
          stora fördelar för din livslånga träning.
          <br />
          <br />
          Att köpa ett klippkort för personlig träning ger många fördelar för
          dig som vill förbättra din fysiska form och allmänna välbefinnande. Vi
          tar hänsyn till ditt unika behov, mål och fysiska förmågor för att
          skapa en träningsplan som är anpassad specifikt för dig. Detta hjälper
          till att säkerställa att du når dina träningsmål på ett säkert och
          effektivt sätt.
          <br />
          <br />
          En av våra coacher viger sin fulla kapacitet och den kunskap de
          besitter inom sina områden helt åt dig och de mål du vill nå. Vi ger
          rådgivning, stöd och säkerställer att du använder rätt form och teknik
          under dina träningar, vilket minskar risken för skador.
          <br />
          <br />
          Vi finns här för att tillsammans med dig forma ditt nya jag!
        </p>
        <br />
        <p className="descriptionTitleMobile" style={{ color: "#fff" }}>
          I lokalen finns det omklädningsrum, duschar och hygienartiklar.
        </p>
        <br />

        <p className="descriptionTitleMobile" style={{ color: "#fff" }}>
          Medlemskapet har ingen bindningstid.
        </p>
        <div style={{ marginTop: "20px" }}>
  <a
    href="https://www.bambaostermalm.se/membership"
  
    style={{
      display: "inline-block",
      backgroundColor: "#6a4c93", // Lila
      color: "#fff",
      fontWeight: "bold",
      padding: "10px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "1.1rem",
      transition: "background-color 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#56377d")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#6a4c93")}
  >
    Läs mer och bli medlem →
  </a>
</div>
      </div>
    </>
  );
};

export default PassCard;
