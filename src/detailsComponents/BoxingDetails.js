import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const BoxingDetails = () => {
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
        Boxningskonsten har trollbundit människor sen långt tillbaka i tiden.
        Allt från de dansande rörelserna till kraften och spänningen. Som
        träningsform har den kanske fått mer erkännande på senare år vilket vi
        verkligen tycker den förtjänar – få träningsformer är så dynamiska och
        effektiva för både muskler och mental träning. Utmaningen är att i rytm
        utföra slagserier i en koordinerad sammansättning av balans, styrka och
        fotarbete. Detta kan till en början se enkelt ut men det är en konst som
        kan förfinas i många år.{" "}
      </p>
      <br />
      <br />
      <p className="descriptionTitle">Kondition och uthållighet</p>
      <br />
      <p className="descriptionText">
        Få sporter bygger kondition och uthållighet som boxning. Den
        högintensiva träningen som ofta sker i intervaller skapar grunden för
        god konditionsträning. Lägg till den muskulära träningen för både ben
        och armar så bygger det snabbt och effektivt uthållighet. Allt detta
        bidrar i sin tur till att minska risken för kardiovaskulära sjukdomar,
        högt blodtryck, diabetes och andra sjukdomstillstånd. Ett boxningspass
        är inte lätt, det är en intensiv upplevelse. Oavsett hur skicklig du är
        eller din konditionsnivå är, bör ett bra boxningspass vara tufft och
        utmanande. Trots ansträngningen uppskattar många intensiteten eftersom
        det är givande för konditionen och förbättrar din uthållighet. Om du går
        på boxningsträning regelbundet kommer du märka att det blir lättare att
        träna längre och mer intensivt. Boxningspass är ett exemplariskt tillägg
        till andra träningsformer och uthållighetsträning som distanslöpning och
        triathlon.
      </p>
      <br />
      <br />
      <p className="descriptionTitle">Koordination och balans</p>
      <br />
      <p className="descriptionText">
        De snabba kroppsrörelserna i boxning är bra för balans, medan slagen
        förbättrar hand-öga-koordinationen. Även utan corespecifika rörelser
        under styrketräningsdelen av träningen bygger boxning dessa muskler. De
        rörelser som behövs för att boxas bygger corestyrka, vilket i sin tur
        hjälper dig att få bättre balans. Äldre kunder och de med särskilda
        hälsobehov drar särskilt nytta av corestyrka och förbättrad balans.
      </p>
      <br />
      <br />
      <p className="descriptionTitle">Styrka och muskler</p>
      <br />
      <p className="descriptionText">
        Boxning är en fysisk träningsform och aktiverar i princip hela kroppen –
        allt från inre core muskulatur till alla stora och små muskelgrupper.
        Detta är anledningen till att träningsformen är så effektiv och
        uppskattad. En del av träningen är styrkeintervaller växlat med att slå
        på en boxningssäck och andra tekniska rörelser. Även de olika
        försvarsrörelserna (även om vi inte slår på varandra) ökar hela kroppens
        styrka. Detta beror på att du behöver hela din kropp för att boxas. Att
        slå ett slag korrekt involverar hela kroppen och de flesta
        muskelgrupper. Du behöver din core för att stabilisera dig själv, din
        underkropp och höfter för att svänga och ge kraft till slaget, och
        naturligtvis överkroppen för att ge slaget.
      </p>
      <br />
      <br />
      <p className="descriptionTitle">Mental träning</p>
      <br />

      <p className="descriptionText">
        Alla dessa fysiska fördelar är tillräckligt för att uppmuntra de flesta
        att prova boxning, men det finns mer. Träningens intensiva karaktär, den
        fysiska och mentala utmaningen och frigörandet av att slå något hårt
        bidrar alla till de mentala hälsofördelarna med boxningspass:
      </p>

      <ul className="descriptionText" style={{ marginBottom: "30px" }}>
        <li> Minska stress och andra negativa känslor</li>
        <li>Hitta känslomässig befrielse i en säker miljö</li>
        <li>Lyft upp ett dåligt humör efter en jobbig dag</li>
        <li>Sov bättre på natten efter ett intensivt träningspass</li>
        <li>Få självförtroende av att möta en utmaning och bli starkare</li>
      </ul>
      <br />
    </div>
  );
};

export default BoxingDetails;
