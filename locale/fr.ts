// docs:
// - \u00A0 used for non-breaking spaces in "Hack Club", "Hack Clubbers", similar occurences.

import replaceNbsp from "@/libs/replaceNbsp";

const messages = {
  index: {
    navbar: {
      clubs: "Clubs",
      fiscalsponsorship: "Parrainage fiscal",
      hackathons: "Hackathons",
      join: "Rejoindre",
      toolbox: "Boîte à outils",
      donors: "Donateurs"
    },
    welcome: `Bienvenue chez Hack\u00A0Club`,
    header: {
      weare: "Nous sommes",
      // number goes here in between, 104,368 something
      teenhackers: "jeunes hackers",
      aroundtheworld: "du monde entier qui codent ensemble.",
      outernetpic: "Hackers à Outernet dans le Vermont",
      outernetpictitle: "📸 Photo de Matt Gleich, Hack Clubber au NH!"
    },
    headerbuttons: {
      slack: "Rejoindre Slack",
      mainsite: "Site principal (anglais)",
      mainsitesubtext: "avec plus d'informations!"
    },
    firstsection: {
    discoverthe: "Découvrez la",
    joyofcode: "joie du code",
    together: ", ensemble.",
    everydaytext: `Chaque jour, des milliers de Hack\u00A0Clubbers se retrouvent en ligne et
    en personne pour créer des choses avec du code. Que vous soyez
    débutant ou que vous ayez des années d'expérience, il y a une place
    pour vous chez Hack\u00A0Club. Découvrez notre `,
    hackerethic: "éthique hacker"
    },
    steps: {
      step1: {
        title: "Connectez-vous avec d'autres jeunes codeurs",
        text1: `Vous avez une question sur le code ? Vous cherchez des retours sur votre projet ? Tu vas trouver des centaines de personnes avec qui parler dans notre`,
        text2: "(comme Discord), actif toutes les heures."
      },
      step2: {
        title: "Créer des outils d'apprentissage open source",
        text1: `Nous construisons ensemble de grands projets open source (`,
        linktext: "3k+\u00A0PRs par ans",
        text2:
          ") comme ce site web, un moteur de jeu, système de streak quotidien, et plus encore !"
      },
      step3: {
        title: "Rassemblez-vous en personne avec d'autres créateurs",
        text1:
          "Rencontrez d'autres Hack\u00A0Clubbers de votre communauté pour créer ensemble dans l'un des 1000+",
        hackclubslink: "Hack\u00A0Clubs",
        and: "et",
        hackathonslink: "Hackathons Lycéens",
        dot: "."
      }
    },
    carouseltext: "Voici quelques projets auxquels vous pourriez participer:",
    connectwithbuilders: {
      connectwith: "Connectez-vous avec des",
      builders: "créateurs",
      aroundworld: "du monde entier",
      onlineinperson:
        "Nous nous retrouvons en ligne et en présentiel pour partager notre passion du code et créer des choses ensemble !"
    },
    slackcard: {
      onlinecommunity: "Notre communauté en ligne",
      text1: `Coder n'a pas besoin d'être une activité solitaire. A Hack&nbsp;Club, nous créons des choses remarquables ensemble, et sur notre Slack vous trouverez aussi des personnes formidables avec qui traîner. Coder ensemble, trouvez votre communauté de programmeurs, imaginez quelque chose de fou, ou rejoignez simplement le #lounge.`,
      text2: `Nous invitons parfois quelqu'un que nous souhaitons vraiment rencontrer (comme Sal Khan, George Hotz et Lady Ada) et organisons un`,
      ama: "FAQ",
      withthem: "avec eux.",
      joinslack: " Rejoindre le Slack",
      currentlyonline: "Actuellement en ligne",
      totalchannels: "Salons au total",
      dailymessages: "Messages quotidiens",
      totalmembers: "Membres au total"
    },
    webuild: {
      webuild: "Nous construisons des jeux et outils",
      opensource: "open source",
      gamestools: "ensemble",
          text: `En collaboration avec les ingénieurs de l’équipe Hack\u00A0Club,
            les Hack\u00A0Clubbers créent des outils d’apprentissage les uns pour les autres.
            Participez à ces projets en créant quelque chose avec nos outils,
            ou contribuez directement à l’amélioration des outils eux-mêmes.`
    },
    sprigcard: {
      text: `Dessinez, faites de la musique et créez des jeux dans notre éditeur de jeu JavaScript basé sur le web, qui a été utilisé par plus de 7k fabricants à travers le monde.`,
      button1content: "Click here to get started in our editor",
      buildasprig: "Créer un jeu Spring",
      reviewgames: "Revoir les jeux / construire le moteur",
      connect: "Connectez-vous avec d'autres développeurs de jeux",
      newfrom: "Nouveautés de",
      thegallery: "la galerie"
    },
    blotcard: {
          text: `Blot est une machine à dessiner open source et un éditeur en ligne,
            conçus comme une introduction ludique et accessible aux débutants
            à la fabrication numérique et à l’art génératif.`,
          learnmore: "En savoir plus",
          createsomething: "Créez quelque chose dans l’éditeur",
          sharecreations: "Partagez vos créations et discutez sur Slack"
    },
    sineridercard: {
          text: `SineRider est un jeu autour de l’amour et des graphiques, porté par
            des hackers ados de tous horizons : artistes, musiciens,
            programmeurs, conteurs… Si ça te ressemble, rejoins-nous !
            On a toujours besoin d’aide pour garder le projet à jour
            et le faire tourner au mieux.`,
          playnow: "Jouer maintenant",
          jointhedevelopment: "Rejoindre le développement"
    },
    sprigconsolecard: {
          text: `Jouez à vos propres jeux Sprig sur cette console, que vous pouvez
            assembler et démonter. Chaque kit inclut les pièces nécessaires
            pour débuter en ingénierie matérielle et en programmation
            de systèmes embarqués.`,
          buildagame: "Créez un jeu et recevez votre console"
    },
    workshopscard: {
      title: "Ateliers",
      text: `Plus de 100 tutoriels et idées de code créés par la communauté,
             à suivre en autonomie. Apprenez à coder en construisant,
             un projet à la fois.`,
      browse: "Parcourir les ateliers",
      build: "Créer un atelier",
      splatterpaint: "Peinture éclaboussée",
      splatterpaintdescription:
        "Des éclaboussures de peinture folles et colorées dans ton navigateur avec Paper.js",
      particlephysics: "Physique des particules",
      particlephysicsdescription:
        "Créez une simulation de physique des particules avec p5.js"
    },
    irlcommunity: {
      findyour: "Trouve ta",
      community: "communauté IRL.",
      text: `Des milliers de Hack\u00A0Clubbers organisent et participent à des hackathons et des clubs de codage après l’école.`
    },
    clubscard: {
      title: "Un réseau de plus de 1000 clubs de code",
      text1: `Rejoins ou lance un Hack\u00A0Club et fais partie d’un réseau de
              clubs de code de grande qualité, où tu apprends à coder
              entièrement en construisant des projets.`,
      text2:
        "Tu peux commencer sans expérience et concevoir puis publier un projet à chaque réunion.",
      buttoncontent:
        "on te soutiendra avec du contenu de réunion, des stickers et plus encore",
      startaclub: "Lancer un club"
    },
    hackathonscard: {
      title: "Hackathons lycéens",
      text: `Nous soutenons le plus grand réseau de hackathons pour les lycéens au monde. D'une communauté en ligne d'organisateurs à des autocollants gratuits et plus encore !`,
      attend: "Assistez à un hackathon",
      organizer: "Oganisateur ? En savoir plus.",
      upcoming: "Hackathons à venir"
    },
    hcbcard: {
      // it's HCB, not hack club bank
      text: "Devenez une association à but non lucratif et rejoignez plus de 700 équipes qui utilisent HCB pour organiser des événements de classe mondiale.",
      text2:
        "Cette plateforme est construite et maintenue par l’équipe Hack\u00A0Clubs.",
      startfundraising: "Commencer la levée de fonds !"
    },
    recap: {
      title: "NOUS AVONS BEAUCOUP À FAIRE - RÉCAPITULONS",
      secondhome: "Trouvez votre deuxième maison à",
      hackclub: "Hack\u00A0Club",
      joinourslack: "Rejoindre notre Slack",
      slacktext:
        "Connectez-vous avec d’autres adolescents techniques sur Slack et travaillez ensemble.",
      opensource: "Explorer nos outils open source",
      opentext:
        "Nous construisons actuellement un moteur de jeu, un système de séries quotidiennes, un jeu de graphiques, et plus encore !",
      startaclub: "Lancer un club",
      clubtext:
        "Construire une communauté en personne de hackers lycéens, et nous sommes là pour aider."
    },
    footer: {
      philosophy: "Philosophie",
      team: "Notre équipe et conseil",
      jobs: "Emplois",
      brand: "Guide de marque",
      press: "Demandes de presse",
      philanthropy: "Faire un don",
      community: "Événements communautaires",
      jams: "Jams",
      toolbox: "Boîte à outils",
      clubsmap: "Carte des clubs",
      codeofconduct: "Code de conduite",
      privacy: "Confidentialité et conditions",
      calltollfree: "(appel gratuit)",
      nonprofit: "association à but non lucratif"
    }
  }
};

// for safety, replace nbsp with \u00A0 in the strings
replaceNbsp(messages);

export default messages;
