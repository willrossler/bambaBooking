import React from "react";
import ProductCard from "../components/ProductCard";
import { Row, Col } from "react-bootstrap";
import abbe from "../assets/images/abbePic.png";
import jocke from "../assets/images/jockePic.png";
import martin from "../assets/images/martinPic.png";

const ShopScreen = () => {
  return (
    <>
      <div className="container mobileView">
        <h1 className="py-2" style={{ color: "#fff" }}>
          Vi på Bamba{" "}
        </h1>
        <hr className="pinkHrMobile" />
        <div className="py-4">
          <img className="img-fluid py-2" src={abbe} />
          <h1 style={{ color: "#fff" }}>Abbe Joof</h1>
          <hr className="pinkHrMobile" />
          <h2 style={{ color: "#fff", opacity: "0.5" }}>
            Grundare + Personlig Tränare
          </h2>
          <p style={{ color: "#fff", fontSize: "14px" }}>
            Jag är dubbel VM-medaljör i thaiboxning, före detta socialarbetare
            och arbetar som personlig tränare och coach. Jag var med i SVT:s
            program Bästa Träningen och har även varit bokad som tränare på GIHs
            Idrotts- och hälsokonvent 2022. Min inneboende passion för träning,
            människor och kampsport har tagit mig på flera specialutbildningar
            inom personlig träning och kostrådgivning. Jag har coachat aktiva
            tävlande inom kampsport, arbetat som kampsportsinstruktör och
            personlig tränare under flera år. Min egen resa inom kampsport
            började som fjortonåring då jag började med thaiboxning och tog, som
            sextonåring, mitt första SM-guld. Bakom mig har jag flertalet
            proffsmatcher i thaiboxning, K1 och MMA, varav två SM-guld och två
            VM-brons i thaiboxning. Jag är i grunden utbildad socialpedagog och
            är även certifierad coach i personlig utveckling på jungiansk grund.
            Innan jag bytte karriär till att träna andra arbetade jag som
            verksamhetsledare inom Spånga-Tensta stadsdelsförvaltning, där jag
            var ansvarig för en av stadsdelsförvaltningens största satsningar
            för ökad delaktighet och inkludering av ungdomar och unga vuxna som
            befann sig i utsatta livssituationer. Andra personers välmående är
            helt enkelt väldigt viktigt för mig. Min ambition med BAMBA är att
            skapa en träningsstudio där alla får plats och kan träna
            tillsammans. Träning hos oss är till för alla oavsett om du är
            nybörjare, motionär eller elit. Vi utgår från varje individs
            specifika behov genom att erbjuda PT i världsklass. Våra pass och
            upplägg innebär allsidig träning för hela kroppen, såväl hjärna som
            hjärta. På ett lekfullt sätt testar vi olika former av
            träningsstilar tillika specifik kampsportsfys. Att träna hos oss
            hoppas vi ska ge: – Bättre självkänsla och självförtroende – Ökad
            koncentrationsförmåga och lindring av stress – Tydliga resultat Jag
            tänker att träning behövs både mentalt och fysiskt, att dessa hör
            ihop och är viktiga för ett gott hälsosamt liv. Om det är något alla
            borde träna någon gång i sitt liv så är det någon form av kampsport!
          </p>
          <h2 style={{ color: "pink", opacity: "1" }}>Specialiteter:</h2>
          <p style={{ color: "#fff" }}>Kampsport, coaching, teknik och fys</p>
        </div>
        <div className="py-4">
          <img className="img-fluid py-2" src={jocke} />
          <h1 style={{ color: "#fff" }}>Joakim Karlsson</h1>
          <hr className="pinkHrMobile" />
          <h2 style={{ color: "#fff", opacity: "0.5" }}>Personlig Tränare</h2>
          <p style={{ color: "#fff", fontSize: "14px" }}>
            Träning har varit en konstant i mitt liv, allt från hockey, fotboll
            till kampsport. Jag har gått ett trettiotal matcher som
            professionell atlet inom Thaiboxning & K-1 och har medaljer från SM
            & VM i mitt bagage. Efter avslutad karriär sadlade jag om till
            thaiboxningscoach och är idag förbundstränare åt det Svenska
            landslaget i thaiboxning. Med min bakgrund inom kampsport har jag
            förstått vikten av att kunna grunderna i aktiviteter för att
            utvecklas både inom sport men också som person. Jag tror på fördelen
            med att nyttja kroppen på alla parametrar: frekvens, styrka, och
            uthållighet, för att enklare nå atletiska mål. Jag kommer senast
            från Allstars Training Center där jag var huvudcoach för
            thaiboxningen och har haft äran att ta fram både svenska och
            europeiska världsmästare. Som tränare är jag lyhörd och inkännande
            samtidigt som jag är tuff när det behövs. Som coach är jag
            pedagogisk och tålmodig. Mitt mål som tränare är att hjälpa dig
            uppnå dina mål, pusha dig till nya nivåer samt ge dig ökad styrka,
            starkare självkänsla och ett hälsosammare liv.
          </p>
          <h2 style={{ color: "pink", opacity: "1" }}>Specialiteter:</h2>
          <p style={{ color: "#fff" }}> Kampsport, teknik, fys & löpning</p>
        </div>
        <div className="py-4">
          <img className="img-fluid py-2" src={martin} />
          <h1 style={{ color: "#fff" }}>Martin Pettersson</h1>
          <hr className="pinkHrMobile" />
          <h2 style={{ color: "#fff", opacity: "0.5" }}>Personlig Tränare</h2>
          <p style={{ color: "#fff", fontSize: "14px" }}>
            Mitt sportutövande tar avstamp i amerikansk fotboll där jag, efter
            några år i landslaget, bl.a. tog guld i det nordiska mästerskapet.
            Med en avslutad sportkarriär i ryggen så är jag idag specialist inom
            tyngdlyftning och styrketräning samtidigt som jag själv lär mig
            diverse kampsporter. Arbetskarriären inom träning började på West
            Barbell Club i Bromma, ett gym med fokus på att bygga upp och
            utveckla atleter. Utöver det har jag varit coach för Alvik Basket,
            Brommapojkarna och Bromma Maniacs i amerikansk fotboll. Sedan 2015
            har jag arbetat som lärare på Personal Training School, där jag
            utbildar personliga tränare i det praktiska utövandet samt i
            grundläggande anatomi. Min drivkraft som personlig tränare är att se
            din utveckling för att tillsammans kunna glädjas åt att du uppnått
            dina mål. Under våra sessioner kan du förvänta dig fokus på
            precision och noggrannhet i både utövande och träningsprogram.
          </p>
          <h2 style={{ color: "pink", opacity: "1" }}>Specialiteter:</h2>
          <p style={{ color: "#fff" }}>
            styrka, rörelse, sportspecifik prestation & tyngdlyftning
          </p>
        </div>
      </div>
    </>
  );
};

export default ShopScreen;
