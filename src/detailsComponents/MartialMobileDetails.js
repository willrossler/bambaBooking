import React from "react";

const MartialMobileDetails = () => {
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
          <p>— Klasser (upp till 12 personer)</p>
          <p>— Företagsklasser (upp till 12 personer)</p>
          <p>— Personlig träning (en till en)</p>
          <p>— Klippkort 10pass (upp till 12 personer)</p>
          <p>— Ungdomsträning (upp till 12 personer)</p>
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
      <p className="descriptionTextMobile" style={{}}>
        På BAMBA utövar vi kampsportsfys inspirerat av boxning och thaiboxning
        (Muay Thai), även kallat “the Art of 8 Limbs”. Sporten kallas så då du
        använder dig utav hela kroppen; knän, armbågar, ben, händer etc. Du
        kommer snabbt märka och känna hur hela kroppen och även hjärnan har fått
        jobba. Förutom den fysiska positiva effekten av kampsport är det ett
        ypperligt sätt att forma värderingar och beteenden som fokus, tolerans,
        rättvisa, ödmjukhet och disciplin.
        <br />
        <br />
        Kampsport är en tillåtande sport som passar alla, så det spelar ingen
        roll vad du har för träningsbakgrund eller hur din nuvarande kondition
        är, varje pass sker på dina villkor och kapacitet.
      </p>
      <br />
      <br />

      <p className="descriptionTitleMobile">Kondition och uthållighet</p>
      <p className="descriptionTextMobile" style={{}}>
        Slagvariationer i intervaller är intensivt och otroligt givande för
        kondition, uthållighet och hjärta. Det gäller att du utmanar dina
        mjölksyrenivåer för att orka hålla hela intervallen ut. Allteftersom
        kommer du märka skillnad i hur länge du orkar då du får starkare hjärta
        och därmed bättre syreupptagningsförmåga. Det spelar ingen roll hur
        otränad eller tränad du är, du anpassar passet utefter dig och din nivå.
        <br />
        <br />
        Kampsportsträning är en utmärkt träningsform för att förbättra
        konditionen och uthålligheten. Träningen utförs i högintensiva
        intervaller tillsammans med teknik. Denna kombination av styrka och
        uthållighet förbättrar också den kardiovaskulära hälsan och minskar
        risken för sjukdomar såsom högt blodtryck och diabetes.
        Kampsportsträning är utmanande och kräver en hög grad av fokus och
        mental uthållighet.
      </p>
      <br />
      <br />

      <p className="descriptionTitleMobile">Koordination och balans</p>
      <p className="descriptionTextMobile" style={{}}>
        Kampsporten är känd för att utveckla koordination och balans. Genom att
        träna tekniker och rörelsemönster som kräver precision och kontroll,
        utvecklar man sin kroppskännedom och förmåga att koordinera kroppen. Att
        balansera på en fot eller utföra en snabb spark kräver en hög grad av
        balans och stabilitet och med hjälp av våra tränare ser vi till att du
        snabbt når dit med rätt teknik och övningar.
        <br />
        <br />
        Med regelbunden träning kan kampsporten därför ge förbättrad
        koordination och balans som kan vara till nytta även i andra idrotter
        och vardagliga aktiviteter.
      </p>
      <br />
      <br />
      <p className="descriptionTitleMobile">Styra och muskler</p>
      <p className="descriptionTextMobile" style={{}}>
        Tack vare att hela kroppen används finns det ingen del av dig som inte
        kommer bli starkare. Kampsporten är känd för att utveckla styrka och
        muskler på ett unikt sätt. För att utföra tekniker och rörelser som
        kräver både kraft och kontroll tränar du hela kroppen och bygger upp
        muskler på ett balanserat sätt. Genom att använda kroppen som motstånd
        och genom att utföra tekniker med precision och kontroll, aktiveras
        flera muskelgrupper samtidigt.
        <br />
        <br />
        De olika teknikerna i kampsporter involverar allt från benen, till
        kärnan, till överkroppen, och resulterar i en övergripande ökning av
        muskelmassa, uthållighet och styrka.
      </p>
      <br />
      <br />
      <p className="descriptionTitleMobile">Mental träning</p>
      <p className="descriptionTextMobile" style={{}}>
        Många efterliknar kampsport vid en form av meditation då det kräver din
        fulla närvaro. Du har helt enkelt inte tid att ha tankarna någon
        annanstans när du vill undvika, eller slå, ett slag. Ta tillfället i akt
        att släppa världen utanför för att istället låta dig absorberas totalt
        av ditt eget andetag, motståndarens nästa drag och kämparandan i rummet.
      </p>
      <br />

      <ul className="descriptionTextMobile" style={{ marginBottom: "30px" }}>
        <li>Uppmuntrar total närvaro</li>
        <li>Minskad stress</li>
        <li>Glädjehormoner</li>
        <li>Bättre sömn tack vare fysisk utmattning</li>
      </ul>
      <br />
      <p
        style={{
          fontSize: "16px",
          lineHeight: "19.2px",
          fontWeight: "500",
        }}
      >
        I lokalen finns det omklädningsrum, duschar och hygienartiklar.
      </p>
      {/* todo ta bort marting */}
    </>
  );
};

export default MartialMobileDetails;
