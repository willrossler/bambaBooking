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
      <Container style={{ marginTop: "40px" }} className="desktopView">
        <AbbeDesktop />
        <JockeDesktop />
        <MartinDesktop />
        <NajDesktop />
      </Container>

      <Container className="mobileView">
        <div>
          {showFullDescriptionAbbe ? <AbbePrez /> : <AbbeShort />}
          {showFullDescriptionAbbe ? (
            <p
              className="descriptionTitleMobile"
              onClick={() => setShowFullDescriptionAbbe(false)}
            >
              Visa mindre
            </p>
          ) : (
            <p
              className="descriptionTitleMobile"
              onClick={() => setShowFullDescriptionAbbe(true)}
            >
              Läs mer...
            </p>
          )}
          {showFullDescriptionJocke ? <JockePrez /> : <JockeShort />}
          {showFullDescriptionJocke ? (
            <button onClick={() => setShowFullDescriptionJocke(false)}>
              Show less
            </button>
          ) : (
            <button onClick={() => setShowFullDescriptionJocke(true)}>
              Show more
            </button>
          )}
          {showFullDescriptionMartin ? <MartinPrez /> : <MartinShort />}
          {showFullDescriptionMartin ? (
            <button onClick={() => setShowFullDescriptionMartin(false)}>
              Show less
            </button>
          ) : (
            <button onClick={() => setShowFullDescriptionMartin(true)}>
              Show more
            </button>
          )}
          {showFullDescriptionNajmedin ? <NajPrez /> : <NajShort />}
          {showFullDescriptionNajmedin ? (
            <button onClick={() => setShowFullDescriptionNajmedin(false)}>
              Show less
            </button>
          ) : (
            <button onClick={() => setShowFullDescriptionNajmedin(true)}>
              Show more
            </button>
          )}
        </div>
      </Container>
    </>
  );
};

export default ShopScreen;
