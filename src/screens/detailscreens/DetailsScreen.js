import React from "react";
import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";

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
      {/* DESKTOP VIEW  */}
      <div className="wrapper desktopView container">
        <div className="textContainer ">
          <h1 className="title desktopView">
            {title}
            <hr
              style={{ marginTop: "40px", marginBottom: "40px" }}
              className="pinkHr"
            />
          </h1>
          {/*  */}
          <p className="descriptionTitle">Beskrivning</p>
          <br />
          {/* todo lineHeight samt mobil */}
          <p className="descriptionText">{text}</p>
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
          {/* ÖKA AVSTÅND todo CHECK  */}
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
          {title}
          <hr
            style={{ marginTop: "30px", marginBottom: "30px" }}
            className="pinkHrMobile"
          />
        </h1>
        {/* dubbla avstånd? todo */}
        <img src={src} className="img-fluid  mobileView" />
        <div className=" mobileView">
          <div className="textContainer">
            <p
              style={{
                color: "#F5AAC9",
                marginTop: "30px",
                marginBottom: "1em",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "16.8px",
              }}
            >
              Beskrivning
            </p>

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
                {text}
              </p>
            </p>
            <hr
              className=""
              style={{
                color: "#fff",
                opacity: "0.2",
                marginTop: "60px",
                marginBottom: "10px",
              }}
            />
            <div
              style={{ marginBottom: "2em" }}
              className="trainingForms row py-4 "
            >
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

            <div
              style={{ marginBottom: "2em" }}
              class="d-flex flex-row justify-content-between"
            >
              <div>
                {" "}
                <TrainerCardAbbe />
              </div>
              <div>
                <TrainerCardJocke />
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                {" "}
                <TrainerCardMartin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsScreen;
