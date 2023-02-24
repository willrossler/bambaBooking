import React from "react";

const ForetagsMobileDetails = () => {
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
          <p>— Företagsklasser (upp till 12 personer)</p>

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

      <p className="descriptionTextMobile" style={{}}>
        Vill du öka produktiviteten och minska sjukfrånvaron bland din personal?
        Vi erbjuder skräddarsydda träningsupplägg på återkommande tider varje
        vecka enbart för er.
        <br />
        <br />
        Genom att erbjuda gruppträning som en förmån för dina anställda, kan du
        bidra till att förbättra deras hälsa och välbefinnande, vilket i sin tur
        leder till färre sjukdagar och högre produktivitet.
        <br />
        <br />
        Gruppträning är också ett utmärkt sätt att främja samarbete och stärka
        banden mellan dina anställda. Att träna tillsammans utvecklar en känsla
        av gemenskap och samhörighet, som bidrar till ökat samarbete och laganda
        i andra situationer även utanför träningslokalen. Det ger också
        möjlighet till social interaktion och hjälper till att minska stress och
        öka motivationen.
        <br />
        <br />
        Gruppträning är därför vara ett utmärkt val för företag eller
        organisationer som vill investera i friskare personal, teambuilding och
        förbättra samarbetet och produktiviteten inom sin personal.
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

      <p
        style={{
          color: "#fff",
          fontSize: "16px",
          lineHeight: "19.2px",
          fontWeight: "500",
        }}
      >
        I lokalen finns det omklädningsrum, duschar och hygienartiklar.
      </p>
    </>
  );
};

export default ForetagsMobileDetails;
