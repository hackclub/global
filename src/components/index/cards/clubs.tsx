/** @jsxImportSource theme-ui */
import { useTranslations } from "next-intl";
import Buttons from "./button";
import CardModel from "./card-model";
import { Box, Grid, Flex, Image, Text } from "theme-ui";

const Cover = () => (
  <Box
    sx={{
      position: "absolute",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage:
        "linear-gradient(to bottom,rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
      opacity: 0.8,
      zIndex: 1
    }}
  />
);

export default function Clubs() {
  const translate = useTranslations("index.clubscard");
  return (
    <CardModel
      color="white"
      sx={{
        backgroundColor: "red"
      }}
    >
      <Image
        src="https://cloud-5pdwvchgm-hack-club-bot.vercel.app/05851864a.jpg"
        alt="Summer Creek Hack Club meeting, February 2020"
        sx={{
          objectFit: "cover",
          position: "absolute",
          width: "120%",
          height: "120%",
          ml: ["-24px", "-32px", "-32px", "-32px"],
          mt: ["-24px", "-32px", "-32px", "-32px"],
          zIndex: 0
        }}
      />
      <Cover />
      <Text
        variant="title"
        as="h3"
        sx={{
          borderRadius: "default",
          px: 2,
          mx: [-2, 0],
          whiteSpace: [null, "nowrap", "nowrap"],
          fontSize: ["36px", 4, 5],
          position: "relative",
          zIndex: 2,
          width: "fit-content"
        }}
      >
        {translate("title")}
      </Text>
      <Grid columns={[1, 1, 2]} sx={{ position: "relative", zIndex: 2 }}>
        <Box>
          <Text
            as="p"
            variant="subtitle"
            sx={{ textShadow: "1px 1px 5px black" }}
          >
            {translate("text1")}
          </Text>
          <Text
            as="p"
            variant="subtitle"
            sx={{ textShadow: "1px 1px 5px black" }}
          >
            {translate("text2")}
          </Text>
          <Flex sx={{ flexDirection: "column", mt: [3, 3, 4] }}>
            <Buttons
              content={translate("buttoncontent")}
              id="2"
              icon="welcome"
              link="https://apply.hackclub.com/"
              primary="red"
            >
              {translate("startaclub")}
            </Buttons>
          </Flex>
        </Box>
      </Grid>
    </CardModel>
  );
}
