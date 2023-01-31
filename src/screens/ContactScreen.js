import React from "react";
import HomeBanner from "../components/HomeBanner";
import ContactInfo from "../components/ContactInfo";
import TrainerCardAbbe from "../components/TrainerCardAbbe";
import TrainerCardMartin from "../components/TrainerCardMartin";
import TrainerCardJocke from "../components/TrainerCardJocke";
import MapComponent from "../components/MapComponent";
import MapComponentMobile from "../components/MapComponentMobile";

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
              <div style={{ paddingTop: "3em", paddingRight: "12em" }}>
                <h1 className="title">
                  LOCATION
                  <hr className="pinkHr" />
                </h1>

                <ContactInfo />
              </div>
              <MapComponent />
            </div>
          </div>
        </section>
        <section className=" ">
          <div className="container ">
            <h1 style={{ paddingTop: "3em" }} className="title">
              PERSONAL TRAINERS
            </h1>
            <hr className="pinkHr" />
            <div
              style={{ paddingTop: "3em" }}
              className="d-flex justify-content-between"
            >
              <TrainerCardAbbe />
              <TrainerCardJocke />
              <TrainerCardMartin />
              <TrainerCardMartin />
            </div>
          </div>
        </section>
      </div>

      <div className="mobileView">
        <section className="d-flex flex-column container">
          <h1 style={{ color: "#fff", fontSize: "32px", marginTop: "40px" }}>
            LOCATION
          </h1>
          <hr className="pinkHrMobile" />
          <MapComponentMobile />
          <ContactInfo />
          <h1 style={{ color: "#fff", fontSize: "35px" }}>PERSONAL TRAINERS</h1>
          <hr className="pinkHrMobile" />

          <div className="d-flex flex-row mb-3 ">
            <TrainerCardAbbe />
            <TrainerCardJocke />
          </div>
          <div className="d-flex flex-row mb-3 ">
            <TrainerCardMartin />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactScreen;
