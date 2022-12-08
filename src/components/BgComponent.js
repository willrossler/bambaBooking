import React from "react";
import "./bgComponent.css";
import bLogo from "../assets/logos/bLogo.svg";

const BgComponent = () => {
  return (
    <>
      <div
        className="bgDesign d-flex flex-column"
        style={{ backgroundColor: "#3C469C" }}
      >
        <div className="logowrapper flex-column">
          <div className="d-flex flex-row">
            <img
              className="img-fluid"
              src={bLogo}
              style={{
                opacity: "0.2",
                position: "absolute",
                height: "1037px",
                widht: "825px",
                zIndex: "0",
              }}
            />
            <div className="d-flex flex-row-reverse">
              <img
                src={bLogo}
                style={{
                  opacity: "0.2",
                  position: "absolute",
                  height: "1037px",
                  widht: "825px",
                  zIndex: "0",
                  transform: "rotate(180deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BgComponent;
