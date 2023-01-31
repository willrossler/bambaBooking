import React, { useState } from "react";
import "../screenStyles/homeScreen.css";
import "../globalStyles/textStyles.css";

import homeBanner from "../assets/images/homePic.jpg";

const pStyles = {
  fontSize: "24px",
  lineHeight: "28px",
  color: "#fff",
};

const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* todo lägg en bild för mobile screen. */}
      <img
        src={homeBanner}
        className="img-fluid d-none d-lg-block d-md-inline"
        alt="Home Image"
        style={{ marginBottom: "100px" }}
      />

      <div className="container desktopView">
        <div className="row">
          <div className="col-6">
            <h1 className="text-start homeTitle">
              GYMMET FÖR <br />
              KROPP OCH SINNE
            </h1>
            <br />
            <h5 style={{ color: "#fff" }}> [BAMBA - Body and Mind by Abbe]</h5>
          </div>
          <div className="col-6">
            <p className="homeParagraph">
              På BAMBA stöttar vi dig i att se till helheten, för vi har sett
              det med egna ögon – den positiva effekten av kost, träning,
              gemenskap och mental coaching förändrar liv till det bättre.{" "}
              <br />
              <br />
              Fysisk aktivitet är inte bara ett utlopp för energi eller för att
              bli starkare, snabbare, mer agil, det är under rörelse som vi även
              kan finna insikter i vårt allmänna hälsotillstånd, mentalt som
              fysiskt. <br /> Vi stöttar dig i att nå dina mål med
              individanpassad funktionell träning, gruppträning och mental
              coachning. <br />
              <br />
              Kom som du är, gå härifrån nöjdare.{" "}
            </p>
            <br />
            <h3 className="textHeaderPink">Fysiskt</h3>
            <br />
            <p className="homeParagraph">
              {" "}
              Hur vill du använda din kropp? Vi tror på “medveten rörelse” - där
              varje pass fyller sitt syfte, om du så vill uppnå ett mål inför en
              tävling eller enbart vill ha en funktionell kropp i vardagen så
              guidar vi dig dit. Tyngdlyftning, kampsport, boxning, i små
              grupper (max 12 personer) eller med personlig tränare — vårt
              träningsutbud är varierat, anpassat och i ständig förändring då
              varje session ter sig olika.{" "}
            </p>
            <h3 className="textHeaderPink">Mentalt</h3>
            <br />

            <p className="homeParagraph">
              {" "}
              Varför tränar du? Ditt psykiska mående har stor inverkan på din
              fysiska kropp, därför separerar vi inte på de två utan väver dem
              samman genom att erbjuda och kombinera fysisk träning med mental
              coachning. Oavsett vilken utmaning du ställs inför finns vi här
              för dig med en-och-en coachning sessioner, anpassade utefter din
              livssituation.{" "}
            </p>
            <h3 className="textHeaderPink">Spirituellt</h3>
            <br />

            <p className="homeParagraph">
              {" "}
              Let’s face it, ensam är inte särskilt stark. Gemenskap spelar högt
              på BAMBA och vi välkomnar dig att bli en del av den! Energi finns
              i allt men allra främst i mötet mellan människor, något vi både
              eftersträvar att skapa och uppmuntrar. Möt nya vänner, dela
              erfarenheter och kunskap, träna livet ur er och skratta
              tillsammans. “Större än solo, större än vi, genom träning växer
              vi”{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
