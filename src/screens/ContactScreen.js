import React from "react";

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
            <h1 style={{ paddingTop: "2em" }} className="title">
              PERSONAL TRAINERS
            </h1>
            <hr className="pinkHr" />
            {/* todo avstånd bilder enligt figma */}
            <div
              style={{ marginTop: "3em" }}
              className="d-flex flex-row justify-content-start"
            >
              <div>
                <TrainerCardAbbe />
              </div>
              <div>
                <TrainerCardJocke />
              </div>
              <div>
                <TrainerCardMartin />
              </div>
              <div>
                <TrainerCardMartin />
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
