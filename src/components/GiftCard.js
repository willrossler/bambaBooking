import React from "react";
import blackCard from "../assets/images/Card_Black_Square.jpg";
import whiteCard from "../assets/images/Card_White_Square.jpg";
import ptCard from "../assets/images/Card_PT_Square.jpg";
import giftCard from "../assets/images/Card_Klipp_Square.jpg";
import { Row, Col, Container } from "react-bootstrap";

const GiftCard = () => {
  return (
    <>
      {" "}
      <div>
        <img
          src={ptCard}
          className="img-fluid"
          alt="Abbe Joof"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">BAMBA PRESENTKORT</h1>

        <hr style={{}} className="aboutUsHR" />
        <p className="descriptionTextMobile">
          Kanske behöver någon i din närhet en utmaning, hjälp att koma igång
          eller hjälp att nå sina träningsmål?!
          <br />
          <br />
          Att köpa ett presentkort hos oss kan innebära allt ifrån en utmaning
          att sparras med en dubbel VM-medaljör i thaiboxning, att åstadkomma
          stor förändring under en intensiv period eller enbart välbehövlig egen
          tid med fokus på just en själv och sitt mående.
          <br />
          <br />
          Att unna någon en träningsupplevelse med någon av våra professionella
          tränare kan vara början till ett långt och hälsosamt liv. Oavsett vad
          avsikten är så tar vi fram ett lämpligt upplägg och passar för det du
          har tänkt.
          <br />
          <br />
        </p>
        <br />
        <p className="descriptionTitleMobile" style={{ color: "#fff" }}>
          I lokalen finns det omklädningsrum, duschar och hygienartiklar.
        </p>
      </div>
    </>
  );
};

export default GiftCard;
