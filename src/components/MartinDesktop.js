import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import martin from "../assets/images/Martin.jpg";

const MartinDesktop = () => {
  return (
    <>
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
              Mitt sportutövande tar avstamp i amerikansk fotboll där jag, efter
              några år i landslaget, bl.a. tog guld i det nordiska mästerskapet.
              Med en avslutad sportkarriär i ryggen så är jag idag specialist
              inom tyngdlyftning och styrketräning samtidigt som jag själv lär
              mig diverse kampsporter. Arbetskarriären inom träning började på
              West Barbell Club i Bromma, ett gym med fokus på att bygga upp och
              utveckla atleter. Utöver det har jag varit coach för Alvik Basket,
              Brommapojkarna och Bromma Maniacs i amerikansk fotboll. Sedan 2015
              har jag arbetat som lärare på Personal Training School, där jag
              utbildar personliga tränare i det praktiska utövandet samt i
              grundläggande anatomi.
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
              style={{ marginBottom: "120px" }}
              className="img-fluid"
              alt="Martin Pettersson"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MartinDesktop;
