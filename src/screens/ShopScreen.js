import React from "react";
import { Container } from "react-bootstrap";

import "../screenStyles/aboutUsScreen.css";
import TrainerBio from "../components/TrainerBio";
import { trainers } from "../data/trainers";

// Previously this screen rendered a full duplicate set of components for
// desktop (AbbeDesktop, MartinDesktop, NajDesktop...) and another full
// duplicate set for mobile (AbbePrez, MartinPrez, NajPrez...), plus four
// more imported-but-never-rendered "Short" components. TrainerBio is
// responsive on its own, so one list covers every screen size.
const ShopScreen = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <TrainerBio trainer={trainers.abbe} />
      <div id="najmedin" />
      <TrainerBio trainer={trainers.naj} />
    </Container>
  );
};

export default ShopScreen;
