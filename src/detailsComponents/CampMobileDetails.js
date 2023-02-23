import React from "react";

const CampMobileDetails = () => {
  return (
    <>
      <div
        className="trainingForms "
        style={{ marginTop: "30px", marginBottom: "10px" }}
      >
        <p
          style={{ fontSize: "16px", lineHeight: "19.2px", fontWeight: "500" }}
        >
          Träningsformer
        </p>
        <br />
        <div>
          <p>— Klasser (gruppträning upp till 12 personer)</p>
          <p>— Företagsklasser (gruppträning upp till 12 personer)</p>

          <br />
          <p
            style={{
              fontSize: "16px",
              lineHeight: "19.2px",
              fontWeight: "500",
            }}
          >
            Alla träningsupplägg är tillgängliga som presentkort.
          </p>
        </div>
      </div>
      <br />

      <hr style={{ margin: "0" }} />
      <br />
      <br />

      <p className="descriptionTitleMobile">Introduktion</p>
      <p className="descriptionTextMobile">
        Boot Camp är en träningsform som utövas i grupp och leds av en av våra
        instruktörer. Det är vår mest populära träningsform som erbjuder en
        variation av fys, styrketräning och kampsport. Boot Camp är en bra
        lösning för dig som vill komma igång med din träning samtidigt som du
        får en rolig och utmanande upplevelse.
        <br />
        <br />
        Det här är en gruppträning med mål att åstadkomma stor förändring under
        en intensiv period oavsett om man vill få hjälp att komma igång med
        träning, vill komma i bättre form eller få in rutinen att träna varje
        vecka Vi tränar i en sluten grupp och det finns endast plats för 12
        personer och en av många fördelar är att ni kommer bli ett sammansvetsat
        team som kämpar och hjälper varandra genom passen.
        <br />
        <br />
        Vi erbjuder 8 eller 10 veckors camp och vi tränar 4 pass per vecka. Vi
        tränar måndagar, tisdagar, torsdagar och fredagar 06.00-06.50. Du är
        garanterad plats på alla pass och behöver inte boka dessa i förskott.
      </p>
    </>
  );
};

export default CampMobileDetails;
