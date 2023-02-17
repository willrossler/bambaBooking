import React from "react";

const PersonalTrainingMobileDetails = () => {
  return (
    <>
      <div className="trainingForms " style={{ marginTop: "30px" }}>
        <h3>Träningsformer</h3>
        <div>
          <p>— Klasser (upp till 12 personer)</p>
          <p>— Mindre grupper (upp till 5 personer)</p>
          <p>— Personal training (one on one)</p>
          <p>— Testa på (tre pass för en komplett genomgång)</p>
          <p>— Introduktion (ett pass)</p>
          <br />
          <p style={{ fontWeight: "500" }}>
            All träningsupplägg är tillgängliga som presentkort.
          </p>
        </div>
      </div>
      <br />
      <p className="descriptionTitleMobile">Introduktion</p>
      <br />
      <p className="descriptionTextMobile">
        Personlig träning ger många fördelar för individer som söker förbättra
        sin fysiska form och allmänna välbefinnande. En av de största fördelarna
        med personlig träning är den individuella uppmärksamheten och de
        personliga träningsplanerna. <br />
        <br /> En personlig tränare tar hänsyn till en individs unika behov, mål
        och fysiska förmågor för att skapa en träningsplan som är anpassad
        specifikt för dem. Detta hjälper till att säkerställa att individen kan
        nå sina träningsmål på ett säkert och effektivt sätt. Personliga tränare
        ger också rådgivning och stöd, säkerställer att individer använder rätt
        form och teknik under sina träningar, vilket minskar risken för skador.
        <br />
        <br />
        Dessutom kan personlig träning ge ansvarsskyldighet och motivation,
        eftersom individer oftare håller fast vid sin träningsrutin när de har
        någon som håller dem ansvariga. Slutligen kan personlig träning också
        erbjuda en känsla av samhörighet, eftersom individer ofta bildar nära
        band med sin tränare och andra individer i sin träningsgrupp.
      </p>
      <br />
      {/* <p className="descriptionTitle">Kondition och uthållighet</p>
      <br />
      <p className="descriptionText">asd </p>

      <br />
      <p className="descriptionTitle">Koordination och balans</p>
      <br />
      <p className="descriptionText">asd.</p>
      <br />
      <p className="descriptionTitle">Styrka och muskler</p>
      <br />
      <p className="descriptionText">asd</p>
      <br />
      <p className="descriptionTitle">Mental träning</p>
      <br /> */}

      <p className="descriptionTitleMobile">Fördelar</p>
      <p className="descriptionTextMobile">kort om fördelarna</p>
      <br />
      <ul className="descriptionTextMobile" style={{ marginBottom: "30px" }}>
        <li>
          {" "}
          Skräddarsydd träning: en individanpassad träningsplan baserad på dina
          mål, förutsättningar och begränsningar.
        </li>
        <li>
          Ökad motivation genom stöd och uppmuntran, vilket hjälper dig att
          fortsätta träna och nå dina mål.
        </li>
        <li>
          Korrekt teknik: vi ser till att se till att du utför övningar korrekt
          och minskar risken för skador.
        </li>
        <li>
          Genom effektiviserad träning kan du få ut mer av din värdefulla tid
          genom att fokusera på de mest effektiva övningarna för att nå dina
          mål.
        </li>
      </ul>
    </>
  );
};

export default PersonalTrainingMobileDetails;
