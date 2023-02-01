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
                  <hr style={{ marginBottom: "1em" }} className="pinkHr" />
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
            <hr className="pinkHr" style={{ marginBottom: "1em" }} />
            <div style={{ marginBottom: "2em" }} class="d-flex flex-row ">
              <div>
                <TrainerCardAbbe />
              </div>
              <div>
                <TrainerCardAbbe />
              </div>
              <div>
                <TrainerCardAbbe />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mobileView">
        <section className="d-flex flex-column container">
          <h1
            style={{
              color: "#fff",
              fontSize: "32px",
              marginTop: "40px",
              marginBottom: "0.5em",
            }}
          >
            LOCATION
          </h1>
          <hr className="pinkHrMobile" />
          <MapComponentMobile />
          <ContactInfo />
          {/* samma setup som på details */}

          <h1
            style={{
              color: "#fff",
              fontSize: "32px",
              marginTop: "2.5em",
              marginBottom: "0.5em",
            }}
          >
            PERSONAL TRAINERS
          </h1>
          <hr style={{ marginBottom: "2em" }} className="pinkHrMobile" />

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
        </section>
      </div>
    </>
  );
};

export default ContactScreen;
