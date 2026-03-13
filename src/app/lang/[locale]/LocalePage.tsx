"use client";
/** @jsxImportSource theme-ui */
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "theme-ui";
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/nav";
import BGImg from "@/components/background-image";
import ForceTheme from "@/components/force-theme";
import Footer from "@/components/footer";
import Stage from "@/components/stage";
import Carousel from "@/components/index/carousel";
import Sprig from "@/components/index/cards/sprig";
import Sinerider from "@/components/index/cards/sinerider";
import SprigConsole from "@/components/index/cards/sprig-console";
import Clubs from "@/components/index/cards/clubs";
import Workshops from "@/components/index/cards/workshops";
import HCB from "@/components/index/cards/hcb";
import Hackathons from "@/components/index/cards/hackathons";
import Secret from "@/components/secret";
import Slack from "@/components/index/cards/slack";
import Icon from "@/components/icon";
import Photo from "@/components/photo";
import Comma from "@/components/comma";
import Haxidraw from "@/components/index/cards/haxidraw";
import CTAS from "@/components/index/ctas";
export type SlackData = {
  active_users_28d?: number;
  full_members_count?: number;
  total_members_count?: number;
  ds?: string;
};
import { useTranslations } from "next-intl";

export type Stars = {
  sprig: { stargazerCount: number };
  blot: { stargazerCount: number };
  sinerider: { stargazerCount: number };
  hackclub: { stargazerCount: number };
  hackathons: { stargazerCount: number };
  onboard: { stargazerCount: number };
};

export type PageProps = {
  bankData: string[];
  slackData: SlackData;
  stars: Stars;
  hackathonsData: any;
  game: {
    title: string;
    filename?: string;
    author?: string;
    addedOn?: string;
    description?: string;
  }[];
};

const gitHubData: Array<{
  type: string;
  userImage: string;
  user: string;
  time: string;
  url: string;
  message: string;
}> | null = null;

const events: any[] = [];
import carouselCards from "@/lib/carousel.json";
const ctaCards: any[] = [];
const OuternetImgFile = "/home/outernet-110.jpg";

