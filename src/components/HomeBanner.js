import React from "react";
import "../componentStyles/homeBanner.css";
import homePic from "../assets/images/homePic.jpg";

const HomeBanner = () => {
  return (
    <div
      className="homeBanner"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <div className="container " style={{ lineHeight: "1rem" }}>
        <h1 style={{ fontSize: "72px", color: "#fff" }}>DIN LIVSKVALITÉ —</h1>
        <br />
        <h1 style={{ fontSize: "72px", color: "#F5AAC9" }}>VÅR DRIVKRAFT</h1>
      </div> */}
    </div>
  );
};

export default HomeBanner;
