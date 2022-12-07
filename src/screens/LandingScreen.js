import React from "react";
import "./landingScreen.css";
import BgComponent from "../components/BgComponent";
import LandingContent from "../components/LandingContent";

const LandingScreen = () => {
  return (
    <BgComponent>
      <LandingContent />
    </BgComponent>
  );
};

export default LandingScreen;
