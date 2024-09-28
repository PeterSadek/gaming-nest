import { Box, Stack, Typography, useTheme } from "@mui/material";
import header2 from "../assets/header2.jpg";
import Animation from "./Animation";

const Welcome = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBlock: "7rem" }}>
      <Stack
        spacing={5}
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ md: "center" }}
      >
        <Stack
          direction="column"
          textAlign="start"
          width={{ xs: "100%", md: "50%" }}
        >
          <Animation>
            <Typography
              color={theme.palette.primary.dark}
              fontSize="1.3rem"
              letterSpacing="0.3rem"
              mb="0.5rem"
            >
              OUR STORY
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                fontWeight: 400,
                fontSize: { md: "3.5rem", xs: "2.5rem" },
                color: "#715f25",
              }}
              mb="2rem"
            >
              Welcome
            </Typography>
            <Typography
              sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
              mb="1rem"
            >
              At Gaming Nest, we believe that every gamer deserves a place to
              connect, compete, and create unforgettable memories.
            </Typography>
            <Typography
              sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
            >
              Whether you’re a casual player or a hardcore enthusiast, you’ll
              find your perfect gaming spot here. At Gaming Nest, we’re more
              than just a gaming venue; we’re a community where every pixel
              counts!
            </Typography>
          </Animation>
        </Stack>
        <Box width={{ xs: "100%", md: "50%", borderRadius: 5 }}>
          <img
            src={header2}
            alt="gamers gaming"
            width="100%"
            style={{ borderRadius: "inherit" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Welcome;
