import React from "react";

import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";

import "../../screenStyles/traingingDetails.css";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router";

import PTpic from "../../assets/images/PTpic.jpg";
import PTpicMobile from "../../assets/images/PTpicMobile.jpg";
import boxingPic from "../../assets/images/boxingPic.jpg";
import boxingPicMobile from "../../assets/images/boxingPicMobile.jpg";
import weightPic from "../../assets/images/weightLiftPic.jpg";
import weightPicMobile from "../../assets/images/weightLifMobile.jpg";
import campPic from "../../assets/images/bootCamp.jpg";
import campPicMobile from "../../assets/images/bootCampMobile.jpg";
import mentalPic from "../../assets/images/mentalTrainingPic.jpg";
import mentalTrainingPicMobile from "../../assets/images/mentalTrainingPicMobile.jpg";
import martialPic from "../../assets/images/thaibox.jpg";
import thaiboxMobile from "../../assets/images/thaiboxMobile.jpg";

import BoxingDetails from "../../detailsComponents/BoxingDetails";
import WeightliftDetails from "../../detailsComponents/WeightliftDetails";
import MartialDetails from "../../detailsComponents/MartialDetails";
import CampDetails from "../../detailsComponents/CampDetails";

import MartialMobileDetails from "../../detailsComponents/MartialMobileDetails";
import BoxingMobileDetails from "../../detailsComponents/BoxingMobileDetails";
import WeightLiftDetails from "../../detailsComponents/WeightliftDetails";
import WeightliftMobile from "../../detailsComponents/WeightliftMobile";
import { PersonalTrainingDetails } from "../../detailsComponents/PersonalTrainingDetails";
import MentailDetails from "../../detailsComponents/MentailDetails";
import PersonalTrainingMobileDetails from "../../detailsComponents/PersonalTrainingMobileDetails";
import CampMobileDetails from "../../detailsComponents/CampMobileDetails";
import MentalMobile from "../../detailsComponents/MentalMobile";

const DetailsScreen3 = () => {
  const location = useLocation();

  const [src, setSrc] = useState("");
  const [mobileSrc, setMobileSrc] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/boxing":
        setMobileSrc(boxingPicMobile);
        setSrc(boxingPic);
        setTitle("BOXNING");
        break;
      case "/weightlifting":
        setMobileSrc(weightPicMobile);
        setSrc(weightPic);
        setTitle("STYRKETRÄNING");
        break;
      case "/bootcamp":
        setMobileSrc(campPicMobile);
        setSrc(campPic);
        setTitle("CAMP");
        break;
      case "/martialarts":
        setMobileSrc(thaiboxMobile);
        setSrc(martialPic);
        setTitle("KAMPSPORT");
        break;
      case "/mentaltraining":
        setMobileSrc(mentalTrainingPicMobile);
        setSrc(mentalPic);
        setTitle("MENTAL TRÄNING");
        break;
      case "/personaltraining":
        setMobileSrc(PTpicMobile);
        setSrc(PTpic);
        setTitle("PERSONLIG TRÄNING");
        break;
      case "/boxing2":
        setMobileSrc();
        setSrc(martialPic);
        setTitle("BOXNING 2");
        break;
      case "/boxing3":
        setMobileSrc();
        setSrc(martialPic);
        setTitle("BOXNING 3");
        break;
      default:
        setMobileSrc();
        setSrc("/path/to/default.jpg");
        setTitle("Default title");
    }
  }, [location.pathname]);

  return (
    <>
      <Container style={{ marginTop: "40px" }} className="desktopView">
        <Row className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">{title}</h1>
              <hr style={{}} className="pinkHr" />
              {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

              <div>
                {location.pathname === "/boxing" && <BoxingDetails />}
                {location.pathname === "/martialarts" && <MartialDetails />}
                {location.pathname === "/bootcamp" && <CampDetails />}
                {location.pathname === "/mentaltraining" && <MentailDetails />}
                {location.pathname === "/personaltraining" && (
                  <PersonalTrainingDetails />
                )}
                {location.pathname === "/weightlifting" && (
                  <WeightliftDetails />
                )}

                {location.pathname === "/camp" && <CampDetails />}
              </div>
              <br />
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
        <img
          src={mobileSrc}
          className="img-fluid mobileImg"
          alt="Workout Image"
        />

        <div>
          {location.pathname === "/boxing" && <BoxingMobileDetails />}
          {location.pathname === "/martialarts" && <MartialMobileDetails />}
          {location.pathname === "/bootcamp" && <CampMobileDetails />}
          {location.pathname === "/mentaltraining" && <MentalMobile />}

          {location.pathname === "/weightlifting" && <WeightliftMobile />}
          {location.pathname === "/personaltraining" && (
            <PersonalTrainingMobileDetails />
          )}

          {location.pathname === "/camp" && <CampDetails />}
        </div>
        <hr />
        <div className="mobileTrainerGrid">
          <TrainerCardAbbe />
          <TrainerCardJocke />
          <TrainerCardMartin />
        </div>
      </Container>
    </>
  );
};

export default DetailsScreen3;
