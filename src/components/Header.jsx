import { Paper, Stack, Typography, Button, useTheme } from "@mui/material";
import NavBar from "./NavBar";
import Animation from "./Animation";
import header3 from "../assets/header3.jpg";
import header3mob from "../assets/header3mob.jpg";

const Header = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: "100vh",
        color: theme.palette.primary.light,
        backgroundImage: { xs: `url(${header3mob})`, md: `url(${header3})` },
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center", height: "100%" }}
      >
        <Animation>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "5rem" },
              mb: "1rem",
              color: theme.palette.primary.light,
            }}
          >
            Welcome To Gaming Nest
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: { md: "1.5rem", xs: "1.1rem" },
            }}
          >
            Where Every Gamer Finds Their Home!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: { xs: "85%", md: "15%" },
              color: theme.palette.primary.light,
              borderColor: theme.palette.primary.light,
              padding: { md: "1rem", xs: "0.7rem" },
              "&:hover": {
                borderColor: theme.palette.primary.light,
                backgroundColor: theme.palette.primary.light,
                color: "black",
              },
              marginTop: "3rem",
            }}
          >
            Our Nest
          </Button>
        </Animation>
      </Stack>
    </Paper>
  );
};

export default Header;
