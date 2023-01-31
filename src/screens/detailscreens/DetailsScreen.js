import React from "react";
import BoxingBanner from "../../components/BoxingBanner";
import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";
import bootCampPic from "../../assets/images/bootCamp.jpg";

import TrainingInfo from "../../components/TrainingInfo";
import "../../screenStyles/traingingDetails.css";

import texts from "../../assets/texts/texts.json";

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
        break;
      case "/weightlifting":
        setSrc(weightPic);
        break;
      case "/bootcamp":
        setSrc(campPic);
        break;
      case "/mentaltraining":
        setSrc(mentalPic);
        break;
      case "/personaltraining":
        setSrc(PTPic);
        break;
      case "/martialarts":
        setSrc(martialPic);
        break;
      default:
        setSrc("/path/to/default.jpg");
    }
  }, [location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case "/boxing":
        setTitle("BOXNING");
        break;
      case "/weightlifting":
        setTitle("STYRKETRÄNING");
        break;
      case "/bootcamp":
        setTitle("CAMP");
        break;
      case "/mentaltraining":
        setTitle("MENTAL TRÄNING");
        break;
      case "/personaltraining":
        setTitle("PERSONLIG TRÄNING");
        break;
      case "/martialarts":
        setTitle("KAMPSPORT");
        break;
      default:
        setTitle("/path/to/default.jpg");
    }
  }, [location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case "/boxing":
        setText(texts.boxingCopy);
        break;
      case "/weightlifting":
        setText(texts.weightCopy);
        break;
      case "/bootcamp":
        setText(texts.campCopy);
        break;
      case "/martialarts":
        setText(texts.martialCopy);
        break;
      case "/mentaltraining":
        setText(texts.mentalCopy);
        break;
      case "/personaltraining":
        setText(texts.personalTrainingCopy);
        break;
      default:
        setText("Default text");
        console.log(texts);
    }
  }, [location.pathname]);

  return (
    <>
      {/* DESKTOP VIEW  */}
      <div className="wrapper desktopView container">
        <div className="textContainer">
          <h1 className="title desktopView">
            {title}
            <hr
              style={{ marginTop: "40px", marginBottom: "40px" }}
              className="pinkHr"
            />
          </h1>

          <h2 className="textHeaderPink">Beskrivning</h2>
          <br />
          <p id="descriptionText">{text}</p>
          <br />
          <hr style={{ color: "#fff", opacity: "0.2" }} />
          <br />
          <div className="trainingForms row ">
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

        <div className="bannerCard">
          <img
            src={src}
            style={{ marginBottom: "40px" }}
            className="img-fluid"
            alt="Workout Image"
          />
          <div className="d-flex justify-content-between ">
            <div>
              <TrainerCardAbbe />
            </div>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <TrainerCardJocke />
            </div>
            <div>
              <TrainerCardMartin />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW  */}
      <div className="container">
        <hr
          className="mobileView"
          style={{ color: "#fff", opacity: "0.2", margin: "0" }}
        />
        <h1
          className=" mobileView"
          style={{ color: "#fff", fontSize: "32px", marginTop: "55px" }}
        >
          CAMP
          <hr className="pinkHrMobile" />
        </h1>

        <img src={bootCampPic} className="img-fluid  mobileView" />
        <div className=" mobileView">
          <div className="textContainer">
            <h3 style={{ color: "#F5AAC9", marginTop: "30px" }}>Beskrivning</h3>

            <p>
              {" "}
              <p
                style={{
                  fontWeight: "300",
                  fontSize: "14px",
                  color: "#fff",
                  lineHeight: "22px",
                }}
              >
                Mellan 06.00-06.50, måndag, tisdag, torsdag och fredag under 8
                veckor, möts vi för intensiv morgonträning. Passen är enbart för
                er i campen och behöver inte bokas utan du får tillgång till
                alla pass när du köper Camp 8 veckor.
                <br />
                <br /> Camp utformas av någon av oss tränare och blandar olika
                träningsformer som styrka, kondition och kampsport. <br />
                <br /> Beroende på vem som håller i camp kan passen komma att se
                annorlunda ut. Alla vi har olika vinklar och sätt att träna på,
                detta bidrar till en varierad träningsform.
                <br />
              </p>
            </p>
            <hr
              className=""
              style={{
                color: "#fff",
                opacity: "0.2",
                marginTop: "40px",
                marginBottom: "0px",
              }}
            />
            <div className="trainingForms row py-4 ">
              <h3>FORMS OF TRAINING</h3>
              <div>
                <p>— Klasser (upp till 12 personer)</p>
                <p>— Mindre grupper (upp till 5 personer)</p>
                <p>— Personal training (one on one)</p>
                <p>— Testa på (tre pass för en komplett genomgång)</p>
                <p>— Introduktion (ett pass)</p>
                <br />
                <p>All träningsupplägg är tillgängliga som presentkort.</p>
              </div>
            </div>

            <div class="d-flex flex-row">
              <div class="p-1">
                {" "}
                <TrainerCardAbbe />
              </div>
              <div class="p-1">
                <TrainerCardJocke />
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="p-1">
                {" "}
                <TrainerCardMartin />
              </div>
            </div>
          </div>

          {/* todo RIGHT PADDING  */}
        </div>
      </div>
    </>
  );
};

export default DetailsScreen;
