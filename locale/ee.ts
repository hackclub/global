// docs:
// - \u00A0 used for non-breaking spaces in "Hack Club", "Hack Clubbers", similar occurences.

import replaceNbsp from "@/libs/replaceNbsp";

const messages = {
  index: {
    navbar: {
      clubs: "Klubid",
      fiscalsponsorship: "Fiskaalsponsorlus",
      hackathons: "Hackathonid",
      join: "Liitu",
      toolbox: "Tööriistakast",
      donors: "Toetajad",
    },
    welcome: `Tere tulemast Hack\u00A0Club'i`,
    header: {
      weare: "Me oleme",
      // number goes here in between, 104,368 something
      teenhackers: "noort häkkerit",
      aroundtheworld: "üle kogu maailma, kes kodeerivad koos",
      outernetpic: "Häkkerid Outernetis Vermontis",
      outernetpictitle: "📸 Pildistas Matt Gleich, Hack Clubber NH'is!",
    },
    headerbuttons: {
      slack: "Liitu Slack'iga",
      mainsite: "Peamine veebileht (inglise keeles)",
      mainsitesubtext: "rohkema infoga!",
    },
    firstsection: {
      discoverthe: "Avasta",
      joyofcode: "kodeerimise rõõm",
      together: ", üheskoos.",
      everydaytext: `Iga päev kogunevad tuhanded Hack Clubi liikmed veebis ja
      kohapeal, et koos midagi uut kodeerida. Olenemata sellest, 
      kas oled algaja programmeerimises või sul on juba aastatepikkune kogemus, 
      leidub Hack Clubis koht ka sinu jaoks. Vaata meie `,
      hackerethic: "häkkeri eetikat",
    },
    steps: {
      step1: {
        title: "Leia teisi noori kodeerijaid",
        text1: `Kas sul on kodeerimisküsimus? Otsid projekti kohta tagasisidet? Meie globaalses`,
        text2:
          "is (nagu Discord) leiad sadu ägedaid inimesi, kellega rääkida, aktiivne 24/7!",
      },
      step2: {
        title: "Ehita avatud lähtekoodiga projekte",
        text1: `Me ehitame koos suuri avatud lähtekoodiga projekte (`,
        linktext: "3k+\u00A0PR-i aastas",
        text2: `) nagu see veebileht, mängumootor, igapäevane streak'i süsteem, ja palju muud!`,
      },
      step3: {
        title: "Kogune kohapeal teiste häkkeritega",
        text1:
          "Kohtu teiste Hack\u00A0Clubberitega oma kogukonnas, ja alusta koos üks tuhandetest",
        hackclubslink: "Hack\u00A0Club",
        and: "-idest ja",
        hackathonslink: "noorte hackatonidest",
        dot: ".",
      },
    },
    carouseltext: "projektid milles võiksid osaleda:",
    connectwithbuilders: {
      connectwith: "Kohta teisi",
      builders: "ehitajaid",
      aroundworld: "üle maailma",
      onlineinperson:
        "Me koguneme veebis ja kohapeal, et jagada meie kodeerimisarmastust ja luua uusi asju koos.",
    },
    slackcard: {
      onlinecommunity: "Meie Veebikogukond",
      text1: `Programmeerimine ei pea olema üksildane tegevus. Hack&nbsp;Club'is, loome koos imelisi asju, ja meie Slack'is 
              võid kohtuda lahedate inimestega kellega aega veeta. Kodeeri koos, leia oma programmeerimiskogukond, mõtle välja midagi ägedat, või lihtsalt suhtle #lounge'is.`,
      text2: `Aeg-ajalt me kutsume inimesi kellega me väga tahame rääkida (näiteks Sal
                  Khan, George Hotz, ja Lady Ada) ja korraldame`,
      ama: "AMA",
      withthem: "(Küsi Minult Mida Tahes) nendega.",
      joinslack: "Liitu meie Slack'iga",
      currentlyonline: "praegu aktiivsed",
      totalchannels: "kanalit",
      dailymessages: "sõnumit päevas",
      totalmembers: "liiget kokku",
    },
    webuild: {
      webuild: "Me ehitame",
      opensource: "avatud lähtekoodiga",
      gamestools: "mänge ja tööriistu koos",
      text: `Koostöös Hack&nbsp;Clubi meeskonna inseneridega
             loovad Hack Clubi liikmed üksteisele õppevahendeid. Osale
             nendes projektides, luues midagi meie
             vahenditega või aidates kaasa vahendite arendamisele.`,
    },
    sprigcard: {
      text: `Joonista, loo muusikat, ja tee mänge meie veebipõhises JavaScript'i mängu loojas, mida kasutavad 7k+ loojad üle maailma.`,
      button1content: "Vajuta siia et alustada meie mänguloojas",
      buildasprig: "Loo enda Sprig mäng",
      reviewgames: "Ülevaata mänge / arenda mootorit",
      connect: "Ühendu teiste mänguloojatega",
      newfrom: "Uus",
      thegallery: "galeriist",
    },
    blotcard: {
      text: `Blot on avatud lähtekoodiga joonistamis masin ja veebilooja, loodud
             et olla lõbus ja algaja sõbralik tutvustus digitaalsesse loomisesse ja generatiivsesse kunsti.`,
      learnmore: "Uuri lähemalt",
      createsomething: "Loo midagi loojas",
      sharecreations: "Jaga oma loomingut ja vestle Slackis",
    },
    sineridercard: {
      text: `SineRider on mäng armastusest ja graafikast, mis on tehtud noortest
             häkkeritest: kunstnikud, muusikud, programmeerijad, kirjanikud…
             nii et kui sa oled üks nendest, liitu meiega! Abi on alati teretulnud et hoida asjad korras!`,
      playnow: "Mängi",
      jointhedevelopment: "Liitu arendamisega",
    },
    sprigconsolecard: {
      text: `Mängi oma Sprig'i mänge selle konsooliga, mida sa saad kokku panna
             ja lahti võtta. Igas komplektis on vajalikud tükid millega
             saab alustada riistvaratehnika ja sisseehitatud süsteemidega
             programmeerimisega.`,
      buildagame: "Ehita mäng ja saa enda konsool",
    },
    workshopscard: {
      title: "Töötoad",
      text: `100+ Kogukonna poolt loodud iseseisvat programmeerimise õpetust ja ideed. Õpi programmeerima, tehes üht projekti korraga.`,
      browse: "Avasta töötubasid",
      build: "Loo töötuba",
      splatterpaint: "Pritsiv värv",
      splatterpaintdescription:
        "Hullumeelne värvikas pritsiv värv veebis Paper.js abil",
      particlephysics: "Osakestefüüsika",
      particlephysicsdescription:
        "Osakestefüüsika simulatsiooni loomine p5.js abil",
    },
    irlcommunity: {
      findyour: "Leia oma",
      community: "kohalik kogukond.",
      text: `Tuhanded Hack Clubberid organiseerivad ja osalevad
             hackathonides ja koolijärgsetes kodeerimisklubides.`,
    },
    clubscard: {
      title: "Võrgustik 1000+ Kodeerimis Klubidega",
      text1: `Liitu või alusta enda Hack&nbsp;Club ja ole osa kõrgekvaliteetsete kodeerimisklubide võrgustikust,
              kus õpid kodeerima täiesti läbi projektide ehitamise.`,
      text2:
        "Sa võid alustada ilma kogemuseta ja ehitada ning avaldada ühe projekti iga kokkutulekuga.",
      buttoncontent:
        "me saame toetada sind läbi kokkutuleku sisuga, kleepsudega, ja rohkem",
      startaclub: "Alusta enda klubi",
    },
    hackathonscard: {
      title: "Noorte Hackathonid",
      text: `Me toetame kõige suurimat noorte hackathonide võrgustiku maailmas.
             Organiseerijate veebikogukonnast tasuta kleepsudeni ja veel rohkem!`,
      attend: "Osale hackathonis",
      organizer: "Organiseerija? Uuri lähedamalt.",
      upcoming: "Tulevased Hackathonid",
    },
    hcbcard: {
      // it's HCB, not hack club bank
      text: "Saa 501(c)3 mittetulundusühinguks ja liitu 700+ meeskonnaga, kes kasutavad HCB-d maailmatasemel ürituste korraldamiseks.",
      text2: "Selle platvormi on ehitanud ja haldab Hack\u00A0Clubi meeskond.",
      startfundraising: "Alusta rahakogumist!",
    },
    recap: {
      title: "Meil on palju käimas - võtame kokku",
      secondhome: "Leia oma teine kodu",
      hackclub: "Hack\u00A0Club'is",
      joinourslack: "Liitu meie Slack'iga",
      slacktext:
        "Suhtle teiste tehnikahuvilistest teismelistega Slack'is ja häkki koos.",
      opensource: "Avasta meie avatud lähtekoodiga tööriistu",
      opentext:
        "Hetkel ehitame mängumootorit, igapäevast streak'i süsteemi, graafikumängu ja palju muud!",
      startaclub: "Alusta enda klubi",
      clubtext: "Loo kohapeal häkkerite kogukond. Me oleme siin, et aidata.",
    },
    footer: {
      philosophy: "Filosoofia",
      team: "Meie Meeskond & Juhatus",
      jobs: "Töökohad",
      brand: "Brändi Juhend",
      press: "Ajakirjanduse Päringud",
      philanthropy: "Anneta",
      community: "Kogukonna üritused",
      jams: "Jamid",
      toolbox: "Tööriistakast",
      clubsmap: "Klubide Kaart",
      codeofconduct: "Käitumiskoodeks",
      privacy: "Privaatsus & Tingimused",
      calltollfree: "(helista tollivabalt)",
      nonprofit: "mittetulunduslik",
    },
  },
};

// for safety, replace nbsp with \u00A0 in the strings
replaceNbsp(messages);

export default messages;
