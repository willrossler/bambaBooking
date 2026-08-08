import React from "react";

import "../screenStyles/contactScreen.css";

import ContactInfo from "../components/ContactInfo";
import TrainerCard from "../components/TrainerCard";
import MapComponent from "../components/MapComponent";
import { trainers } from "../data/trainers";

const ContactScreen = () => {
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
              <div style={{ paddingRight: "18%" }}>
                <h1 className="title">KONTAKT</h1>
                <hr className="pinkHr" />

                <div className="col text-start contactScreenInfo">
                  <p>Bamba</p>
                  <p style={{ opacity: "0.5" }}>Lützengatan&nbsp;10</p>

                  <p style={{ opacity: "0.5" }}>11520&nbsp;Stockholm</p>
                  <p style={{ opacity: "0.5" }}>Sweden</p>
                  <br />

                  <a href="mailto:info@bambaostermalm.se">
                    <p id="hoverPink">
                      {" "}
                      <span>info@bambaostermalm.se</span>
                    </p>
                  </a>
                  <a href="www.bambaostermalm.se">
                    <p id="hoverPink">www.bambaostermalm.se</p>
                  </a>
                  <br />

                  <a href="https://www.instagram.com/bambaostermalm/">
                    <p id="hoverPink">Instagram@bambaostermalm</p>
                  </a>
                </div>
              </div>
              <MapComponent />
            </div>
          </div>
        </section>
        <section className=" ">
          <div className="container ">
            <h1 className="title">PERSONLIGA TRÄNARE</h1>
            <hr className="pinkHr" />
            {/* todo avstånd bilder enligt figma */}
            <div
              style={{ marginBottom: "200px" }}
              className="d-flex flex-row justify-content-start"
            >
              <div style={{ marginRight: "5%" }}>
                <TrainerCard trainer={trainers.abbe} />
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
          <ContactInfo />
          <br />
          <MapComponent />
          {/* samma setup som på details */}
          <h1 style={{ marginTop: "60px" }} className="title">
            PERSONLIGA TRÄNARE
            <hr className="pinkHrMobile" />
          </h1>
          <div className="mobileTrainerGrid">
            <TrainerCard trainer={trainers.abbe} />
          </div>{" "}
        </section>
      </div>
    </>
  );
};

export default ContactScreen;
