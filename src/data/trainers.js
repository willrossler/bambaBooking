import abbePic from "../assets/images/abbePic.jpg";
import jockePic from "../assets/images/Jocke.jpg";
import martinPic from "../assets/images/Martin.jpg";
import najmedinPic from "../assets/images/Najmedin.jpg";

// Single source of truth for trainer/coach info. Previously this same
// content was duplicated across TrainerCard*, *Desktop, *Prez and *Short
// components per person (16 files for 4 people) - edit here instead.
export const trainers = {
  abbe: {
    id: "abbe",
    name: "Abbe Joof",
    role: "Ägare + Personlig Tränare",
    email: "abbe@bambaostermalm.se",
    image: abbePic,
    bio: [
      "Jag är dubbel VM-medaljör i thaiboxning, före detta socialarbetare och arbetar som personlig tränare och coach. Jag var med i SVT:s program Bästa Träningen och har även varit bokad som tränare på GIHs Idrotts- och hälsokonvent 2022. Min inneboende passion för träning, människor och kampsport har tagit mig på flera specialutbildningar inom personlig träning och kostrådgivning. Jag har coachat aktiva tävlande inom kampsport, arbetat som kampsportsinstruktör och personlig tränare under flera år. Min egen resa inom kampsport började som fjortonåring då jag började med thaiboxning och tog, som sextonåring, mitt första SM-guld. Bakom mig har jag flertalet proffsmatcher i thaiboxning, K1 och MMA, varav två SM-guld och två VM-brons i thaiboxning. Jag är i grunden utbildad socialpedagog och är även certifierad coach i personlig utveckling på jungiansk grund. Innan jag bytte karriär till att träna andra arbetade jag som verksamhetsledare inom Spånga-Tensta stadsdelsförvaltning, där jag var ansvarig för en av stadsdelsförvaltningens största satsningar för ökad delaktighet och inkludering av ungdomar och unga vuxna som befann sig i utsatta livssituationer. Andra personers välmående är helt enkelt väldigt viktigt för mig.",
      "Min ambition med BAMBA är att skapa en träningsstudio där alla får plats och kan träna tillsammans. Träning hos oss är till för alla oavsett om du är nybörjare, motionär eller elit. Vi utgår från varje individs specifika behov genom att erbjuda PT i världsklass. Våra pass och upplägg innebär allsidig träning för hela kroppen, såväl hjärna som hjärta. På ett lekfullt sätt testar vi olika former av träningsstilar tillika specifik kampsportsfys.",
      "Att träna hos oss hoppas vi ska ge: bättre självkänsla och självförtroende, ökad koncentrationsförmåga och lindring av stress, samt tydliga resultat.",
      "Jag tänker att träning behövs både mentalt och fysiskt, att dessa hör ihop och är viktiga för ett gott hälsosamt liv. Om det är något alla borde träna någon gång i sitt liv så är det någon form av kampsport!",
    ],
    specialties: ["Thaiboxning", "Coaching", "Teknik", "Teambuilding"],
  },
  jocke: {
    id: "jocke",
    name: "Joakim Karlsson",
    role: "Personlig Tränare",
    email: "jocke@bambaostermalm.se",
    image: jockePic,
    bio: [
      "Träning har varit en konstant i mitt liv, allt från hockey, fotboll till kampsport. Jag har gått ett trettiotal matcher som professionell atlet inom Thaiboxning & K-1 och har medaljer från SM & VM i mitt bagage. Efter avslutad karriär sadlade jag om till thaiboxningscoach och är idag förbundstränare åt det Svenska landslaget i thaiboxning. Med min bakgrund inom kampsport har jag förstått vikten av att kunna grunderna i aktiviteter för att utvecklas både inom sport men också som person. Jag tror på fördelen med att nyttja kroppen på alla parametrar: frekvens, styrka, och uthållighet, för att enklare nå atletiska mål. Jag kommer senast från Allstars Training Center där jag var huvudcoach för thaiboxningen och har haft äran att ta fram både svenska och europeiska världsmästare. Som tränare är jag lyhörd och inkännande samtidigt som jag är tuff när det behövs. Som coach är jag pedagogisk och tålmodig.",
      "Mitt mål som tränare är att hjälpa dig uppnå dina mål, pusha dig till nya nivåer samt ge dig ökad styrka, starkare självkänsla och ett hälsosammare liv.",
    ],
    specialties: ["Kampsport", "Teknik", "Fys", "Löpning"],
  },
  martin: {
    id: "martin",
    name: "Altan Celik",
    role: "Personlig Tränare",
    email: "altan@bambaostermalm.se",
    image: martinPic,
    bio: [
      "Jag har utövat kampsport sedan 8 års ålder inkluderat karate, kickboxning, boxning, taekwondo och Brasilianskt Jiu Jitsu. Mina främsta meriter som profissionell är pallplatser inom BJJ och Submission Wrestling. Sedan 2010 sitter jag i utbildningskomitten för Svenska Budo & Kampsportsförbundet med stor inblick i föreningslivet och utvecklingen av tränarna i Sverige.",
      "Utöver mitt yrke jobbar jag ideellt som tränare för MMA och Grappling utövare, allt från motionärer till amatörer och proffs. Min drivkraft är att engagera mig i människors idrottsliga och fysiska utveckling och prestation. Med stor motivation tränar jag både nybörjare och elitutövare på proffsnivå.",
    ],
    specialties: ["Personlig Träning & Utveckling", "Kampsport", "Sportspecifik prestation"],
  },
  naj: {
    id: "naj",
    name: "Najmedin Razavi",
    role: "Mental Coach",
    email: null,
    image: najmedinPic,
    bio: [
      "Mitt namn är Najmedin Razavi, på BAMBA är jag coach & existensterapeut. Min bakgrund sträcker sig från etnobotaniker till chefsutvecklare och har därmed mångårig erfarenhet inom både privat och offentlig sektor.",
      "Jag hjälper dig, utifrån din nuvarande livssituation och dina egna värderingar, att skapa riktning och uppnå positiva mål i ditt personliga och professionella liv. En del av min uppgift i relation till dig är att ge dig stöd och verktyg för en förbättrad vardag.",
      "Jag stöttar dig i att stilla bruset utifrån, våga lyssna inåt och definiera vad just du mår bra av och vill ha ut av ditt liv. Med en glasklar vision formas din personliga kompass som hjälper dig att klargöra syftet med nästa steg i ditt liv.",
    ],
    specialties: [],
  },
};

export const trainerList = Object.values(trainers);
