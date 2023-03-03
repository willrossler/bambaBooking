import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import blackCard from "../assets/images/Card_Black_Square.jpg";
import whiteCard from "../assets/images/Card_White_Square.jpg";
import ptCard from "../assets/images/Card_PT_Square.jpg";
import giftCard from "../assets/images/Card_Klipp_Square.jpg";
import PersCard from "../assets/images/Card_Pers_Square.jpg";

import BlackCardShort from "../components/BlackCardShort";
import WhiteCardShort from "../components/WhiteCardShort";
import WhiteCard from "../components/WhiteCard";
import BlackCard from "../components/BlackCard";
import PassCard from "../components/PassCard";
import GiftCard from "../components/GiftCard";
import PtCard from "../components/PtCard";

const MedlemskapScreen = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }} className="container desktopView">
        <Row style={{ marginBottom: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">MEDLEMSKAP</h1>
              <hr
                style={{ marginTop: "20px", marginBottom: "60px" }}
                className="pinkHr"
              />
              <p className="descriptionText">
                Vi på BAMBA erbjuder olika nivåer av medlemskap för att möta
                allas behov. Vi har därför tagit fram två nivåer av medlemskap
                ”BAMBA vit” och ”BAMBA svart”. Vi tänker att träning är något
                man ska hinna med i vardagen även om man under perioder har
                mycket utanför träningen som tar tid. Hälsofördelarna med
                träning är för många för att prioritera bort träning även om
                annat i vardagen kräver vår tid. <br />
                <br /> Hos oss har du därför möjlighet att ha allt klart när du
                kommer. Tjänster som tvättservice, uppsättning av BAMBAS
                träningskläder och eget skåp är delar av det som vi erbjuder.
                Hos oss finns omklädningsrum, duschar och hygienartiklar. <br />
                <br />
                Vi tänker att sammantagna hälsan är avgörande för att hålla sig
                frisk, hel och må bra i sitt liv över tid. Vi vill att du ska få
                en fantastisk träningsupplevelse och att du ska längta efter att
                komma tillbaka till oss för nästa pass.
                <br />
                <br /> Du ser till att ta dig till oss och så ser vi till att du
                har allt du behöver för att träna hos oss helt enkelt. <br />
                <br />
                Kontakta oss på
                <span>
                  <a
                    className="underline linkHover"
                    href="mailto:info@bambaostermalm.se"
                  >
                    &nbsp;info@bambaostermalm.se&nbsp;
                  </a>
                </span>
                hjälper vi dig komma igång!
              </p>
            </div>
          </Col>
        </Row>

        <Row style={{ marginBottom: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">BAMBA VIT</h1>
              <hr
                style={{ marginTop: "20px", marginBottom: "60px" }}
                className="pinkHr"
              />
              <p className="descriptionText">
                <b>”BAMBA vit”</b> är för dig som hinner packa träningsväskan
                och komma ner till oss på morgonen, lunchen eller på kvällen för
                att få dagens träning avklarad. Medlemskapet ger dig tillgång
                till alla våra gruppass och du har möjlighet att boka upp dig på
                2 pass/dag.
                <br />
                <br />
                De olika passen inkluderar fys, styrketräning och kampsport.
                Syftet med våra olika pass är att du ska få lära dig grunderna i
                styrketräning, korrekt teknik samt prova på olika
                träningsformer. Genom att lära dig rätt teknik minskar
                skaderisken och du kommer få stora fördelar för din livslånga
                träning.
                <br />
                <br />
                Du kan boka upp till 2 pass per dag och passen går att boka upp
                till 7 dagar innan passtidens start. Avbokning av pass sker
                senast 2 timmar innan passtart.
                <br />
                <br />
              </p>
              <br />
              <p className="descriptionTitle" style={{ color: "#fff" }}>
                I lokalen finns det omklädningsrum, duschar och hygienartiklar.
              </p>
              <br />

              <p className="descriptionTitle" style={{ color: "#fff" }}>
                Medlemskapet har ingen bindningstid.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img src={whiteCard} className="img-fluid" alt="Abbe Joof" />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">BAMBA SVART</h1>
              <hr
                style={{ marginTop: "20px", marginBottom: "60px" }}
                className="pinkHr"
              />
              <p className="descriptionText">
                <b>”BAMBA svart”</b> är medlemskapet för dig som inte vill
                behöva tänka på något och där vi tar ett helhetsansvar för din
                hälsa både fysiskt och psykiskt. I medlemskapet ingår en
                uppsättning av BAMBAS träningskläder, tvätt av kläderna mellan
                passen, handduk, hygienartiklar och ett eget skåp så du snabbt
                kommer åt dina nytvättade träningskläder inför varje
                träningspass.
                <br />
                <br />
                Givetvis har du tillgång till alla våra gruppass och utöver det
                även en sluten sparringgrupp som leds av Abbe Joof. I den slutna
                gruppen är en av många fördelar är att ni kommer bli ett
                sammansvetsat team som kämpar och hjälper varandra genom passen.
                Passet kräver din fulla närvaro och tillit till din tränare och
                övriga i gruppen.
                <br />
                <br />
                Vi vet att kroppen och sinnet hör ihop och det är när vi känner
                kontakt med bägge som vi brukar känna oss som mest tillfreds.
                Därför ingår också 1 timmes samtal med vår livscoach Najmedin.
                Najmedin hjälper dig, utifrån din nuvarande livssituation och
                dina egna värderingar, att skapa riktning och uppnå positiva mål
                i ditt personliga och professionella liv.
                <br />
                <br />
                För att säkerställa att du närmar dig de mål du vill nå med din
                träning ingår 1 timme PT med Abbe Joof per månad. Detta som en
                uppföljning och ett komplement till gruppklasserna.
                <br />
                <br />
                Ditt skåp är personligt och du kan lägga in det du vill förvara
                mellan och under passen. Efter avklarat pass kan du välja valfri
                dryck ur kylskåpet för att fylla på innan du ska iväg till nästa
                aktivitet.
                <br />
                <br />
                De olika passen inkluderar fys, styrketräning och kampsport.
                Syftet med våra olika pass är att du ska få lära dig grunderna i
                styrketräning, korrekt teknik samt prova på olika
                träningsformer. Genom att lära dig rätt teknik minskar
                skaderisken och du kommer få stora fördelar för din livslånga
                träning.
                <br />
                <br />
                Du kan boka upp till 2 pass per dag utan maxgräns på antal
                bokade pass samtidigt. Passen går att boka upp till 14 dagar
                innan passtidens start. Avbokning av pass sker senast 1 timmar
                innan passtart.
              </p>
              <br />
              <p className="descriptionTitle" style={{ color: "#fff" }}>
                I lokalen finns det omklädningsrum, duschar och hygienartiklar.
              </p>
              <br />

              <p className="descriptionTitle" style={{ color: "#fff" }}>
                Medlemskapet har ingen bindningstid.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img src={blackCard} className="img-fluid" alt="Abbe Joof" />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">BAMBA PT</h1>
              <hr
                style={{ marginTop: "20px", marginBottom: "60px" }}
                className="pinkHr"
              />
              <p className="descriptionText">
                Personlig träning ger många fördelar för dig som vill förbättra
                din fysiska form och allmänna välbefinnande. Vi tar hänsyn till
                ditt unika behov, mål och fysiska förmågor för att skapa en
                träningsplan som är anpassad specifikt för dig. Vi går igenom
                kortsiktiga och långsiktiga mål och reviderar dessa under resans
                gång. Allt detta för att hjälpa dig säkerställa att du når dina
                träningsmål på ett säkert och effektivt sätt.
                <br />
                <br />
                En av våra coacher viger sin fulla kapacitet och den kunskap de
                besitter inom sina områden helt åt dig och de mål du vill nå. Vi
                ger rådgivning, stöd och säkerställer att du använder rätt form
                och teknik under dina träningar, vilket minskar risken för
                skador.
                <br />
                <br />
                Du har möjlighet att välja tränare efter träningsform du
                föredrar och vi hjälper dig att utifrån egna mål och
                skräddarsydda träningsupplägg på återkommande tider varje vecka
                enbart för dig. Att boka en fast tid hjälper dig att antingen
                komma igång med träning, komma i bättre form eller få in rutinen
                att träna varje vecka.
                <br />
                <br />
                Vi finns här för att tillsammans med dig forma ditt nya jag!
              </p>
              <br />
              <p className="descriptionTitle" style={{ color: "#fff" }}>
                I lokalen finns det omklädningsrum, duschar och hygienartiklar.
              </p>
              <br />

              <p className="descriptionTitle" style={{ color: "#fff" }}>
                Medlemskapet har ingen bindningstid.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img src={PersCard} className="img-fluid" alt="Abbe Joof" />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">BAMBA KLIPPKORT</h1>
              <hr
                style={{ marginTop: "20px", marginBottom: "60px" }}
                className="pinkHr"
              />
              <p className="descriptionText">
                Vill du komma igång och träna hos oss finns möjligheten att köpa
                klippkort för ett begränsat antal gånger, både för gruppträning
                men även för personlig träning.
                <br />
                <br />
                De olika passen inkluderar fys, styrketräning och kampsport.
                Syftet med våra olika pass är att du ska få lära dig grunderna i
                styrketräning, korrekt teknik samt prova på olika
                träningsformer. Genom att lära dig rätt teknik minskar
                skaderisken och du kommer få stora fördelar för din livslånga
                träning.
                <br />
                <br />
                Att köpa ett klippkort för personlig träning ger många fördelar
                för dig som vill förbättra din fysiska form och allmänna
                välbefinnande. Vi tar hänsyn till ditt unika behov, mål och
                fysiska förmågor för att skapa en träningsplan som är anpassad
                specifikt för dig. Detta hjälper till att säkerställa att du når
                dina träningsmål på ett säkert och effektivt sätt.
                <br />
                <br />
                En av våra coacher viger sin fulla kapacitet och den kunskap de
                besitter inom sina områden helt åt dig och de mål du vill nå. Vi
                ger rådgivning, stöd och säkerställer att du använder rätt form
                och teknik under dina träningar, vilket minskar risken för
                skador.
                <br />
                <br />
                Vi finns här för att tillsammans med dig forma ditt nya jag!
              </p>
              <br />
              <p className="descriptionTitle" style={{ color: "#fff" }}>
                I lokalen finns det omklädningsrum, duschar och hygienartiklar.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img src={giftCard} className="img-fluid" alt="Abbe Joof" />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "120px" }} className="d-flex">
          <Col style={{ paddingRight: "5rem" }} xs={12} md={6}>
            <div>
              <h1 className="title">BAMBA PRESENTKORT</h1>
              <hr
                style={{ marginTop: "20px", marginBottom: "60px" }}
                className="pinkHr"
              />
              <p className="descriptionText">
                Kanske behöver någon i din närhet en utmaning, hjälp att koma
                igång eller hjälp att nå sina träningsmål?!
                <br />
                <br />
                Att köpa ett presentkort hos oss kan innebära allt ifrån en
                utmaning att sparras med en dubbel VM-medaljör i thaiboxning,
                att åstadkomma stor förändring under en intensiv period eller
                enbart välbehövlig egen tid med fokus på just en själv och sitt
                mående.
                <br />
                <br />
                Att unna någon en träningsupplevelse med någon av våra
                professionella tränare kan vara början till ett långt och
                hälsosamt liv. Oavsett vad avsikten är så tar vi fram ett
                lämpligt upplägg och passar för det du har tänkt.
                <br />
                <br />
              </p>
              <br />
              <p className="descriptionTitle" style={{ color: "#fff" }}>
                I lokalen finns det omklädningsrum, duschar och hygienartiklar.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img src={ptCard} className="img-fluid" alt="Abbe Joof" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="container mobileView">
        <hr style={{ margin: "0" }} />
        <br />
        <br />
        <p className="descriptionTitleMobile">Medlemskap</p>
        <p className="descriptionTextMobile">
          Vi på BAMBA erbjuder olika nivåer av medlemskap för att möta allas
          behov. Vi har därför tagit fram två nivåer av medlemskap ”BAMBA vit”
          och ”BAMBA svart”. Vi tänker att träning är något man ska hinna med i
          vardagen även om man under perioder har mycket utanför träningen som
          tar tid. Hälsofördelarna med träning är för många för att prioritera
          bort träning även om annat i vardagen kräver vår tid. <br />
          <br /> Hos oss har du därför möjlighet att ha allt klart när du
          kommer. Tjänster som tvättservice, uppsättning av BAMBAS
          träningskläder och eget skåp är delar av det som vi erbjuder. Hos oss
          finns omklädningsrum, duschar och hygienartiklar. <br />
          <br />
          Vi tänker att sammantagna hälsan är avgörande för att hålla sig frisk,
          hel och må bra i sitt liv över tid. Vi vill att du ska få en
          fantastisk träningsupplevelse och att du ska längta efter att komma
          tillbaka till oss för nästa pass.
          <br />
          <br /> Du ser till att ta dig till oss och så ser vi till att du har
          allt du behöver för att träna hos oss helt enkelt. <br />
          <br />
          Kontakta oss på
          <span>
            <a
              className="underline linkHover"
              href="mailto:info@bambaostermalm.se"
            >
              &nbsp;info@bambaostermalm.se&nbsp;
            </a>
          </span>
          hjälper vi dig komma igång!
        </p>
        <WhiteCard />
        <BlackCard />
        <PtCard />
        <PassCard />
        <GiftCard />
      </div>
    </>
  );
};

export default MedlemskapScreen;
