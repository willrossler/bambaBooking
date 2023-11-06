import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import martin from "../assets/images/Martin.jpg";

const MartinDesktop = () => {
  return (
    <>
      <Row className="d-flex">
        <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
          <div>
            <h1 className="title">Altan Celik</h1>
            <hr
              style={{ marginTop: "20px", marginBottom: "60px" }}
              className="pinkHr"
            />
            <p className="descriptionText" style={{ fontWeight: "500" }}>
              Personlig Tränare
            </p>
            <br />
            <br />
            <p className="descriptionText">
              Jag har utövat kampsport sedan 8 års ålder inkluderat karate,
              kickboxning, boxning, taekwondo och Brasilianskt Jiu Jitsu. Mina
              främsta meriter som profissionell är pallplatser inom BJJ och
              Submission Wrestling. Sedan 2010 sitter jag i utbildningskomitten
              för Svenska Budo & Kampsportsförbundet med stor inblick i
              föreningslivet och utvecklingen av tränarna i Sverige.
              <br />
              <br />
              Utöver mitt yrke jobbar jag ideellt som tränare för MMA och
              Grappling utövare, allt från motionärer till amatörer och proffs.
              Min drivkraft är att engagera mig i människors idrottsliga och
              fysiska utveckling och prestation. Med stor motivation tränar jag
              både nybörjare och elitutövare på proffsnivå.{" "}
            </p>
            <br />
            <p className="descriptionTitle" style={{ fontWeight: "400" }}>
              Specialicerad inom:
            </p>
            <ul className="descriptionText" style={{ lineHeight: "21px" }}>
              <br />

              <li>Personlig Träning & Utveckling</li>
              <li>Kampsport</li>
              <li>Sportspecifik prestation</li>
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
