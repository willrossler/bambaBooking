import React from "react";
import TrainingInfo from "../../components/TrainingInfo";
import "../../screenStyles/traingingDetails.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";

const PersonalTrainingDetails = () => {
  return (
    <>
      {/* DESKTOP VIEW  */}
      <h1
        style={{ fontSize: "52px", paddingTop: "80px" }}
        className="title container desktopView"
      >
        PERSONAL TRAINING
        <hr className="pinkHr" />
      </h1>
      <div className="wrapper container desktopView">
        <div className="textContainer">
          <TrainingInfo />
          <h2 style={{ color: "#F5AAC9", paddingTop: "1rem" }}>Beskrivning</h2>

          <p className="paragraph">
            Vad vill du uppnå med din träning och vad vill du lära dig? Få ett
            skräddarsytt, personligt träningsprogram skapat helt utefter din
            nivå och förutsättningar. Utöver fysisk träning erbjuder vi även
            kostupplägg och mental coaching. Vi, Abbe, Martin och Joakim, har
            alla olika bakgrunder inom fysisk aktivitet och delar passionen för
            att lära ut och hjälpa andra göra framsteg. CTA (skicka till About
            Us): Möt våra tränare
          </p>
          <h5 style={{ color: "#fff" }}>
            Läs mer om våra tränare <Link to="/shop">här. </Link>{" "}
          </h5>
        </div>
        <div className="bannerCard">
          <img className="img-fluid" />
        </div>
      </div>
      <section className="container desktopView">
        <div style={{ paddingBottom: "100px" }} className="container ">
          <h1 style={{ fontSize: "64px" }} className="textHeader">
            COACHER
          </h1>
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
      {/* MOBILE VIEW  */}

      <div className="container mobileView">
        <h1 style={{ color: "#fff" }}>BOXING</h1>

        <div>BANNER GOES HERE</div>
        <div className="textContainer">
          <h1 className="title">BOXING</h1>
          <TrainingInfo />
          <h3 className="textHeader">Physical</h3>
          <p className="paragraph">
            {" "}
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            Spiritual Quisque sagittis purus sit amet volutpat. Mattis enim ut
            tellus eleme{" "}
          </p>
          <h3 className="textHeader">Mental</h3>
          <p className="paragraph">
            {" "}
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            Spiritual Quisque sagittis purus sit amet volutpat. Mattis enim ut
            tellus eleme{" "}
          </p>
          <h3 className="textHeader">Spiritual</h3>
          <p className="paragraph">
            {" "}
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            Spiritual Quisque sagittis purus sit amet volutpat. Mattis enim ut
            tellus eleme{" "}
          </p>
          <h3 className="textHeader">Spiritual</h3>
          <p className="paragraph">
            {" "}
            lmalesuada fames ac turpis egestas. Mental Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Diam vulputate ut
            pharetra sit amet aliquam id diam maecenas. Ullamcorper eget nulla
            facilisi etiam dignissim diam quis. Et netus et malesuada fames.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
            Spiritual Quisque sagittis purus sit amet volutpat. Mattis enim ut
            tellus eleme pharetra sit amet aliquam id diam maecenas. Ullamcorper
            eget nulla facilisi etiam dignissim diam quis. Et netus et malesuada
            fames. Pharetra massa massa ultricies mi quis hendrerit dolor magna
            eget. Spiritual Quisque sagittis purus sit amet volutpat. Mattis
            enim ut tellus eleme pharetra sit amet aliquam id diam maecenas.
            Ullamcorper eget nulla facilisi etiam dignissim diam quis. Et netus
            et malesuada fames. Pharetra massa massa ultricies mi quis hendrerit
            dolor magna eget. Spiritual Quisque sagittis purus sit amet
            volutpat. Mattis enim ut tellus eleme{" "}
          </p>
        </div>
        <h1 style={{ paddingTop: "20px" }} className="title">
          COACHES
        </h1>
        <TrainerCardAbbe />
        <TrainerCardJocke />
        <TrainerCardMartin />
        {/* todo RIGHT PADDING  */}
      </div>
    </>
  );
};

export default PersonalTrainingDetails;
