// @ts-nocheck
/** @jsxImportSource theme-ui */
import CardModel from "./card-model";
import { Box, Flex, Grid, Heading, Image, Link, Text } from "theme-ui";
import Buttons from "./button";
import Event from "../events";
import Comma from "../../comma";
import { useTranslations } from "next-intl";

const Cover = () => (
  <Box
    sx={{
      position: "absolute",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage:
        "linear-gradient(to bottom,rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95))",
      opacity: 0.8,
      zIndex: 1,
    }}
  />
);
const Stats = ({ data, subheading, nonMobile = false }) => (
  <Box sx={{ display: nonMobile ? ["none", "block"] : "block" }}>
    <Heading
      variant="headline"
      as="h4"
      sx={{ mb: 0, pt: 2, fontSize: ["28px", "36px", "38px"] }}
    >
      <Comma>{data}</Comma>
    </Heading>
    <Text
      sx={{
        color: "muted",
        fontSize: ["14px", "16px", "18px"],
        fontWeight: "400",
      }}
      as="h5"
    >
      {subheading}
    </Text>
  </Box>
);
export default function Slack({ data, events }) {
  const translate = useTranslations("index.slackcard")
  return (
    <CardModel
      color="white"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: (t) => t.util.gx("cyan", "purple"),
        minHeight: ["500px", "400px"],
        py: [3, 3, 4],
      }}
    >
      <Image
        src="/home/slack_ama.webp"
        sx={{
          objectFit: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
          ml: ["-24px", "-32px", "-32px", "-32px"],
          mt: ["-24px", "-32px", "-32px", "-32px"],
        }}
        alt="Slack AMA"
      />
      <Cover />
      <Grid sx={{ zIndex: 2 }}>
        <Text
          as="h3"
          variant="title"
          sx={{
            fontSize: ["36px", 4, 5],
            zIndex: 2,
            maxWidth: [null, null, "70%", null],
          }}
        >
          {translate("onlinecommunity")}
        </Text>
      </Grid>
      <Grid columns={[1, 1, "1.6fr 1fr", "1.6fr 1fr"]} sx={{ zIndex: 2 }}>
        <Box
          sx={{
            zIndex: 2,
          }}
        >
          <Text
            as="p"
            variant="subtitle"
            sx={{ fontSize: [1, "16px", "24px"] }}
          >
            {translate("text1")}
          </Text>
          <Text as="p" variant="subtitle">
            {translate("text2")}{" "}
            <Link
              href="https://hackclub.com/amas"
              target="_blank"
              rel="noopener"
              sx={{ color: "inherit" }}
            >
              {translate("ama")}
            </Link>{" "}
            {translate("withthem")}{" "}
          </Text>
          <Event events={events} />
          <Buttons id="13" link="/slack" icon="slack" primary="purple">
            {translate("joinslack")}
          </Buttons>
          <Grid
            sx={{
              zIndex: 2,
              display: data?.chats_channels_count_1d > 0 ? "block" : "none",
            }}
          >
            <Box
              sx={{
                background: "rgb(0,0,0,0.6)",
                height: ["130px", "170px", "170px", "100%"],
                position: ["relative", "relative", "absolute"],
                zIndex: 3,
                width: ["120%", "120%", "260px"],
                right: 0,
                top: [null, null, 0],
                mt: [3, 3, 0],
                ml: ["-10%", "-10%", "-5%"],
                mb: ["-10%", "-10%", "-5%"],
                p: 4,
                py: [3, 3, 2],
              }}
            >
              <Flex
                sx={{
                  flexDirection: ["row", "row", "column"],
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  textAlign: "center",
                }}
              >
                <Stats
                  data={data.readers_count_1d}
                  subheading={translate("currentlyonline")}
                />
                <Stats
                  data={data.chats_channels_count_1d}
                  subheading={translate("totalchannels")}
                  nonMobile={true}
                />
                <Stats
                  data={data.messages_count_1d}
                  subheading={translate("dailymessages")}
                />
                <Stats
                  data={data.total_members_count}
                  subheading={translate("totalmembers")}
                />
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </CardModel>
  );
}
