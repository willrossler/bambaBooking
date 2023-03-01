import React from "react";

const PersonalTrainingMobileDetails = () => {
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
          <p>— Personlig träning (en till en)</p>
          <p>— Sluten mindre grupp (upp till 5 personer)</p>

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
        Det fantastiska med personlig träning är att en av våra coacher viger
        sin fulla kapacitet och den kunskap de besitter inom sina områden helt
        åt dig och de mål du vill nå. Kanske vill du lära dig hur du lyfter
        vikter rätt, bli bättre på slagteknik eller få bättre kondition - vi
        hjälper dig dit. Det är både motiverande, utmanande och givande att
        träna med en coach för du kommer inte undan dig själv, utan kommer
        alltid peppas till utveckling.
        <br />
        <br />
        Personlig träning ger många fördelar för individer som söker förbättra
        sin fysiska form och allmänna välbefinnande. Vi tar hänsyn till ditt
        unika behov, mål och fysiska förmågor för att skapa en träningsplan som
        är anpassad specifikt för dig. Detta hjälper till att säkerställa att du
        når dina träningsmål på ett säkert och effektivt sätt.
        <br />
        <br />
        Vi ger också rådgivning och stöd, säkerställer att du använder rätt form
        och teknik under dina träningar, vilket minskar risken för skador.
        Dessutom kan personlig träning ge ansvarsskyldighet och motivation,
        eftersom man oftare håller fast vid sin träningsrutin när man har någon
        som håller en ansvarig.
        <br />
        <br />
        Du kan välja mellan att ha en stående tid varje vecka eller köpa ett
        klippkort i appen Wondr där du ser lediga tider och boka upp vecka för
        vecka vad som passar just dig.
      </p>
      <br />
      <p
        style={{
          fontSize: "16px",
          lineHeight: "19.2px",
          fontWeight: "500",
          color: "#fff",
        }}
      >
        I lokalen finns det omklädningsrum, duschar och hygienartiklar.
      </p>
    </>
  );
};

export default PersonalTrainingMobileDetails;
