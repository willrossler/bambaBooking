import React from "react";
import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";

import "../../screenStyles/traingingDetails.css";

import texts from "../../assets/texts/texts.json";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import PTPic from "../../assets/images/PTpic.jpg";
import boxingPic from "../../assets/images/boxingPic.jpg";
import weightPic from "../../assets/images/weightLiftPic.jpg";
import campPic from "../../assets/images/bootCamp.jpg";
import mentalPic from "../../assets/images/mentalTrainingPic.jpg";
import martialPic from "../../assets/images/martialPic.jpg";

const DetailsScreen = () => {
  const location = useLocation();

  const [src, setSrc] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/boxing":
        setSrc(boxingPic);
        setTitle("BOXNING");
        setText(texts.boxingCopy);
        break;
      case "/weightlifting":
        setSrc(weightPic);
        setTitle("STYRKETRÄNING");
        setText(texts.weightCopy);
        break;
      case "/bootcamp":
        setSrc(campPic);
        setTitle("CAMP");
        setText(texts.campCopy);
        break;
      case "/martialarts":
        setSrc(martialPic);
        setTitle("KAMPSPORT");
        setText(texts.martialCopy);
        break;
      case "/mentaltraining":
        setSrc(mentalPic);
        setTitle("MENTAL TRÄNING");
        setText(texts.mentalCopy);
        break;
      case "/personaltraining":
        setSrc(PTPic);
        setTitle("PERSONLIG TRÄNING");
        setText(texts.personalTrainingCopy);
        break;
      default:
        setSrc("/path/to/default.jpg");
        setTitle("Default title");
        setText("Default text");
        console.log(texts);
    }
  }, [location.pathname]);

  return (
    <>
      <Container style={{ marginTop: "40px" }} className="desktopView">
        <Row className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">
                {title}
                <hr style={{}} className="pinkHr" />
              </h1>
              <p className="descriptionTitle">Beskrivning</p>
              <br />
              <p className="descriptionText">{text}</p>
              <br />
              <hr style={{ color: "#fff", opacity: "0.2" }} />
              <br />
              <div className="trainingForms">
                <h3>FORMS OF TRAINING</h3>
                <br />
                <div>
                  <p>— Klasser (upp till 12 personer)</p>
                  <p>— Mindre grupper (upp till 5 personer)</p>
                  <p>— Personal training (one on one)</p>
                  <p>— Testa på (tre pass för en komplett genomgång)</p>
                  <p>— Introduktion (ett pass)</p>
                  <br />
                  <p style={{ fontWeight: "500" }}>
                    All träningsupplägg är tillgängliga som presentkort.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img
                src={src}
                style={{ marginBottom: "60px" }}
                className="img-fluid"
                alt="Workout Image"
              />
              <div className=" ">
                {/* todo avstånd bilder enligt figma */}
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <TrainerCardAbbe />
                  </div>
                  <div>
                    <TrainerCardJocke />
                  </div>
                  <div>
                    <TrainerCardMartin />
                  </div>
                </div>
              </div>
              {/* <div className="d-flex justify-content-between">
                <Row>
                  <Col xs={12} md={4}>
                    <TrainerCardAbbe />
                  </Col>
                  <Col xs={12} md={4}>
                    <TrainerCardJocke />
                  </Col>
                  <Col xs={12} md={4}>
                    <TrainerCardMartin />
                  </Col>
                </Row>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mobileView">
        <hr style={{ margin: "0" }} />
        <h1 style={{ marginTop: "40px" }} className="title">
          {title}
          <hr className="pinkHrMobile" />
        </h1>
        <img src={src} className="img-fluid mobileImg" alt="Workout Image" />
        <p className="descriptionTitleMobile" style={{ marginTop: "30px" }}>
          Beskrivning
        </p>
        <p className="descriptionTextMobile" style={{ marginBottom: "30px" }}>
          {text}
        </p>
        <hr />
        <div className="trainingForms " style={{ marginTop: "20px" }}>
          <h3>FORMS OF TRAINING</h3>
          <div>
            <p>— Klasser (upp till 12 personer)</p>
            <p>— Mindre grupper (upp till 5 personer)</p>
            <p>— Personal training (one on one)</p>
            <p>— Testa på (tre pass för en komplett genomgång)</p>
            <p>— Introduktion (ett pass)</p>
            <br />
            <p style={{ fontWeight: "500" }}>
              All träningsupplägg är tillgängliga som presentkort.
            </p>
          </div>
        </div>
        <div className="container d-flex" style={{ marginTop: "40px" }}>
          <Row>
            <Col>
              <TrainerCardAbbe />
            </Col>
            <Col style={{ marginTop: "30px" }}>
              <TrainerCardJocke />
            </Col>
          </Row>
          <Row>
            <Col>
              <TrainerCardMartin />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default DetailsScreen;