function Page({ bankData, slackData, stars, hackathonsData, game }: PageProps) {
  const [gameImage] = useState("");
  const [gameImage1] = useState("");
  const [reveal, setReveal] = useState(false);
  const [hover, setHover] = useState(true);
  const [konamiActivated] = useState(false);

  const translate = useTranslations("index");

  const [searchParams] = useState<URLSearchParams | null>(() =>
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null,
  );

  useEffect(() => {
    if (reveal && !hover) {
      setTimeout(() => {
        setReveal(false);
      }, 2000);
    }
  }, [reveal, hover]);

  const [count, setCount] = useState(0);

  const images = [
    { alt: "Map of Hack Clubs around the world", src: "/home/map.png" },
    {
      alt: "Hack Clubbers at SpaceX HQ in LA",
      src: "/home/zephyr-spacex.jpeg",
    },
    {
      alt: "MA Hacks, Hack Clubber organized hackathon",
      src: "/home/mahacks.jpeg",
    },
    { alt: "AMA with Sal Khan", src: "/home/ama.png" },
    { alt: "Hack Clubbers at Flagship, 2019", src: "/home/flagship_4.jpg" },
  ];

  // janky right now and does not show last image

  useEffect(() => {
    console.log(
      `White sheets of paper\nWaiting to be printed on\nA blank console waits`,
    );
  }, [count, images.length]);

  // Spotlight effect
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const rect = document
        .getElementById("spotlight")
        ?.getBoundingClientRect();
      const x = event.clientX - (rect?.left ?? 0);
      const y = event.clientY - (rect?.top ?? 0);

      if (spotlightRef.current)
        spotlightRef.current.style.background = `radial-gradient(
				circle at ${x}px ${y}px,
				rgba(132, 146, 166, 0) 10px,
				rgba(249, 250, 252, 0.9) 80px
			)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <ForceTheme theme="light" />
      <Nav />
      <Box
        as="main"
        sx={{
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Secret
          reveal={reveal}
          onMouseEnter={() => {
            setHover(true);
            console.log(hover);
          }}
          onMouseOut={() => {
            setReveal(false);
          }}
        />
        {konamiActivated && (
          <Text as="p">Hey, I&apos;m an Easter Egg! Look at me!</Text>
        )}
        <Box
          as="header"
          sx={{
            bg: "dark",
            pt: [4, 5],
            pb: [2, 1],
            textAlign: "left",
            position: "relative",
            overflowX: "hidden",
          }}
        >
          <BGImg
            src={OuternetImgFile}
            alt="Hack Clubbers gather in the great outdoors of Cabot, VT, for an experience unlike any other: Outernet. 📸 Photo by Matt Gleich, Hack Clubber in NH!"
            gradient="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45))"
          />
          <Box
            sx={{
              width: "90vw",
              maxWidth: [null, "layout"],
              position: "relative",
              mx: "auto",
              py: [4, 4, 4],
              pb: 1,
              textShadow: "text",
            }}
          >
            <Text
              variant="eyebrow"
              sx={{
                color: "sunken",
                pb: 2,
                position: "relative",
                display: "block",
              }}
              as="h4"
            >
              {translate("welcome")}
            </Text>
            <Heading>
              <Text
                as="p"
                variant="title"
                sx={{
                  color: "white",
                  mb: [3, 4],
                  zIndex: 1,
                  textAlign: "left",
                  fontSize: ["42px", "52px", "64px"],
                  lineHeight: 1.2,
                  width: "100%",
                }}
              >
                {translate("header.weare")}{" "}
                <Text
                  sx={{
                    color: "transparent",
                    ml: 2,
                    mr: 3,
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text
                    onClick={() => setReveal(!reveal)}
                    sx={{
                      px: 2,
                      backgroundColor: "red",
                      position: "absolute",
                      borderRadius: 10,
                      transform: "rotate(-2deg) translateY(-5px)",
                      color: "white",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    aria-hidden="true"
                  >
                    <Comma>{slackData.total_members_count}</Comma>{" "}
                    {translate("header.teenhackers")}
                  </Text>
                  <Comma>{slackData.total_members_count}</Comma>{" "}
                  {translate("header.teenhackers")}
                </Text>
                <Box as="br" sx={{ display: ["inline", "none", "none"] }} />{" "}
                {translate("header.aroundtheworld")}
              </Text>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  flexDirection: "row",
                  rowGap: 3,
                }}
              >
                <Button
                  variant="ctaLg"
                  as="a"
                  {...({ href: "/slack" } as any)}
                  mt={[3, 0, 0]}
                  mr={3}
                  sx={{ transformOrigin: "center left" }}
                >
                  {translate("headerbuttons.slack").toUpperCase()}
                </Button>
                <Button
                  variant="ctaLg"
                  as="a"
                  {...({ href: "https://hackclub.com" } as any)}
                  mt={[3, 0, 0]}
                  mr={3}
                  sx={{
                    transformOrigin: "center left",
                    background: "linear-gradient(to right, #338eda, #33d6a6)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    {translate("headerbuttons.mainsite").toUpperCase()}{" "}
                    <Icon glyph="external" size={32} />
                  </div>
                  <Text
                    sx={{
                      fontSize: "14px",
                      opacity: 0.8,
                      fontWeight: "normal",
                    }}
                  >
                    {translate("headerbuttons.mainsitesubtext").toLowerCase()}
                  </Text>
                </Button>
              </Box>
              <CTAS cards={ctaCards} />
            </Heading>
          </Box>
          <Box
            sx={{
              display: "flex",
              position: ["relative", "relative", "absolute"],
              bottom: ["0px", "0px", "24px"],
              right: ["0px", "0px", "4px"],
              justifyContent: ["flex-end", "flex-end", "flex-end"],
              marginRight: 2,
              mt: [3, 2, 0],
              mr: [2, 3, null],
            }}
          >
            <Badge
              as="a"
              {...({ href: "https://outernet.hackclub.com/" } as any)}
              target="_blank"
              rel="noopener"
              variant="pill"
              sx={{
                zIndex: "1",
                bg: "black",
                color: "white",
                opacity: 1,
                textDecoration: "none",
                fontWeight: "normal",
                ":hover": { opacity: 1 },
                transition: "0.3s ease",
                // mixBlendMode: 'multiply'
              }}
              title={translate("header.outernetpictitle")}
            >
              {translate("header.outernetpic")}
            </Badge>
          </Box>
        </Box>
        <Box as="section" sx={{ py: [4, 5, "82px"], color: "black" }}>
          <Box
            sx={{
              position: "relative",
              width: "90vw",
              maxWidth: "layout",
              margin: "auto",
            }}
          >
            <Text
              variant="title"
              as="h1"
              sx={{ fontSize: ["36px", "48px", "56px"] }}
            >
              {translate("firstsection.discoverthe")}{" "}
              <Text
                as="span"
                sx={{
                  borderRadius: "default",
                  px: 1,
                  mx: 0,
                  whiteSpace: ["wrap", "nowrap", "nowrap"],
                  color: "white",
                  background: (t: any) => t.util.gx("red", "orange"),
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {translate("firstsection.joyofcode")}
              </Text>
              {translate("firstsection.together")}
            </Text>
            <Text
              variant="subtitle"
              as="p"
              sx={{
                fontSize: ["18px", "20px", "22px"],
                pb: [3, 3, 4],
                maxWidth: "62ch",
              }}
            >
              {translate("firstsection.everydaytext")}{" "}
              <Link
                href="https://hackclub.com/philosophy"
                target="_blank"
                rel="noopener"
              >
                {translate("firstsection.hackerethic")}
              </Link>
              .
            </Text>
            <Grid columns={[1, 1, 1, "2.5fr 3fr"]} gap={[0, 3, 4]} pt={[3, 4]}>
              <Box
                sx={{
                  position: "relative",
                  height: ["300px", "300px", "300px", "100%"],
                  py: [3, 3, 3, 0],
                }}
                onClick={() => {
                  setCount(count === images.length - 1 ? 0 : count + 1);
                }}
              >
                <Box
                  sx={{ position: "absolute", width: "100%", height: "100%" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: ["300px", "300px", "100%"],
                      figure: {
                        position: "absolute",
                        transform:
                          count % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)",
                        height: "85%",
                        width: ["80%", "80%", "70%", "100%"],
                        marginLeft: ["10%", "10%", "15%", "0"],
                      },
                      zIndex: 3,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Photo
                      src={
                        count === images.length - 2
                          ? images[0].src
                          : images.length - 1
                            ? images[1].src
                            : images[count + 2].src
                      }
                      alt={
                        count === images.length - 2
                          ? images[0].alt
                          : images.length - 1
                            ? images[1].alt
                            : images[count + 2].alt
                      }
                      width={3000}
                      height={2550}
                      showAlt
                    />
                  </Box>
                </Box>
                <Box
                  sx={{ position: "absolute", width: "100%", height: "100%" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: ["300px", "300px", "100%"],
                      figure: {
                        position: "absolute",
                        transform:
                          count % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)",
                        height: "85%",
                        width: ["80%", "80%", "70%", "100%"],
                        marginLeft: ["10%", "10%", "15%", "0"],
                      },
                      zIndex: 3,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Photo
                      src={
                        count === images.length - 1
                          ? images[0].src
                          : images[count + 1].src
                      }
                      alt={
                        count === images.length - 1
                          ? images[0].alt
                          : images[count + 1].alt
                      }
                      width={3000}
                      height={2550}
                      showAlt
                    />
                  </Box>
                </Box>
                <Box
                  sx={{ position: "absolute", width: "100%", height: "100%" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: ["300px", "300px", "100%"],
                      figure: {
                        position: "absolute",
                        transform:
                          count % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)",
                        height: "85%",
                        width: ["80%", "80%", "70%", "100%"],
                        marginLeft: ["10%", "10%", "15%", "0"],
                      },
                      zIndex: 3,
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Photo
                      src={images[count].src}
                      alt={images[count].alt}
                      width={3000}
                      height={2550}
                      showAlt
                    />
                  </Box>
                </Box>
              </Box>
              <Grid
                columns="1fr"
                sx={{
                  gridColumnGap: 3,
                  span: {
                    width: 36,
                    height: 36,
                    borderRadius: 24,
                    display: "inline-block",
                    fontSize: 2,
                    lineHeight: "30px",
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "3px solid currentColor",
                  },
                  p: { my: 0, fontSize: ["18px", "20px", "22px"] },
                  strong: { display: "block", fontSize: ["22px", 2, 3] },
                }}
                as="ul"
              >
                <Grid
                  columns="auto 1fr"
                  sx={{
                    transitionDuration: "0.52s",
                    py: 2,
                    px: 2,
                    color: "inherit",
                    position: "relative",
                    textDecoration: "none",
                    borderRadius: "extra",
                  }}
                  as="li"
                >
                  <Text as="span" color="red" aria-hidden="true">
                    1
                  </Text>
                  <Text as="p" variant="subtitle">
                    <Text as="strong" sx={{ mb: 1 }}>
                      {translate("steps.step1.title")}
                    </Text>
                    {translate("steps.step1.text1")}{" "}
                    <Link
                      href="https://hackclub.com/slack"
                      target="_blank"
                      rel="noopener"
                    >
                      Slack{" "}
                    </Link>
                    {translate("steps.step1.text2")}
                  </Text>
                </Grid>
                <Grid
                  columns="auto 1fr"
                  sx={{
                    transitionDuration: "0.52s",
                    py: 2,
                    px: 2,
                    color: "inherit",
                    position: "relative",
                    textDecoration: "none",
                    borderRadius: "extra",
                  }}
                  as="li"
                >
                  <Text as="span" color="orange" aria-hidden="true">
                    2
                  </Text>
                  <Text
                    as="p"
                    variant="subtitle"
                    sx={{
                      mt: 0,
                    }}
                  >
                    <Text as="strong" sx={{ mb: 1 }}>
                      {translate("steps.step2.title")}
                    </Text>
                    {translate("steps.step2.text1")}
                    <Link href="https://github.com/hackclub" target="_blank">
                      {translate("steps.step2.linktext")}
                    </Link>
                    {translate("steps.step2.text2")}
                  </Text>
                </Grid>
                <Grid
                  columns="auto 1fr"
                  sx={{
                    transitionDuration: "0.52s",
                    py: 2,
                    px: 2,
                    color: "inherit",
                    position: "relative",
                    textDecoration: "none",
                    borderRadius: "extra",
                  }}
                  as="li"
                >
                  <Text as="span" color="yellow" aria-hidden="true">
                    3
                  </Text>
                  <Text as="p" variant="subtitle">
                    <Text as="strong" sx={{ mb: 1 }}>
                      {translate("steps.step3.title")}
                    </Text>
                    {translate("steps.step3.text1")}{" "}
                    <Link
                      href="https://hackclub.com/clubs"
                      target="_blank"
                      rel="noopener"
                    >
                      {translate("steps.step3.hackclubslink")}
                    </Link>{" "}
                    {translate("steps.step3.and")}{" "}
                    <Link
                      href="https://hackclub.com/hackathons"
                      target="_blank"
                      rel="noopener"
                    >
                      {translate("steps.step3.hackathonslink")}
                    </Link>
                    {translate("steps.step3.dot")}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Carousel cards={carouselCards} />
        <Box
          id="spotlight"
          as="section"
          sx={{
            backgroundImage: `
              linear-gradient(rgba(249, 250, 252, 0.7), rgba(249, 250, 252, 0.7)),
              url('https://icons.hackclub.com/api/icons/0x8492a6/glyph:rep.svg')
            `,
            backgroundSize: "40px 40px",
            backgroundRepeat: "repeat",
            position: "relative",
          }}
        >
          <Box
            ref={spotlightRef}
            sx={{
              position: "absolute",
              zIndex: 2,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: "snow",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "relative",
              width: "90vw",
              maxWidth: "layout",
              margin: "auto",
              zIndex: 5,
            }}
            py={[4, 4, 5]}
          >
            <Box>
              <Text variant="title" sx={{ fontSize: ["36px", 4, 5] }}>
                {translate("connectwithbuilders.connectwith")}{" "}
                <Text
                  as="span"
                  sx={{
                    borderRadius: "default",
                    px: 2,
                    mx: 0,
                    whiteSpace: "nowrap",
                    color: "white",
                    bg: "red",
                  }}
                >
                  {translate("connectwithbuilders.builders")}
                </Text>{" "}
                {translate("connectwithbuilders.aroundworld")}
              </Text>
              <Text
                variant="subtitle"
                as="p"
                sx={{ fontSize: ["18px", "20px", "22px"], pb: [3, 0, 0] }}
              >
                {translate("connectwithbuilders.onlineinperson")}
              </Text>
            </Box>

            <Slack data={slackData} events={events} />
          </Box>
        </Box>
        <Box>
          <Box py={[4, 5, "82px"]}>
            <Box
              sx={{
                width: "90vw",
                maxWidth: "layout",
                margin: "auto",
                position: "relative",
              }}
            >
              <Flex
                sx={{
                  flexDirection: ["column", "column", "column", "row"],
                  justifyContent: gitHubData ? "center" : "flex-start",
                  alignItems: [
                    "flex-start",
                    "flex-start",
                    "flex-start",
                    "center",
                  ],
                  gap: "10px",
                }}
              >
                <Box sx={{ mb: [3, 0, 0] }}>
                  <Text
                    variant="title"
                    as="h2"
                    sx={{
                      fontSize: ["36px", "48px", "56px"],
                      maxWidth: "20ch",
                    }}
                  >
                    {translate("webuild.webuild")}{" "}
                    <Text
                      as="span"
                      sx={{
                        borderRadius: "default",
                        mx: 0,
                        whiteSpace: "nowrap",
                        color: "orange",
                      }}
                    >
                      {translate("webuild.opensource")}
                    </Text>{" "}
                    {translate("webuild.gamestools")}
                  </Text>
                  <Text
                    variant="subtitle"
                    as="p"
                    sx={{
                      fontSize: ["18px", "20px", "22px"],
                      pb: [3, 0, 0],
                      maxWidth: "60ch",
                    }}
                  >
                    {translate("webuild.text")}
                  </Text>
                </Box>
                {/* live from github would be here, but it's not even displayed on the main site so bye bye it goes */}
              </Flex>
              <Sprig
                stars={stars.sprig.stargazerCount}
                game={game}
                gameImage={gameImage}
                gameImage1={gameImage1}
              />
              <Haxidraw stars={stars.blot.stargazerCount} />
              <Sinerider stars={stars.sinerider.stargazerCount} />
              <Box as="section" id="sprig">
                <SprigConsole stars={stars["sprig"].stargazerCount} />
              </Box>
              <Workshops stars={stars.hackclub.stargazerCount} />
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              background: "snow",
              backgroundImage: `url('https://icons.hackclub.com/api/icons/0xF4F7FB/glyph:rep.svg')`,
              backgroundSize: "40px 40px",
              backgroundRepeat: "repeat",
              backgroundPosition: "10% 10%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            >
              {}
            </Box>
            <Box
              py={[4, 5, "82px"]}
              sx={{
                width: "90vw",
                maxWidth: "layout",
                margin: "auto",
                position: "relative",
              }}
            >
              <Box>
                <Text
                  variant="title"
                  as="h2"
                  sx={{
                    fontSize: ["36px", "48px", "72px"],
                    width: "18ch",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  {translate("irlcommunity.findyour")}{" "}
                  <Text
                    as="span"
                    sx={{
                      borderRadius: "default",
                      mx: 0,
                      whiteSpace: "nowrap",
                      color: "orange",
                    }}
                  >
                    {translate("irlcommunity.community")}
                  </Text>
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ["18px", "24px", "32px"],
                    margin: "auto",
                    pt: 2,
                    textAlign: "center",
                  }}
                >
                  {translate("irlcommunity.text")}
                </Text>
              </Box>
              <Clubs />
              <Hackathons
                data={hackathonsData}
                stars={stars.hackathons.stargazerCount}
              />

              {/* <Events events={events} /> */}
              <HCB data={bankData} />
            </Box>
          </Box>
        </Box>
        <Box py={[4, 5, "82px"]}>
          <Box
            sx={{
              width: "90vw",
              maxWidth: "layout",
              margin: "auto",
            }}
          >
            <Box>
              <Text
                as="p"
                variant="eyebrow"
                sx={{ fontSize: ["22px", 2, 3], textAlign: "center" }}
              >
                {translate("recap.title")}
              </Text>
              <Text
                variant="title"
                as="h2"
                sx={{
                  fontSize: ["36px", "48px", "72px"],
                  width: "16ch",
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                {translate("recap.secondhome")}{" "}
                <Text
                  as="span"
                  sx={{
                    borderRadius: "default",
                    ml: 0,
                    whiteSpace: ["wrap", "nowrap"],
                    background: (t: any) => t.util.gx("red", "orange"),
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {translate("recap.hackclub")}
                </Text>
              </Text>
            </Box>
            <Grid
              pt={[3, 4]}
              pb={[4, 5]}
              gap={3}
              columns={[1, 2, 3]}
              sx={{
                textAlign: "left",
                "> a, > div": {
                  borderRadius: "extra",
                  boxShadow: "elevated",
                  p: [3, null, 4],
                },
                span: {
                  boxShadow:
                    "-2px -2px 6px rgba(255,255,255,0.125), inset 2px 2px 6px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.0625)",
                },
                svg: { fill: "currentColor" },
              }}
            >
              <Card
                as="a"
                {...({ href: "/slack" } as any)}
                target="_blank"
                rel="noopener"
                variant="interactive"
                sx={{
                  background:
                    "linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)",
                  color: "white",
                  svg: { color: "rgb(51, 142, 218)" },
                  position: "relative",
                  ".icon": {
                    transition:
                      "transform 0.25s ease-in-out, opacity 0.25s ease-in-out",
                  },
                  ":hover,:focus": {
                    ".icon": {
                      transform: "translateX(28px) translateY(-28px)",
                      opacity: 0,
                    },
                  },
                }}
              >
                <Icon
                  glyph="external"
                  size={32}
                  className="icon"
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    opacity: 0.3,
                    fontSize: ["18px", "20px", "22px"],
                    zIndex: 3,
                    color: "white !important",
                  }}
                />
                <Stage
                  icon="slack"
                  color="white"
                  name={translate("recap.joinourslack")}
                  desc={translate("recap.slacktext")}
                  sx={{
                    p: {
                      fontSize: ["18px", "20px", "22px"],
                    },
                    h3: {
                      fontSize: ["22px", 2, 3],
                    },
                  }}
                />
              </Card>
              <Card
                sx={{
                  background:
                    "linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)",
                  color: "white",
                  svg: { color: "#fb558e" },
                  textDecoration: "none",
                  position: "relative",
                  ".icon": {
                    transition:
                      "transform 0.25s ease-in-out, opacity 0.25s ease-in-out",
                  },
                  ":hover,:focus": {
                    ".icon": {
                      transform: "translateX(28px) translateY(-28px)",
                      opacity: 0,
                    },
                  },
                }}
                as="a"
                {...({ href: "https://github.com/hackclub" } as any)}
                variant="interactive"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  glyph="external"
                  size={32}
                  className="icon"
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    opacity: 0.3,
                    fontSize: [1, "16px", "20px"],
                    zIndex: 3,
                    color: "white !important",
                  }}
                />
                <Stage
                  icon="github"
                  color="white"
                  name={translate("recap.opensource")}
                  desc={translate("recap.opentext")}
                  sx={{
                    p: {
                      fontSize: [1, "16px", "20px"],
                    },
                    h3: {
                      fontSize: ["22px", 2, 3],
                    },
                  }}
                />
              </Card>
              <Card
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(255, 140, 55, 0.9) 0%, rgba(236, 55, 80, 0.9) 100%)",
                  color: "white",
                  svg: { color: "rgb(236, 55, 80)" },
                  textDecoration: "none",
                  position: "relative",
                  ".icon": {
                    transition:
                      "transform 0.25s ease-in-out, opacity 0.43s ease-in-out",
                  },
                  ":hover,:focus": {
                    ".icon": {
                      transform: "translateX(28px) translateY(-28px)",
                      opacity: 0,
                    },
                  },
                }}
                as="a"
                {...({ href: "/clubs" } as any)}
                variant="interactive"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  glyph="external"
                  size={32}
                  className="icon"
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    opacity: 0.3,
                    fontSize: ["18px", "20px", "22px"],
                    zIndex: 3,
                    color: "white !important",
                  }}
                />
                <Stage
                  icon="clubs"
                  color="white"
                  name={translate("recap.startaclub")}
                  desc={translate("recap.clubtext")}
                  sx={{
                    p: {
                      fontSize: ["18px", "20px", "22px"],
                    },
                    h3: {
                      fontSize: ["22px", 2, 3],
                    },
                  }}
                />
              </Card>
            </Grid>
          </Box>
        </Box>

        {searchParams?.get("gen") === "z" && (
          <>
            <Box
              sx={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  margin: "auto",
                  width: "fit-content",
                  lineHeight: 0,
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/sJNK4VKeoBM?si=zvhDKhb9C5G2b4TJ&controls=1&autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                right: 0,
                zIndex: 1000,
                lineHeight: 0,
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/ChBg4aowzX8?si=X2J_T95yiaKXB2q4&controls=1&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                zIndex: 1000,
                lineHeight: 0,
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/JDQr1vICu54?si=U6-9AFtk7EdTabfp&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
          </>
        )}
      </Box>
      <Footer
        dark
        sx={{
          backgroundColor: "dark",
          position: "relative",
          overflow: "hidden",
          textShadow: "0 1px 2px rgba(0,0,0,0.375)",
          "h2,span,p,a": { color: "white !important" },
          "> div img": { objectPosition: ["left", "center"] },
          svg: {
            fill: "white",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
          },
        }}
      />
    </>
  );
}

export default Page;
