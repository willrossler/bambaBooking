import React from "react";
import HomeBanner from "../components/HomeBanner";
import ContactInfo from "../components/ContactInfo";
import TrainerCardAbbe from "../components/TrainerCardAbbe";
import TrainerCardMartin from "../components/TrainerCardMartin";
import TrainerCardJocke from "../components/TrainerCardJocke";
import MapComponent from "../components/MapComponent";
import MapComponentMobile from "../components/MapComponentMobile";
import kartaBild from "../assets/images/kartaPrint.png";

const ContactScreen = () => {
  return (
    <>
      {/* DESKTOP VIEW  */}

      <div className="desktopView">
        <HomeBanner />

        <section
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
          className="container"
        >
          <div>
            <div
              style={{ height: "65vh" }}
              className="d-flex justify-content-between pb-5 "
            >
              <div>
                <h1 className="title">
                  LOCATION
                  <hr className="pinkHr" />
                </h1>

                <ContactInfo />
              </div>
              <div className="kartaBild"></div>
              {/* <MapComponent /> */}
            </div>
          </div>
        </section>
        <section className=" ">
          <div style={{ paddingBottom: "100px" }} className="container ">
            <h1 className="title">PERSONAL TRAINERS</h1>
            <hr className="pinkHr" />
            <div className="d-flex justify-content-between ">
              <div>
                <TrainerCardAbbe />
              </div>
              <div style={{ margin: "0px 40px" }}>
                <TrainerCardJocke />
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
          <h1 style={{ color: "#fff", fontSize: "32px", marginTop: "40px" }}>
            LOCATION
          </h1>
          <hr className="pinkHrMobile" />
          <MapComponentMobile />
          <ContactInfo />
          <h1 style={{ color: "#fff", fontSize: "35px" }}>PERSONAL TRAINERS</h1>
          <hr className="pinkHrMobile" />

          <div className="d-flex flex-column mb-3 ">
            <TrainerCardAbbe />
            <TrainerCardJocke />
            <TrainerCardMartin />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactScreen;
