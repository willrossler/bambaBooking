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
                Boxningskonsten har trollbundit människor sen långt tillbaka i
                tiden. Allt från de dansande rörelserna till kraften och
                spänningen. Som träningsform har den kanske fått mer erkännande
                på senare år vilket vi verkligen tycker den förtjänar – få
                träningsformer är så dynamiska och effektiva för både muskler
                och mental träning. Utmaningen är att i rytm utföra slagserier i
                en koordinerad sammansättning av balans, styrka och fotarbete.
                Detta kan till en början se enkelt ut men det är en konst som
                kan förfinas i många år. <br />
                <br />
                Boxningskonsten har trollbundit människor sen långt tillbaka i
                tiden. Allt från de dansande rörelserna till kraften och
                spänningen. Som träningsform har den kanske fått mer erkännande
                på senare år vilket vi verkligen tycker den förtjänar – få
                träningsformer är så dynamiska och effektiva för både muskler
                och mental träning. Utmaningen är att i rytm utföra slagserier i
                en koordinerad sammansättning av balans, styrka och fotarbete.
                Detta kan till en början se enkelt ut men det är en konst som
                kan förfinas i många år. <br />
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
                <li>Uthållhighet och styrka</li>
                <li>Coaching</li>
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
                Boxningskonsten har trollbundit människor sen långt tillbaka i
                tiden. Allt från de dansande rörelserna till kraften och
                spänningen. Som träningsform har den kanske fått mer erkännande
                på senare år vilket vi verkligen tycker den förtjänar – få
                träningsformer är så dynamiska och effektiva för både muskler
                och mental träning. Utmaningen är att i rytm utföra slagserier i
                en koordinerad sammansättning av balans, styrka och fotarbete.
                Detta kan till en början se enkelt ut men det är en konst som
                kan förfinas i många år.{" "}
              </p>
              <br />
              <p className="descriptionText" style={{ fontWeight: "400" }}>
                Specialicerad inom:
              </p>
              <ul
                className="descriptionText"
                style={{ marginBottom: "30px", lineHeight: "21px" }}
              >
                <li>Thaiboxning</li>
                <li>Uthållhighet och styrka</li>
                <li>Coaching</li>
                <li>Teambuilding</li>
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
                Boxningskonsten har trollbundit människor sen långt tillbaka i
                tiden. Allt från de dansande rörelserna till kraften och
                spänningen. Som träningsform har den kanske fått mer erkännande
                på senare år vilket vi verkligen tycker den förtjänar – få
                träningsformer är så dynamiska och effektiva för både muskler
                och mental träning. Utmaningen är att i rytm utföra slagserier i
                en koordinerad sammansättning av balans, styrka och fotarbete.
                Detta kan till en början se enkelt ut men det är en konst som
                kan förfinas i många år. <br />
                <br />
                Boxningskonsten har trollbundit människor sen långt tillbaka i
                tiden. Allt från de dansande rörelserna till kraften och
                spänningen. Som träningsform har den kanske fått mer erkännande
                på senare år vilket vi verkligen tycker den förtjänar – få
                träningsformer är så dynamiska och effektiva för både muskler
                och mental träning. Utmaningen är att i rytm utföra slagserier i
                en koordinerad sammansättning av balans, styrka och fotarbete.
                Detta kan till en början se enkelt ut men det är en konst som
                kan förfinas i många år.{" "}
              </p>
              <br />
              <p className="descriptionText" style={{ fontWeight: "400" }}>
                Specialicerad inom:
              </p>
              <ul
                className="descriptionText"
                style={{ marginBottom: "30px", lineHeight: "21px" }}
              >
                <li>Thaiboxning</li>
                <li>Uthållhighet och styrka</li>
                <li>Coaching</li>
                <li>Teambuilding</li>
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
