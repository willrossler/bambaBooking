import { useState, React } from "react";

import "../screenStyles/aboutUsScreen.css";

import { Row, Col, Container } from "react-bootstrap";

import najmedin from "../assets/images/Najmedin.jpg";

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

  return (
    <>
      <Container style={{ marginTop: "100px" }} className="desktopView">
        <AbbeDesktop />
        <JockeDesktop />
        <MartinDesktop />
        <NajDesktop />
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
              Show less
            </p>
          ) : (
            <p
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionJocke(true)}
            >
              Show more
            </p>
          )}
          {showFullDescriptionMartin ? <MartinPrez /> : <MartinShort />}
          {showFullDescriptionMartin ? (
            <p
              className="visaMer"
              onClick={() => setShowFullDescriptionMartin(false)}
            >
              Show less
            </p>
          ) : (
            <p
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionMartin(true)}
            >
              Show more
            </p>
          )}
          {showFullDescriptionNajmedin ? <NajPrez /> : <NajShort />}
          {showFullDescriptionNajmedin ? (
            <p
              className="visaMer"
              onClick={() => setShowFullDescriptionNajmedin(false)}
            >
              Show less
            </p>
          ) : (
            <p
              className="visaMer"
              style={{ marginTop: "10px" }}
              onClick={() => setShowFullDescriptionNajmedin(true)}
            >
              Show more
            </p>
          )}
        </div>
      </Container>
    </>
  );
};

export default ShopScreen;
