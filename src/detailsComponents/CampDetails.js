import React from "react";

const CampDetails = () => {
  return (
    <div>
      <div style={{}} className="trainingForms">
        <h3>Träningsformer</h3>
        <br />
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
          <br />
        </div>
      </div>
      <p className="descriptionTitle">Introduktion</p>
      <br />
      <p className="descriptionText">
        på BAMBA är övertygade om att gruppträning är ett fantastiskt sätt att
        nå träningsmål, oavsett om du är nybörjare eller erfaren atlet.
        <br />
        <br />
        Vi tror att gruppträning är ett fantastiskt sätt att träna på grund av
        den positiva och motiverande miljön som skapas. Hos oss får ni möjlighet
        att träna tillsammans med andra som har liknande träningsmål, vilket gör
        att de kan stötta och inspirera varandra.
        <br /> Dessutom kan gruppträning vara roligt och socialt, vilket gör det
        lättare att hålla fast vid en träningsrutin. <br />
        <br />
        BAMBA är öppen för alla som vill träna i en positiv och välkomnande
        miljö. Vi hoppas att du kommer att uppleva fördelarna med gruppträning
        hos oss och ta del av en motiverande och utmanande träningsmiljö.
      </p>
      <br />

      <p className="descriptionText">
        Alla dessa fysiska fördelar är tillräckligt för att uppmuntra de flesta
        att prova boxning, men det finns mer. Träningens intensiva karaktär, den
        fysiska och mentala utmaningen och frigörandet av att slå något hårt
        bidrar alla till de mentala hälsofördelarna med boxningspass:
      </p>
      <ul className="descriptionText" style={{ marginBottom: "30px" }}>
        <li>
          Hjälper till att öka disciplinen och motivationen för att upprätthålla
          en regelbunden träningsrutin.
        </li>
        <li>
          Gruppträning är bevisat att minska stressnivåerna och förbättra
          humöret.
        </li>
        <li>Öppnar upp för social interaktion och bygger relationer.</li>
        <li>
          Få en känsla av gemenskap och tillhörighet du inte får någon
          annanstans.
        </li>
      </ul>
      <br />
    </div>
  );
};

export default CampDetails;
