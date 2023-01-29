import React from "react";
import BoxingBanner from "../../components/BoxingBanner";
import TrainerCardAbbe from "../../components/TrainerCardAbbe";
import TrainerCardJocke from "../../components/TrainerCardJocke";
import TrainerCardMartin from "../../components/TrainerCardMartin";
import TrainingInfo from "../../components/TrainingInfo";
import "../../globalStyles/textStyles.css";
import "../../screenStyles/traingingDetails.css";
import bootCampPic from "../../assets/images/bootCamp.jpg";

const BootCampDetails = () => {
  return (
    <>
      {/* DESKTOP VIEW  */}
      <div className="wrapper desktopView container">
        <div className="textContainer">
          <h1 className="title desktopView">
            CAMP
            <hr className="pinkHr" />
          </h1>

          <h2 className="textHeaderPink">Beskrivning</h2>
          <br />
          <p>
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
          <img src={bootCampPic} className="img-fluid" />
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
          className=""
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

export default BootCampDetails;
