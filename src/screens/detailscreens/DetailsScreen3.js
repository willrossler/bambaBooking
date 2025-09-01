import React from "react";

// TrainerCardJocke was imported but never used, so it can be removed.
import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardMartin from "../../components/TrainerCardMartin";
import TrainerCardNaj from "../../components/TrainerCardNaj";

import "../../screenStyles/traingingDetails.css";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
// Routes was imported but never used.
import { useLocation } from "react-router-dom"; // It's good practice to use react-router-dom

import PTpic from "../../assets/images/PersonligTraning_Desktop.jpg";
import PTpicMobile from "../../assets/images/PersonligTraning_Mobile.jpg";
import boxingPic from "../../assets/images/boxingPic.jpg";
import boxingPicMobile from "../../assets/images/boxingPicMobile.jpg";
import weightPic from "../../assets/images/StyrkeTraning_Desktop.jpg";
import weightPicMobile from "../../assets/images/StyrkeTraning_Mobile.jpg";
import campPic from "../../assets/images/BootCamp_Desktop.jpg";
import campPicMobile from "../../assets/images/BootCamp_Mobile.jpg";
import mentalPic from "../../assets/images/MentalCoaching_Desktop.jpg";
import mentalTrainingPicMobile from "../../assets/images/MentalCoaching_Mobile.jpg";
import martialPic from "../../assets/images/Kampsport_Desktop.jpg";
import thaiboxMobile from "../../assets/images/Kampsport_Mobile.jpg";
import ungdomPic from "../../assets/images/ungdomPic.jpg";
import foretagsPic from "../../assets/images/foretagPic.jpg";

import BoxingDetails from "../../detailsComponents/BoxingDetails";
import WeightliftDetails from "../../detailsComponents/WeightliftDetails";
import MartialDetails from "../../detailsComponents/MartialDetails";
import CampDetails from "../../detailsComponents/CampDetails";

import MartialMobileDetails from "../../detailsComponents/MartialMobileDetails";
import BoxingMobileDetails from "../../detailsComponents/BoxingMobileDetails";
// WeightLiftDetails was imported twice with slightly different names.
// import WeightLiftDetails from "../../detailsComponents/WeightliftDetails";
import ForetagsDetails from "../../detailsComponents/ForetagsDetails";
import UngdomsDetails from "../../detailsComponents/UngdomsDetails";
import WeightliftMobile from "../../detailsComponents/WeightliftMobile";
import { PersonalTrainingDetails } from "../../detailsComponents/PersonalTrainingDetails";
import MentailDetails from "../../detailsComponents/MentailDetails";
import ForetagsMobileDetails from "../../detailsComponents/ForetagsMobileDetails";
import UngdomsMobileDetails from "../../detailsComponents/UngdomsMobileDetails";
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
        setTitle("BOOT CAMP");
        break;
      case "/martialarts":
        setMobileSrc(thaiboxMobile);
        setSrc(martialPic);
        setTitle("KAMPSPORT");
        break;
      case "/mentaltraining":
        setMobileSrc(mentalTrainingPicMobile);
        setSrc(mentalPic);
        setTitle("MENTAL COACHING");
        break;
      case "/personaltraining":
        setMobileSrc(PTpicMobile);
        setSrc(PTpic);
        setTitle("PERSONLIG TRÄNING");
        break;
      case "/ungdomstraning":
        setMobileSrc(ungdomPic);
        setSrc(ungdomPic);
        setTitle("UNGDOMSTRÄNING");
        break;
      case "/foretagstraning":
        setMobileSrc(foretagsPic);
        setSrc(foretagsPic);
        setTitle("FÖRETAGSTRÄNING");
        break;

      default:
        setMobileSrc(undefined); // Explicitly set to undefined
        setSrc("/path/to/default.jpg");
        setTitle("Default title");
    }
  }, [location.pathname]);

  // Determine which trainers to show based on the path
  const showAbbe = location.pathname !== "/mentaltraining";
  const showMartin =
    location.pathname !== "/bootcamp" && location.pathname !== "/mentaltraining";
  const showNaj = location.pathname === "/mentaltraining";

  return (
    <>
      <Container style={{ marginTop: "80px" }} className="desktopView">
        <Row className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">{title}</h1>
              <hr className="pinkHr" />

              <div>
                {location.pathname === "/foretagstraning" && <ForetagsDetails />}
                {location.pathname === "/ungdomstraning" && <UngdomsDetails />}
                {location.pathname === "/boxing" && <BoxingDetails />}
                {location.pathname === "/martialarts" && <MartialDetails />}
                {location.pathname === "/bootcamp" && <CampDetails />}
                {location.pathname === "/mentaltraining" && <MentailDetails />}
                {location.pathname === "/personaltraining" && <PersonalTrainingDetails />}
                {location.pathname === "/weightlifting" && <WeightliftDetails />}
                {/* The redundant check for "/camp" is removed */}
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
                alt="Workout"
              />
              {/* --- REVISED TRAINER LOGIC FOR DESKTOP --- */}
              <div className="d-flex flex-row justify-content-between">
                {/* Show Abbe on all pages except Mental Training */}
                {showAbbe && <TrainerCardAbbe />}
                
                {/* Show Martin on all pages except Boot Camp and Mental Training */}
                {showMartin && <TrainerCardMartin />}

                {/* Show Naj only on Mental Training */}
                {showNaj && <TrainerCardNaj />}
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
        <img src={mobileSrc} className="img-fluid mobileImg" alt="Workout" />

        <div>
          {location.pathname === "/boxing" && <BoxingMobileDetails />}
          {location.pathname === "/martialarts" && <MartialMobileDetails />}
          {location.pathname === "/bootcamp" && <CampMobileDetails />}
          {location.pathname === "/mentaltraining" && <MentalMobile />}
          {location.pathname === "/foretagstraning" && <ForetagsMobileDetails />}
          {location.pathname === "/ungdomstraning" && <UngdomsMobileDetails />}
          {location.pathname === "/weightlifting" && <WeightliftMobile />}
          {location.pathname === "/personaltraining" && <PersonalTrainingMobileDetails />}
          {/* The redundant check for "/camp" is removed */}
        </div>
        <hr />
        {/* --- REVISED TRAINER LOGIC FOR MOBILE --- */}
        <div className="mobileTrainerGrid">
            {/* Logic is now consistent with the desktop view */}
            {showAbbe && <TrainerCardAbbe />}
            {showMartin && <TrainerCardMartin />}
            {showNaj && <TrainerCardNaj />}
        </div>
      </Container>
    </>
  );
};

export default DetailsScreen3;