import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import abbe from "../assets/images/abbePic.jpg";
const AbbeDesktop = () => {
  return (
    <>
      <Row style={{ marginBottom: "120px" }} className="d-flex">
        <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
          <div>
            <h1 className="title">Abbe Joof</h1>
            <hr
              style={{ marginTop: "20px", marginBottom: "60px" }}
              className="pinkHr"
            />
            <p className="descriptionText" style={{ fontWeight: "500" }}>
              Ägare + Personlig Tränare
            </p>
            <br />
            <br />
            <p className="descriptionText">
              Jag är dubbel VM-medaljör i thaiboxning, före detta socialarbetare
              och arbetar som personlig tränare och coach. Jag var med i SVT:s
              program Bästa Träningen och har även varit bokad som tränare på
              GIHs Idrotts- och hälsokonvent 2022. Min inneboende passion för
              träning, människor och kampsport har tagit mig på flera
              specialutbildningar inom personlig träning och kostrådgivning. Jag
              har coachat aktiva tävlande inom kampsport, arbetat som
              kampsportsinstruktör och personlig tränare under flera år. Min
              egen resa inom kampsport började som fjortonåring då jag började
              med thaiboxning och tog, som sextonåring, mitt första SM-guld.
              Bakom mig har jag flertalet proffsmatcher i thaiboxning, K1 och
              MMA, varav två SM-guld och två VM-brons i thaiboxning. Jag är i
              grunden utbildad socialpedagog och är även certifierad coach i
              personlig utveckling på jungiansk grund. Innan jag bytte karriär
              till att träna andra arbetade jag som verksamhetsledare inom
              Spånga-Tensta stadsdelsförvaltning, där jag var ansvarig för en av
              stadsdelsförvaltningens största satsningar för ökad delaktighet
              och inkludering av ungdomar och unga vuxna som befann sig i
              utsatta livssituationer. Andra personers välmående är helt enkelt
              väldigt viktigt för mig.
              <br />
              <br />
              Min ambition med BAMBA är att skapa en träningsstudio där alla får
              plats och kan träna tillsammans. Träning hos oss är till för alla
              oavsett om du är nybörjare, motionär eller elit. Vi utgår från
              varje individs specifika behov genom att erbjuda PT i världsklass.
              Våra pass och upplägg innebär allsidig träning för hela kroppen,
              såväl hjärna som hjärta. På ett lekfullt sätt testar vi olika
              former av träningsstilar tillika specifik kampsportsfys.
              <br />
              <br />
              Att träna hos oss hoppas vi ska ge: <br /> – Bättre självkänsla
              och självförtroende
              <br /> – Ökad koncentrationsförmåga och lindring av stress
              <br /> – Tydliga resultat
              <br />
              <br /> Jag tänker att träning behövs både mentalt och fysiskt, att
              dessa hör ihop och är viktiga för ett gott hälsosamt liv. Om det
              är något alla borde träna någon gång i sitt liv så är det någon
              form av kampsport!
            </p>
            <br />
            <p className="descriptionText" style={{ fontWeight: "400" }}>
              Specialicerad inom:
            </p>
            <ul className="descriptionText" style={{ lineHeight: "21px" }}>
              <li>Thaiboxning</li>
              <li>Coaching</li>
              <li>Teknik</li>
              <li>Teambuilding</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <img src={abbe} className="img-fluid" alt="Abbe Joof" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AbbeDesktop;
