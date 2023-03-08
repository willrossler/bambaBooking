import React from "react";
import { Link, NavLink } from "react-router-dom";

const MentalMobile = () => {
  return (
    <>
      <br />

      <br />
      <p className="descriptionTitleMobile">Introduktion</p>

      <p className="descriptionTextMobile">
        Genom att träna sin mentala förmåga, inklusive att utveckla
        självförtroende, motivation och koncentration, kan man förbättra sin
        prestation på olika områden i livet, som arbete, utbildning, idrott
        eller hobby.
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

      <p className="descriptionTitleMobile">Allmänt välbefinnande</p>

      <p className="descriptionTextMobile">
        Genom mental träning kan man lära sig att hantera stress, oro och ångest
        på ett mer konstruktivt sätt. Det kan innebära att man lär sig att
        identifiera och utmana negativa tankemönster, att använda
        avslappningsövningar och andningstekniker för att minska stressnivåer,
        eller att utveckla en mer positiv syn på livet och sig själv. Dessa
        färdigheter kan inte bara förbättra ens mentala hälsa, utan också
        förbättra ens relationer med andra människor och öka ens motivation och
        engagemang i livet. Som en följd kan man uppleva ökat välbefinnande och
        livskvalitet på ett mer övergripande plan.
      </p>
      <br />
      <br />
      <p className="descriptionTitleMobile">Styrka och prestation</p>
      <p className="descriptionTextMobile">
        Genom att träna dessa mentala färdigheter kan man också förbättra sin
        förmåga att hantera stress och presterar under press. Till exempel kan
        man använda avslappningsövningar eller visualiseringstekniker för att
        öka sitt lugn och självkontroll i stressiga situationer, som kan bidra
        till en ökad prestation. Sammanfattningsvis kan utveckling av mentala
        färdigheter vara avgörande för att förbättra prestationen och uppnå mål
        inom olika områden i livet.
      </p>
      <br />
      <br />

      <p className="descriptionTitleMobile">Fördelar med mental coaching:</p>

      <ul className="descriptionTextMobile" style={{ marginBottom: "30px" }}>
        <li>Ökad självmedvetenhet och självkontroll</li>
        <li>Förbättrad prestation och produktivitet</li>
        <li>Ökad kreativitet och problemlösningsförmåga</li>
        <li>Bättre ledarskapsförmåga och samarbete</li>
        <li>Förbättrat känslomässigt välbefinnande och hälsa</li>
      </ul>

      <p className="descriptionTitleMobile">
        <Link
          className="descriptionTextMobile"
          id="hoverLink"
          style={{ fontSize: "16px", color: "#3C469C", margin: "0" }}
          to="/shop#najmedin"
        >
          Läs mer om vår mentala coach här.{" "}
        </Link>
      </p>
    </>
  );
};

export default MentalMobile;
