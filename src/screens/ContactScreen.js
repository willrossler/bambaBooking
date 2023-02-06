import React from "react";

import ContactInfo from "../components/ContactInfo";
import TrainerCardAbbe from "../components/TrainerCardAbbe";
import TrainerCardMartin from "../components/TrainerCardMartin";
import TrainerCardJocke from "../components/TrainerCardJocke";
import MapComponent from "../components/MapComponent";
import MapComponentMobile from "../components/MapComponentMobile";

import { Row, Col } from "react-bootstrap";

import contactPic from "../assets/images/contactPic.jpg";

const ContactScreen = () => {
  return (
    <>
      {/* DESKTOP VIEW  */}
      <img
        src={contactPic}
        className="img-fluid d-none d-lg-block d-md-inline"
        alt="Home Image"
        style={{ marginBottom: "100px" }}
      />
      <div className="desktopView container">
        <section>
          <div>
            <div className="d-flex justify-content-between pb-5 pt-5 ">
              <div style={{ paddingTop: "3em", paddingRight: "22%" }}>
                <h1 className="title">
                  {/* kolla avstånd mellan streck todo */}
                  LOCATION
                </h1>
                <hr className="pinkHr" />

                <ContactInfo />
              </div>
              <MapComponent />
            </div>
          </div>
        </section>
        <section className=" ">
          <div className="container ">
            <h1 className="title">PERSONAL TRAINERS</h1>
            <hr className="pinkHr" />
            {/* todo avstånd bilder enligt figma */}
            <div className="d-flex flex-row justify-content-start">
              <div style={{ marginRight: "5%" }}>
                <TrainerCardAbbe />
              </div>
              <div style={{ marginRight: "5%", marginLeft: "5%" }}>
                <TrainerCardJocke />
              </div>
              <div style={{ marginRight: "5%", marginLeft: "5%" }}>
                <TrainerCardMartin />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mobileView">
        <section className="d-flex flex-column container">
          <hr style={{ margin: "0" }} />
          <h1 style={{ marginTop: "40px" }} className="title">
            LOCATION
            <hr className="pinkHrMobile" />
          </h1>
          <ContactInfo />
          {/* samma setup som på details */}

          <h1 style={{ marginTop: "60px" }} className="title">
            PERSONLIGA TRÄNARE
            <hr className="pinkHrMobile" />
          </h1>
          <div className="container d-flex" style={{ marginTop: "8px" }}>
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
        </section>
      </div>
    </>
  );
};

export default ContactScreen;
