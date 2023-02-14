import React from "react";
import ProductCard from "../components/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import abbe from "../assets/images/abbePic.png";
import jocke from "../assets/images/jockePic.png";
import martin from "../assets/images/martinPic.png";

const ShopScreen = () => {
  return (
    <>
      <Container style={{ marginTop: "40px" }} className="desktopView">
        <Row className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">Abbe Joof</h1>
              <p className="descriptionText" style={{ fontWeight: "500" }}>
                Ägare + Personlig Tränare
              </p>
              <hr className="pinkHr" />

              <p className="descriptionText">
                Jag är dubbel VM-medaljör i thaiboxning, före detta
                socialarbetare och arbetar som personlig tränare och coach. Jag
                var med i SVT:s program Bästa Träningen och har även varit bokad
                som tränare på GIHs Idrotts- och hälsokonvent 2022. Min
                inneboende passion för träning, människor och kampsport har
                tagit mig på flera specialutbildningar inom personlig träning
                och kostrådgivning. Jag har coachat aktiva tävlande inom
                kampsport, arbetat som kampsportsinstruktör och personlig
                tränare under flera år. Min egen resa inom kampsport började som
                fjortonåring då jag började med thaiboxning och tog, som
                sextonåring, mitt första SM-guld. Bakom mig har jag flertalet
                proffsmatcher i thaiboxning, K1 och MMA, varav två SM-guld och
                två VM-brons i thaiboxning. Jag är i grunden utbildad
                socialpedagog och är även certifierad coach i personlig
                utveckling på jungiansk grund. Innan jag bytte karriär till att
                träna andra arbetade jag som verksamhetsledare inom
                Spånga-Tensta stadsdelsförvaltning, där jag var ansvarig för en
                av stadsdelsförvaltningens största satsningar för ökad
                delaktighet och inkludering av ungdomar och unga vuxna som
                befann sig i utsatta livssituationer. Andra personers välmående
                är helt enkelt väldigt viktigt för mig.
                <br />
                <br />
                Min ambition med BAMBA är att skapa en träningsstudio där alla
                får plats och kan träna tillsammans. Träning hos oss är till för
                alla oavsett om du är nybörjare, motionär eller elit. Vi utgår
                från varje individs specifika behov genom att erbjuda PT i
                världsklass. Våra pass och upplägg innebär allsidig träning för
                hela kroppen, såväl hjärna som hjärta. På ett lekfullt sätt
                testar vi olika former av träningsstilar tillika specifik
                kampsportsfys.
                <br />
                <br />
                Att träna hos oss hoppas vi ska ge: <br /> – Bättre självkänsla
                och självförtroende
                <br /> – Ökad koncentrationsförmåga och lindring av stress
                <br /> – Tydliga resultat
                <br />
                <br /> Jag tänker att träning behövs både mentalt och fysiskt,
                att dessa hör ihop och är viktiga för ett gott hälsosamt liv. Om
                det är något alla borde träna någon gång i sitt liv så är det
                någon form av kampsport!
              </p>
              <br />
              <p className="descriptionText" style={{ fontWeight: "400" }}>
                Specialicerad inom:
              </p>
              <ul
                className="descriptionText"
                style={{ marginBottom: "120px", lineHeight: "21px" }}
              >
                <li>Thaiboxning</li>
                <li>Coaching</li>
                <li>Teknik</li>
                <li>Teambuilding</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img
                src={abbe}
                style={{ marginBottom: "120px", borderRadius: "50%" }}
                className="img-fluid"
                alt="Abbe Joof"
              />
            </div>
          </Col>
        </Row>

        <Row className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <img
                src={jocke}
                style={{ marginBottom: "120px", borderRadius: "50%" }}
                className="img-fluid"
                alt="Jocke Karlsson"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h1 className="title">Joakim Karlsson</h1>
              <p className="descriptionText" style={{ fontWeight: "500" }}>
                Personlig Tränare
              </p>
              <hr style={{}} className="pinkHr" />
              {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

              <p className="descriptionText">
                Träning har varit en konstant i mitt liv, allt från hockey,
                fotboll till kampsport. Jag har gått ett trettiotal matcher som
                professionell atlet inom Thaiboxning & K-1 och har medaljer från
                SM & VM i mitt bagage. Efter avslutad karriär sadlade jag om
                till thaiboxningscoach och är idag förbundstränare åt det
                Svenska landslaget i thaiboxning. Med min bakgrund inom
                kampsport har jag förstått vikten av att kunna grunderna i
                aktiviteter för att utvecklas både inom sport men också som
                person. Jag tror på fördelen med att nyttja kroppen på alla
                parametrar: frekvens, styrka, och uthållighet, för att enklare
                nå atletiska mål. Jag kommer senast från Allstars Training
                Center där jag var huvudcoach för thaiboxningen och har haft
                äran att ta fram både svenska och europeiska världsmästare. Som
                tränare är jag lyhörd och inkännande samtidigt som jag är tuff
                när det behövs. Som coach är jag pedagogisk och tålmodig.
                <br />
                <br />
                Mitt mål som tränare är att hjälpa dig uppnå dina mål, pusha dig
                till nya nivåer samt ge dig ökad styrka, starkare självkänsla
                och ett hälsosammare liv
              </p>
              <br />
              <p className="descriptionText" style={{ fontWeight: "400" }}>
                Specialicerad inom: kampsport, teknik, fys & löpning.
              </p>
              <ul
                className="descriptionText"
                style={{ marginBottom: "30px", lineHeight: "21px" }}
              >
                <li>Kampsport</li>
                <li>Teknik</li>
                <li>Fys</li>
                <li>löpning</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">Martin Pettersson</h1>
              <p className="descriptionText" style={{ fontWeight: "500" }}>
                Personlig Tränare
              </p>
              <hr style={{}} className="pinkHr" />
              {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

              <p className="descriptionText">
                Mitt sportutövande tar avstamp i amerikansk fotboll där jag,
                efter några år i landslaget, bl.a. tog guld i det nordiska
                mästerskapet. Med en avslutad sportkarriär i ryggen så är jag
                idag specialist inom tyngdlyftning och styrketräning samtidigt
                som jag själv lär mig diverse kampsporter. Arbetskarriären inom
                träning började på West Barbell Club i Bromma, ett gym med fokus
                på att bygga upp och utveckla atleter. Utöver det har jag varit
                coach för Alvik Basket, Brommapojkarna och Bromma Maniacs i
                amerikansk fotboll. Sedan 2015 har jag arbetat som lärare på
                Personal Training School, där jag utbildar personliga tränare i
                det praktiska utövandet samt i grundläggande anatomi.
                <br />
                <br />
                Min drivkraft som personlig tränare är att se din utveckling för
                att tillsammans kunna glädjas åt att du uppnått dina mål. Under
                våra sessioner kan du förvänta dig fokus på precision och
                noggrannhet i både utövande och träningsprogram.{" "}
              </p>
              <br />
              <p className="descriptionText" style={{ fontWeight: "400" }}>
                Specialicerad inom:
              </p>
              <ul
                className="descriptionText"
                style={{ marginBottom: "30px", lineHeight: "21px" }}
              >
                <li>Styrketräning</li>
                <li>Tyngdlyftning</li>
                <li>Sportspecifik prestation</li>
                <li>Öka muskelmassa</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img
                src={martin}
                style={{ marginBottom: "120px", borderRadius: "50%" }}
                className="img-fluid"
                alt="Martin Pettersson"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopScreen;
