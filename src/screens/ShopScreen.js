import { useState, useEffect, useRef, React } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import najmedin from "../assets/images/Najmedin.jpg";

import "../screenStyles/aboutUsScreen.css";
import AbbeDesktop from "../components/AbbeDesktop";
import JockeDesktop from "../components/JockeDesktop";
import MartinDesktop from "../components/MartinDesktop";
import NajDesktop from "../components/NajDesktop";
import AbbePrez from "../components/AbbePrez";
import JockePrez from "../components/JockePrez";
import MartinPrez from "../components/MartinPrez";
import NajPrez from "../components/NajPrez";
import AbbeShort from "../components/AbbeShort";
import JockeShort from "../components/JockeShort";
import MartinShort from "../components/MartinShort";
import NajShort from "../components/NajShort";
const ShopScreen = () => {
  const [showFullDescriptionAbbe, setShowFullDescriptionAbbe] = useState(false);
  const [showFullDescriptionJocke, setShowFullDescriptionJocke] =
    useState(false);
  const [showFullDescriptionMartin, setShowFullDescriptionMartin] =
    useState(false);
  const [showFullDescriptionNajmedin, setShowFullDescriptionNajmedin] =
    useState(false);

  const location = useLocation();

  return (
    <>
      <Container style={{ marginTop: "80px" }} className="desktopView">
        <AbbeDesktop />
        <JockeDesktop />
        <MartinDesktop />
        <Row style={{ marginTop: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <img
                id="najmedin"
                src={najmedin}
                className="najmedinPic"
                alt="Najmedin Razavi"
              />
            </div>
          </Col>
          <Col style={{ paddingLeft: "5rem" }} xs={12} md={6}>
            <div>
              <h1 data-id="najmadin" className="title">
                Najmedin Razavi
              </h1>
              <p className="descriptionText" style={{ fontWeight: "500" }}>
                Mental Coach
              </p>
              <hr style={{}} className="pinkHr" />
              {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

              <p className="descriptionText">
                Mitt namn är Najmedin Razavi, på BAMBA är jag coach &
                existensterapeut. Min bakgrund sträcker sig från etnobotaniker
                till chefsutvecklare och har därmed mångårig erfarenhet inom
                både privat och offentlig sektor.
                <br />
                <br />
                Jag hjälper dig, utifrån din nuvarande livssituation och dina
                egna värderingar, att skapa riktning och uppnå positiva mål i
                ditt personliga och professionella liv. En del av min uppgift i
                relation till dig är att ge dig stöd och verktyg för en
                förbättrad vardag.
              </p>
              <br />
              <p className="descriptionText">
                Jag stöttar dig i att stilla bruset utifrån, våga lyssna inåt
                och definiera vad just du mår bra av och vill ha ut av ditt liv.
                Med en glasklar vision formas din personliga kompass som hjälper
                dig att klargöra syftet med nästa steg i ditt liv.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mobileView">
        <hr style={{ margin: "0" }} />

        <div>
          {showFullDescriptionAbbe ? <AbbePrez /> : <AbbeShort />}
          {showFullDescriptionAbbe ? (
            <p
              className="visaMer"
              onClick={() => setShowFullDescriptionAbbe(false)}
            >
              Visa mindre
            </p>
          ) : (
            <p
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionAbbe(true)}
            >
              Läs mer
            </p>
          )}
          {showFullDescriptionJocke ? <JockePrez /> : <JockeShort />}
          {showFullDescriptionJocke ? (
            <p
              className="visaMer"
              onClick={() => setShowFullDescriptionJocke(false)}
            >
              Visa mindre
            </p>
          ) : (
            <p
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionJocke(true)}
            >
              Läs mer
            </p>
          )}
          {showFullDescriptionMartin ? <MartinPrez /> : <MartinShort />}
          {showFullDescriptionMartin ? (
            <p
              className="visaMer"
              onClick={() => setShowFullDescriptionMartin(false)}
            >
              Visa mindre
            </p>
          ) : (
            <p
              id="najmed"
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionMartin(true)}
            >
              Läs mer
            </p>
          )}

          {showFullDescriptionNajmedin ? <NajPrez /> : <NajShort />}
          {showFullDescriptionNajmedin ? (
            <p
              className="visaMer"
              onClick={() => setShowFullDescriptionNajmedin(false)}
            >
              Visa mindre
            </p>
          ) : (
            <p
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionNajmedin(true)}
            >
              Läs mer
            </p>
          )}
        </div>
      </Container>
    </>
  );
};

export default ShopScreen;
