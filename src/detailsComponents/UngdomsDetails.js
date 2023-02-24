import React from "react";
import "../globalStyles/textStyles.css";
const UngdomsDetails = () => {
  return (
    <div>
      <div style={{}} className="trainingForms">
        <p className="descriptionTitle" style={{ color: "#fff" }}>
          Träningsformer
        </p>
        <br />
        <div>
          <p>— Ungdomsträning (gruppträning upp till 12 personer)</p>
          <p>— Personlig träning (en till en)</p>
          <p>— Sluten mindre grupp (gruppträning upp till 5 personer)</p>
          <br />
          <p className="descriptionTitle" style={{ color: "#fff" }}>
            Alla träningsupplägg är tillgängliga som presentkort.
          </p>
        </div>
      </div>
      <br />

      <hr />
      <br />

      <br />
      <p className="descriptionTitle">Introduktion</p>
      <br />
      <p className="descriptionText">
        I vår ungdomsgrupp tränar barn i åldern 12-16 år och vi erbjuder en
        variation av fys, styrketräning och kampsport. Vår gruppträning för
        ungdomar tecknas terminsvis och man tränar 2ggr/vecka och är alltid
        garanterad en plats på passen.
        <br />
        <br />
        Syftet med vår ungdomsträning är att du ska få lära dig grunderna i
        styrketräning, korrekt teknik samt prova på olika träningsformer. Med
        rätt teknik i styrketräning minskar skaderisken och du får stora
        fördelar för din livslånga träning. Hos oss kommer du få träna i en
        öppen och prestigelös miljö där humor och kamratskap är en viktig del.
        <br />
        <br />
        Gruppträning ger också möjlighet till social interaktion och kan hjälpa
        till att minska stress och öka motivationen även dels under men även
        utanför träningen. Forskning visar att regelbunden fysisk aktivitet kan
        minska risken för många sjukdomar vilket i sin tur bidrar till
        förbättrad hälsa och välbefinnande.
        <br />
        <br />
        Gruppträning är också ett utmärkt sätt att främja samarbete och att
        träna tillsammans kan bygga starkare relationer och öka sin motivation
        att arbeta i team. Trygghet, delaktighet, glädje och allsidighet är
        viktiga aspekter av en positiv träningsupplevelse och framgångsrik
        utveckling i sin träning. Vi tänker att sammantagna hälsan är avgörande
        för att hålla sig frisk, hel och må bra i sitt tränande över tid.
        <br />
        <br />
        Är ni intresserade av att veta mer om företagsträning kontaktar ni oss
        på
        <span>
          <a className="linkHover" href="mailto:info@bambaostermalm.se">
            &nbsp;info@bambaostermalm.se&nbsp;
          </a>
        </span>
        så berättar vi mer.
      </p>
      <br />

      <p className="descriptionTitle" style={{ color: "#fff" }}>
        I lokalen finns det omklädningsrum, duschar och hygienartiklar.
      </p>
    </div>
  );
};

export default UngdomsDetails;
