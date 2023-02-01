import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../screenStyles/trainingScreen.css";
import trainingPicBanner from "../assets/images/trainingPicBanner.png";
import mobileTrainBanner from "../assets/images/mobileTraining.jpg";

const TrainingScreen = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const getStyles = (index) => {
    return {
      fontSize: index === hoveredIndex ? "100copx" : "100px",
      transition: "all 200ms ease-in-out",
      color: index === hoveredIndex ? "#F5AAC9" : "#fff",
      opacity: index === hoveredIndex ? 1 : index % 2 === 0 ? 0.5 : 1,
    };
  };

  const getParentStyles = (hoveredIndex) => {
    switch (hoveredIndex) {
      case 1:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      case 2:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      case 3:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      case 4:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      case 5:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      case 6:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      case 7:
        return {
          transition: "background-color 200ms",
          marginTop: "40px",
        };
      default:
        return {
          backgroundColor: "",
          marginTop: "40px",
        };
    }
  };

  return (
    <>
      <div style={{ vh: "100", dvh: "100" }}>
        <div className="d-none d-lg-inline d-md-inline image-container">
          <img className="img-fluid" src={trainingPicBanner} />
        </div>
        {/* WE FACILITATE MADE-TO- MEASURE TRAINING JUST FOR YOU */}
        <div className="bannerTextMobile mobileView ">
          <p className="container" style={{ color: "#F5AAC9" }}>
            {" "}
            <span style={{ color: "#fff" }}>
              {" "}
              VI SKAPAR SKRÄDDARSYDD TRÄNING
            </span>{" "}
            <br />
            JUST FÖR DIG
          </p>
          <img className="img-fluid" src={mobileTrainBanner} />
        </div>

        <div className="d-sm-inline d-lg-none d-md-none"></div>

        <div
          className="container py-3 trainingLinks"
          style={getParentStyles(hoveredIndex)}
        >
          <Link to="/personaltraining">
            <div
              id="personalTraining"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(1)}
            >
              PERSONAL TRAINING —
            </div>
          </Link>
          <Link to="/weightlifting">
            <div
              id="weightLifting"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(2)}
            >
              WEIGHT LIFTING —
            </div>
          </Link>
          <Link to="/martialarts">
            <div
              id="martialArts"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(3)}
            >
              MARTIAL ARTS —
            </div>
          </Link>
          <Link to="/boxing">
            <div
              id="boxing"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(4)}
            >
              BOXING —
            </div>
          </Link>
          <Link to="/mentaltraining">
            <div
              id="mentalTraining"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(5)}
            >
              MENTAL TRAINING —
            </div>
          </Link>
          <Link to="/bootcamp">
            <div
              id="bootCamp"
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(6)}
            >
              BOOT CAMP —
            </div>
          </Link>
          <Link to="/ptacademy">
            <div
              id="ptAcademy"
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
              style={getStyles(7)}
            >
              PT ACADEMY —
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrainingScreen;
