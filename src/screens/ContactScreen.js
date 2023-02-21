import React from "react";

import "../screenStyles/contactScreen.css";

import ContactInfo from "../components/ContactInfo";
import TrainerCardAbbe from "../components/TrainerCardAbbe";
import TrainerCardMartin from "../components/TrainerCardMartin";
import TrainerCardJocke from "../components/TrainerCardJocke";
import MapComponent from "../components/MapComponent";
import MapComponentMobile from "../components/MapComponentMobile";

import { Row, Col } from "react-bootstrap";

import contactPic from "../assets/images/contactPic.jpg";

const ContactScreen = () => {
  const mapStyles = [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
        {
          saturation: "-3",
        },
        {
          lightness: "29",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#b7b7b7",
        },
        {
          visibility: "on",
        },
      ],
    },
  ];

  return (
    <>
      {/* DESKTOP VIEW  */}

      <div style={{ marginTop: "80px" }} className="desktopView container">
        <section>
          <div>
            <div
              style={{ marginBottom: "60px" }}
              className="d-flex justify-content-between pb-5"
            >
              <div style={{ paddingTop: "3em", paddingRight: "22%" }}>
                <h1 className="title">KONTAKT</h1>
                <hr className="pinkHr" />

                <div className="col text-start contactScreenInfo">
                  <p>Bamba</p>
                  <p style={{ opacity: "0.5" }}>Lützengatan&nbsp;10</p>

                  <p style={{ opacity: "0.5" }}>11520&nbsp;Stockholm</p>
                  <p style={{ opacity: "0.5" }}>Sweden</p>
                  <br />

                  <a href="mailto:info@bambaostermalm.se">
                    <p>
                      {" "}
                      <span>info@bambaostermalm.se</span>
                    </p>
                  </a>
                  <a href="www.bambaostermalm.se">
                    <p>www.bambaostermalm.se</p>
                  </a>
                  <br />

                  <a href="https://www.instagram.com/bambaostermalm/">
                    <p>Instagram@bambaostermalm</p>
                  </a>
                </div>
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
            <div
              style={{ marginBottom: "200px" }}
              className="d-flex flex-row justify-content-start"
            >
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
            KONTAKT
            <hr className="pinkHrMobile" />
          </h1>
          <img
            className="img-fluid"
            src={`https://maps.googleapis.com/maps/api/staticmap?center=Lützengatan+10,+11520+Stockholm&zoom=17&size=400x400&markers=color:red%7CLützengatan+10,+11520+Stockholm&style=${encodeURIComponent(
              JSON.stringify(mapStyles)
            )}&key=AIzaSyBo6BuIHPsmjbTKwZIWg0mPpohgu3JHqow`}
            alt="Google Maps Image"
          />
          <ContactInfo />
          {/* samma setup som på details */}
          <h1 style={{ marginTop: "60px" }} className="title">
            PERSONLIGA TRÄNARE
            <hr className="pinkHrMobile" />
          </h1>
          <div className="mobileTrainerGrid">
            <TrainerCardAbbe />
            <TrainerCardJocke />
            <TrainerCardMartin />
          </div>{" "}
        </section>
      </div>
    </>
  );
};

export default ContactScreen;
