import React from "react";
import blackCard from "../assets/images/Card_Black_Square.jpg";
import whiteCard from "../assets/images/Card_White_Square.jpg";
import ptCard from "../assets/images/Card_PT_Square.jpg";
import giftCard from "../assets/images/Card_Klipp_Square.jpg";
import { Row, Col, Container } from "react-bootstrap";

const BlackCard = () => {
  return (
    <>
      <div>
        <img
          src={blackCard}
          className="img-fluid"
          alt="Abbe Joof"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
      </div>
      <div>
        <h1 className="title">BAMBA SVART</h1>

        <hr style={{}} className="aboutUsHR" />
        <p className="descriptionTextMobile">
          <b>”BAMBA svart”</b> är medlemskapet för dig som inte vill behöva
          tänka på något och där vi tar ett helhetsansvar för din hälsa både
          fysiskt och psykiskt. I medlemskapet ingår en uppsättning av BAMBAS
          träningskläder, tvätt av kläderna mellan passen, handduk,
          hygienartiklar och ett eget skåp så du snabbt kommer åt dina
          nytvättade träningskläder inför varje träningspass.
          <br />
          <br />
          Givetvis har du tillgång till alla våra gruppass och utöver det även
          en sluten sparringgrupp som leds av Abbe Joof. I den slutna gruppen är
          en av många fördelar är att ni kommer bli ett sammansvetsat team som
          kämpar och hjälper varandra genom passen. Passet kräver din fulla
          närvaro och tillit till din tränare och övriga i gruppen.
          <br />
          <br />
          Vi vet att kroppen och sinnet hör ihop och det är när vi känner
          kontakt med bägge som vi brukar känna oss som mest tillfreds. Därför
          ingår också 1 timmes samtal med vår livscoach Najmedin. Najmedin
          hjälper dig, utifrån din nuvarande livssituation och dina egna
          värderingar, att skapa riktning och uppnå positiva mål i ditt
          personliga och professionella liv.
          <br />
          <br />
          För att säkerställa att du närmar dig de mål du vill nå med din
          träning ingår 1 timme PT med Abbe Joof per månad. Detta som en
          uppföljning och ett komplement till gruppklasserna.
          <br />
          <br />
          Ditt skåp är personligt och du kan lägga in det du vill förvara mellan
          och under passen. Efter avklarat pass kan du välja valfri dryck ur
          kylskåpet för att fylla på innan du ska iväg till nästa aktivitet.
          <br />
          <br />
          De olika passen inkluderar fys, styrketräning och kampsport. Syftet
          med våra olika pass är att du ska få lära dig grunderna i
          styrketräning, korrekt teknik samt prova på olika träningsformer.
          Genom att lära dig rätt teknik minskar skaderisken och du kommer få
          stora fördelar för din livslånga träning.
          <br />
          <br />
          Du kan boka upp till 2 pass per dag utan maxgräns på antal bokade pass
          samtidigt. Passen går att boka upp till 14 dagar innan passtidens
          start. Avbokning av pass sker senast 1 timmar innan passtart.
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

export default BlackCard;
