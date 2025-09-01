import React from "react";
import blackCard from "../assets/images/Card_Black_Square.jpg";
import whiteCard from "../assets/images/Card_White_Square.jpg";
import PersCard from "../assets/images/Card_Pers_Square.jpg";
import { Row, Col, Container } from "react-bootstrap";

const PtCard = () => {
  return (
    <>
      <div>
        <img
          src={PersCard}
          className="img-fluid"
          alt="Abbe Joof"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">BAMBA PT</h1>

        <hr style={{}} className="aboutUsHR" />
        <p className="descriptionTextMobile">
          Personlig träning ger många fördelar för dig som vill förbättra din
          fysiska form och allmänna välbefinnande. Vi tar hänsyn till ditt unika
          behov, mål och fysiska förmågor för att skapa en träningsplan som är
          anpassad specifikt för dig. Vi går igenom kortsiktiga och långsiktiga
          mål och reviderar dessa under resans gång. Allt detta för att hjälpa
          dig säkerställa att du når dina träningsmål på ett säkert och
          effektivt sätt.
          <br />
          <br />
          En av våra coacher viger sin fulla kapacitet och den kunskap de
          besitter inom sina områden helt åt dig och de mål du vill nå. Vi ger
          rådgivning, stöd och säkerställer att du använder rätt form och teknik
          under dina träningar, vilket minskar risken för skador.
          <br />
          <br />
          Du har möjlighet att välja tränare efter träningsform du föredrar och
          vi hjälper dig att utifrån egna mål och skräddarsydda träningsupplägg
          på återkommande tider varje vecka enbart för dig. Att boka en fast tid
          hjälper dig att antingen komma igång med träning, komma i bättre form
          eller få in rutinen att träna varje vecka.
          <br />
          <br />
          Vi finns här för att tillsammans med dig forma ditt nya jag!
        </p>
        <br />
        <p className="descriptionTitleMobile" style={{ color: "#fff" }}>
          I lokalen finns det omklädningsrum, duschar och hygienartiklar.
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

export default PtCard;
