import React from "react";
import ProductCard from "../components/ProductCard";
import { Row, Col } from "react-bootstrap";
import abbe from "../assets/images/abbePic.png";
import jocke from "../assets/images/jockePic.png";
import martin from "../assets/images/martinPic.png";
import PresentationAbbe from "../components/PresentationAbbe";

const ShopScreen = () => {
  return (
    <>
      <div className="container ">
        <h1>Vi på Bamba </h1>
        <hr className="pinkHrMobile" />
        <PresentationAbbe />
      </div>
    </>
  );
};

export default ShopScreen;
