import React from "react";
import BoxingBanner from "../../components/BoxingBanner";
import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";
import TrainingInfo from "../../components/TrainingInfo";
import "../../screenStyles/traingingDetails.css";
import bootCampPic from "../../assets/images/bootCamp.jpg";

const BootCampDetails = () => {
  return (
    <>
      {/* DESKTOP VIEW  */}

      <div className="wrapper desktopView container">
        <div className="textContainer">
          <h1 style={{ fontSize: "64px" }} className="title">
            CAMP
          </h1>
          <hr className="pinkHr" />
          <div style={{ marginBottom: "60px" }} className="row py-4">
            <h3 style={{ color: "#fff" }}>FORMS OF TRAINING</h3>
            <div className="paragraph">
              <p>— Klasser (upp till 12 personer)</p>
              <p>— Mindre grupper (upp till 5 personer)</p>
              <p>— Personal training (one on one)</p>
              <p>— Testa på (tre pass för en komplett genomgång)</p>
              <p>— Introduktion (ett pass)</p>
              <h5>All träningsupplägg är tillgängliga som presentkort.</h5>
            </div>
          </div>
          <h2 className="textHeaderPink">Beskrivning</h2>
          <p style={{ fontSize: "18px", color: "#fff" }}>
            Mellan 06.00-06.50, måndag, tisdag, torsdag och fredag under 8
            veckor, möts vi för intensiv morgonträning. Passen är enbart för er
            i campen och behöver inte bokas utan du får tillgång till alla pass
            när du köper Camp 8 veckor.
            <br />
            <br /> Camp utformas av någon av oss tränare och blandar olika
            träningsformer som styrka, kondition och kampsport. <br />
            <br /> Beroende på vem som håller i camp kan passen komma att se
            annorlunda ut. Alla vi har olika vinklar och sätt att träna på,
            detta bidrar till en varierad träningsform.
            <br />
          </p>
        </div>

        <div className="bannerCard">
          <img src={bootCampPic} className="img-fluid" />
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

      <h1 className="container" style={{ color: "#fff", paddingTop: "20px" }}>
        CAMP
        <hr className="pinkHrMobile" />
      </h1>

      <img src={bootCampPic} className="img-fluid" />
      <div className="container mobileView">
        <div className="textContainer">
          <div style={{ color: "#fff" }} className="row py-4">
            <h3 style={{ color: "#fff" }}>FORMS OF TRAINING</h3>
            <div>
              <p>— Klasser (upp till 12 personer)</p>
              <p>— Mindre grupper (upp till 5 personer)</p>
              <p>— Personal training (one on one)</p>
              <p>— Testa på (tre pass för en komplett genomgång)</p>
              <p>— Introduktion (ett pass)</p>
              <h5>All träningsupplägg är tillgängliga som presentkort.</h5>
            </div>
          </div>
          <h3 style={{ color: "#F5AAC9" }}>Beskrivning</h3>

          <p className="paragraph">
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
              er i campen och behöver inte bokas utan du får tillgång till alla
              pass när du köper Camp 8 veckor.
              <br />
              <br /> Camp utformas av någon av oss tränare och blandar olika
              träningsformer som styrka, kondition och kampsport. <br />
              <br /> Beroende på vem som håller i camp kan passen komma att se
              annorlunda ut. Alla vi har olika vinklar och sätt att träna på,
              detta bidrar till en varierad träningsform.
              <br />
            </p>
          </p>
          <h1 style={{ color: "#fff", fontSize: "35px" }}>COACHER</h1>
          <hr className="pinkHrMobile" />

          <div className="d-flex flex-column mb-3 ">
            <TrainerCardAbbe />
            <TrainerCardJocke />
            <TrainerCardMartin />
          </div>
        </div>
        {/* todo RIGHT PADDING  */}
      </div>
    </>
  );
};

export default BootCampDetails;
