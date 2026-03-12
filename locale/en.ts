// docs:
// - \u00A0 used for non-breaking spaces in "Hack Club", "Hack Clubbers", similar occurences.

import { dot } from "node:test/reporters";

const messages = {
  index: {
    welcome: `Welcome to Hack\u00A0Club`,
    header: {
      weare: "We are",
      // number goes here in between, 104,368 something
      teenhackers: "teen hackers",
      aroundtheworld: "from around the world who code together",
      outernetpic: "Hackers at Outernet in Vermont",
      outernetpictitle: "📸 Photo by Matt Gleich, Hack Clubber in NH!",
    },
    headerbuttons: {
      slack: "Join Slack",
      mainsite: "Main site (english)",
      mainsitesubtext: "with more info!",
    },
    firstsection: {
      discoverthe: "Discover the",
      joyofcode: "joy of code",
      together: ", together.",
      everydaytext: `Every day, thousands of Hack\u00A0Clubbers gather online and
      in-person to make things with code. Whether you're a beginner
      programmer or have years of experience, there's a place for you at
      Hack\u00A0Club. Read about our `,
      hackerethic: "hacker ethic",
    },
    steps: {
      step1: {
        title: "Connect with other teenage coders",
        text1: `Have a coding question? Looking for project feedback? You'll
                find hundreds of fabulous people to talk to in our global`,
        text2: "(like Discord), active at all hours.",
      },
      step2: {
        title: "Build open source learning tools",
        text1: `We build large open source projects together (`,
        linktext: "3k+\u00A0PRs a year",
        text2:
          ") like this website, a game engine, daily streak system, and more!",
      },
      step3: {
        title: "Gather IRL with other makers",
        text1:
          "Meet other Hack\u00A0Clubbers in your community to build together at one of the 1000+",
        hackclubslink: "Hack\u00A0Clubs",
        and: "and",
        hackathonslink: "high school hackathons",
        dot: ".",
      },
    },
    carouseltext: "Here are a few projects you could get involved in:",
  },
};

// for safety, replace nbsp with \u00A0 in the strings
const replaceNbsp = (obj: any) => {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].replace(/&nbsp;/g, "\u00A0");
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      replaceNbsp(obj[key]);
    }
  }
};
replaceNbsp(messages);

export default messages;
