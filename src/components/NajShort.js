import React from "react";
import najmedin from "../assets/images/Najmedin.jpg";

const NajShort = () => {
  return (
    <>
      <div>
        <img
          src={najmedin}
          className="najmedinPic"
          alt="Najmedin Razavi"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        />
        <h1 className="title">Najmedin Razavi</h1>
        <p className="descriptionTextMobile" style={{ fontWeight: "500" }}>
          Coach
        </p>
        <hr style={{}} className="aboutUsHR" />
        {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

        <p className="lineClamp descriptionTextMobile">
          Mitt namn är Najmedin Razavi, på BAMBA är jag coach &
          existensterapeut. Min bakgrund sträcker sig från etnobotaniker till
          chefsutvecklare och har därmed mångårig erfarenhet inom både privat
          och offentlig sektor.
          <br />
          <br />
          Jag hjälper dig, utifrån din nuvarande livssituation och dina egna
          värderingar, att skapa riktning och uppnå positiva mål i ditt
          personliga och professionella liv. En del av min uppgift i relation
          till dig är att ge dig stöd och verktyg för en förbättrad vardag.
        </p>
      </div>
    </>
  );
};

export default NajShort;
