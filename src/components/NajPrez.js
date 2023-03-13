import React, { useRef, useState, useEffect } from "react";
import najmedin from "../assets/images/Najmedin.jpg";
import { useLocation } from "react-router";

const NajPrez = () => {
  const location = useLocation();

  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 240;

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const toggleShowFullDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  const descriptionText = `Mitt namn är Najmedin Razavi, på BAMBA är jag coach & existensterapeut. Min bakgrund sträcker sig från etnobotaniker till chefsutvecklare och har därmed mångårig erfarenhet inom både privat och offentlig sektor.
  Jag hjälper dig, utifrån din nuvarande livssituation och dina egna värderingar, att skapa riktning och uppnå positiva mål i ditt personliga och professionella liv. En del av min uppgift i relation till dig är att ge dig stöd och verktyg för en förbättrad vardag.
  Jag stöttar dig i att stilla bruset utifrån, våga lyssna inåt och definiera vad just du mår bra av och vill ha ut av ditt liv. Med en glasklar vision formas din personliga kompass som hjälper dig att klargöra syftet med nästa steg i ditt liv.`;

  const truncatedDescription =
    descriptionText.substring(0, maxDescriptionLength) + "...";

  useEffect(() => {
    console.log(location);
    if (location.hash === "#najmed") {
      executeScroll();
    }
  }, [location]);

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
        <p
          ref={myRef}
          className="descriptionTextMobile"
          style={{ fontWeight: "500" }}
        >
          Mental Coach
        </p>
        <hr style={{}} className="aboutUsHR" />
        {/* <hr style={{ color: "#fff", opacity: "0.2" }} /> */}

        <p className="descriptionTextMobile">
          {showFullDescription ? descriptionText : truncatedDescription}
        </p>

        {descriptionText.length > maxDescriptionLength && (
          <p className="visaMer" onClick={toggleShowFullDescription}>
            {showFullDescription ? "Visa mindre" : "Läs mer"}
          </p>
        )}
      </div>
    </>
  );
};

export default NajPrez;
