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
      toolbox: "Toolbox",
      donors: "Donors"
    },
    welcome: `Bienvenue chez Hack\u00A0Club`,
    header: {
      weare: "Nous sommes",
      // number goes here in between, 104,368 something
      teenhackers: "jeunes hackers",
      aroundtheworld: "du monde entier qui codent ensemble.",
      outernetpic: "Hackers à Outernet dans le Vermont",
      outernetpictitle: "📸 Photo de Matt Gleich, Hack Clubber in NH!"
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
          ") comme ce site web, un moteur de jeu, système streak quotidien, et plus encore !"
      },
      step3: {
        title: "Rassemblez-vous en personne avec d'autres créateurs",
        text1:
          "Rencontrez d'autres Hack\u00A0Clubbers de votre communauté pour créer ensemble dans l'un des 1000+",
        hackclubslink: "Hack\u00A0Clubs",
        and: "et",
        hackathonslink: "Hackatons Lycéens",
        dot: "."
      }
    },
    carouseltext: "Voici quelques projets auxquels vous pourriez participer:",
    connectwithbuilders: {
      connectwith: "Connect with",
      builders: "builders",
      aroundworld: "from around the world",
      onlineinperson:
        "We gather both online and in-person to share our love of code and make things together!"
    },
    slackcard: {
      onlinecommunity: "Our Online Community",
      text1: `Coding doesn't have to be a solitary activity. At Hack&nbsp;Club, we
              make remarkable things together, and in our Slack you'll find
              awesome people to hang out with too. Code together, find your
              programming community, dream up something wild, or just #lounge.`,
      text2: `Occasionally we invite someone we really want to speak to (like Sal
                  Khan, George Hotz, and Lady Ada) and host an`,
      ama: "AMA",
      withthem: "with them.",
      joinslack: "Join our Slack",
      currentlyonline: "Currently online",
      totalchannels: "Total Channels",
      dailymessages: "Daily Messages",
      totalmembers: "Total Members"
    },
    webuild: {
      webuild: "We Build",
      opensource: "open source",
      gamestools: "games and tools together",
      text: `In collaboration with engineers on the Hack&nbsp;Club team,
             Hack Clubbers build learning tools for each other. Get
             involved with these projects by building something with our
             tools or contribute to the tools themselves.`
    },
    sprigcard: {
      text: `Draw, make music, and craft games in our web-based JavaScript game
            editor, which has been used by 7k+ makers around the world.`,
      button1content: "Click here to get started in our editor",
      buildasprig: "Build a Sprig game",
      reviewgames: "Review games / build the engine",
      connect: "Connect with other game devs",
      newfrom: "New from",
      thegallery: "the gallery"
    },
    blotcard: {
      text: `Blot is an open source drawing machine and online editor, designed
             to be a fun and beginner friendly introduction to digital
             fabrication and generative art.`,
      learnmore: "Learn more",
      createsomething: "Create something in the editor",
      sharecreations: "Share your creations and chat on Slack"
    },
    sineridercard: {
      text: `SineRider is a game about love and graphing, powered by teenage
             hackers of all kinds: artists, musicians, programmers, storytellers…
             so if that’s you, come join us! We can always use help keeping
             everything up to date and running smoothly.`,
      playnow: "Play now",
      jointhedevelopment: "Join the development"
    },
    sprigconsolecard: {
      text: `Play your own Sprig games on this console, which you can assemble
             and disassemble. Each kit includes parts needed for getting
             started with hardware engineering and embedded systems
             programming.`,
      buildagame: "Build a game and get your console"
    },
    workshopscard: {
      title: "Workshops",
      text: `100+ community-contributed, self-guided coding tutorials and ideas.
             Learn to code by building, one project at a time.`,
      browse: "Browse The Workshops",
      build: "Build A Workshop",
      splatterpaint: "Splatter Paint",
      splatterpaintdescription:
        "Crazy colorful splatter paint in your browser with Paper.js",
      particlephysics: "Particle Physics",
      particlephysicsdescription:
        "Create a particle physics simulation and with p5.js"
    },
    irlcommunity: {
      findyour: "Find your",
      community: "IRL community.",
      text: `Thousands of Hack Clubbers organize and participate in
             hackathons and after school coding clubs.`
    },
    clubscard: {
      title: "A Network of 1000+ Coding Clubs",
      text1: `Join or start a Hack&nbsp;Club and be part of a network of high
              quality coding clubs where you learn to code entirely through
              building things.`,
      text2:
        "You can start with no experience and build and ship a project every meeting.",
      buttoncontent:
        "we'll support you with meeting content, stickers, and more",
      startaclub: "Start a club"
    },
    hackathonscard: {
      title: "High School Hackathons",
      text: `We support the largest network of high school hackathons in the
             world. From an online community of organizers to free stickers and
             more!`,
      attend: "Attend a hackathon",
      organizer: "Organizer? Learn more.",
      upcoming: "Upcoming Hackathons"
    },
    hcbcard: {
      // it's HCB, not hack club bank
      text: "Become a 501(c)3 nonprofit and join 700+ teams using HCB to run world-class events.",
      text2:
        "This platform is built and maintained by the Hack&nbsp;Club team.",
      startfundraising: "Start fundraising!"
    },
    recap: {
      title: "We've got a lot going on - Let's recap",
      secondhome: "Find your second home at",
      hackclub: "Hack\u00A0Club",
      joinourslack: "Join our Slack",
      slacktext:
        "Connect with other technical teenagers on Slack and hack on things together.",
      opensource: "Explore Our Open Source Tools",
      opentext:
        "We're currently building a game engine, daily streak system, graphing game, and more!",
      startaclub: "Start A Club",
      clubtext:
        "Build an in-person community of high school hackers, and we're here to help."
    },
    footer: {
      philosophy: "Philosophy",
      team: "Our Team & Board",
      jobs: "Jobs",
      brand: "Brand Guide",
      press: "Press Inquiries",
      philanthropy: "Donate",
      community: "Community Events",
      jams: "Jams",
      toolbox: "Toolbox",
      clubsmap: "Clubs Map",
      codeofconduct: "Code of Conduct",
      privacy: "Privacy & Terms",
      calltollfree: "(call toll-free)",
      nonprofit: "nonprofit"
    }
  }
};

// for safety, replace nbsp with \u00A0 in the strings
replaceNbsp(messages);

export default messages;
