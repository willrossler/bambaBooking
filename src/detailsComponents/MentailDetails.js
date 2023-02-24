import React from "react";
import { Link } from "react-router-dom";
import NajPrez from "../components/NajPrez";
import "../globalStyles/textStyles.css";

const MentailDetails = () => {
  return (
    <div>
      <p className="descriptionTitle">Introduktion</p>
      <br />
      <p className="descriptionText">
        Kroppen och sinnet hör ihop och det är när vi känner kontakt med bägge
        som vi brukar känna oss som mest tillfreds. Fysisk träning utan mental
        träning är lite som att äta utan att riktigt någonsin bli mätt. Efter
        ett pass kan du känna dig nöjdare för stunden, men dina eventuella
        negativa tankespiraler återkommer dagen efter.
        <br />
        <br />
        På BAMBA erbjuder vi livscoachning, oberoende av vad det är du anser att
        du behöver stöd i så finner vi en väg för dig i det. Det spelar ingen
        roll om du är en atlet som vill få hjälp med mental träning eller om du
        behöver stöttning i ditt privatliv. Vi välkomnar allt och alla!
        <br />
        <br />
        Många träningsentusiaster och idrottsutövare har börjat inse att mental
        träning är lika viktig som fysisk träning. Mental träning handlar om att
        stärka sinnet genom olika tekniker såsom visualisering och medveten
        närvaro. Genom att integrera mental träning i din träningsrutin kan du
        förbättra din prestation, minska stress och öka ditt självförtroende. Vi
        påminner dig om att mental träning är ett kraftfullt verktyg som kan
        hjälpa dig att nå dina träningsmål och uppnå balans i livet, och vi
        uppmuntrar dig att prova på det idag!
        <br />
        <br />
        När man har en stark tro på sig själv och sina förmågor, kan man ta på
        sig utmaningar utan att tveka eller känna sig begränsad. Genom att öka
        sin motivation kan man också behålla fokus och uthållighet i svåra
        tider, vilket kan hjälpa till att uppnå långsiktiga mål. Dessutom kan en
        ökad koncentration leda till bättre beslutsfattande och mer effektivt
        arbete, vilket kan leda till bättre resultat och prestation.
      </p>
      <br />
      <br />
      <p className="descriptionTitle">Allmänt välbefinnande</p>
      <br />
      <p className="descriptionText">
        Genom mental träning kan man lära sig att hantera stress, oro och ångest
        på ett mer konstruktivt sätt. Det kan innebära att man lär sig att
        identifiera och utmana negativa tankemönster, att använda
        avslappningsövningar och andningstekniker för att minska stressnivåer,
        eller att utveckla en mer positiv syn på livet och sig själv.
        <br />
        <br />
        Dessa färdigheter kan inte bara förbättra ens mentala hälsa, utan också
        förbättra ens relationer med andra människor och öka ens motivation och
        engagemang i livet. Som en följd kan man uppleva ökat välbefinnande och
        livskvalitet på ett mer övergripande plan.
      </p>
      <br />
      <br />
      <p className="descriptionTitle">Styrka och prestation</p>
      <br />
      <p className="descriptionText">
        Genom att träna dessa mentala färdigheter kan man också förbättra sin
        förmåga att hantera och prestera under press. Till exempel kan man
        använda avslappningsövningar eller visualiseringstekniker för att öka
        sitt lugn och självkontroll i stressiga situationer, som kan bidra till
        en ökad prestation. Sammanfattningsvis kan utveckling av mentala
        färdigheter vara avgörande för att förbättra prestationen och uppnå mål
        inom olika områden i livet.
      </p>
      <br />
      <p className="descriptionText">Fördelar med mental coaching:</p>
      <ul className="descriptionText" style={{ marginBottom: "30px" }}>
        <br />
        <li>Ökad självmedvetenhet och självkontroll</li>
        <li>Förbättrad prestation och produktivitet</li>
        <li>Ökad kreativitet och problemlösningsförmåga</li>
        <li>Bättre ledarskapsförmåga och samarbete</li>
        <li>Förbättrat känslomässigt välbefinnande och hälsa</li>
      </ul>
      <br />
      <p className="descriptionTitle">
        <Link style={{ fontSize: "18px" }} id="hoverLink" to="/shop#najmedin">
          Läs mer om vår mentala coach här{" "}
        </Link>
      </p>
    </div>
  );
};

export default MentailDetails;
