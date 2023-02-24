import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import najmedin from "../assets/images/Najmedin.jpg";

const NajDesktop = () => {
  return (
    <>
      <Row style={{ marginTop: "120px" }} className="d-flex">
        <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
          <div>
            <img src={najmedin} className="najmedinPic" alt="Najmedin Razavi" />
          </div>
        </Col>
        <Col style={{ paddingLeft: "5rem" }} xs={12} md={6}>
          <div>
            <h1 className="title">Najmedin Razavi</h1>
            <p className="descriptionText" style={{ fontWeight: "500" }}>
              Mental Coach
            </p>
            <hr style={{}} className="pinkHr" />
            {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

            <p className="descriptionText">
              Mitt namn är Najmedin Razavi, på BAMBA är jag coach &
              existensterapeut. Min bakgrund sträcker sig från etnobotaniker
              till chefsutvecklare och har därmed mångårig erfarenhet inom både
              privat och offentlig sektor.
              <br />
              <br />
              Jag hjälper dig, utifrån din nuvarande livssituation och dina egna
              värderingar, att skapa riktning och uppnå positiva mål i ditt
              personliga och professionella liv. En del av min uppgift i
              relation till dig är att ge dig stöd och verktyg för en förbättrad
              vardag.
            </p>
            <br />
            <p className="descriptionText">
              Jag stöttar dig i att stilla bruset utifrån, våga lyssna inåt och
              definiera vad just du mår bra av och vill ha ut av ditt liv. Med
              en glasklar vision formas din personliga kompass som hjälper dig
              att klargöra syftet med nästa steg i ditt liv.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NajDesktop;
