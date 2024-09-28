import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import logo from "../assets/logo-no-background.png";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrollPosition > 50 ? "black" : "transparent",
        transition: "background-color 0.3s ease",
        paddingInline: { md: "2rem", xs: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: { xs: "space-between" } }}
        >
          <Box
            component="a"
            href="#"
            sx={{ width: { md: "20%", sm: "20%", xs: "40%" } }}
          >
            <img src={logo} alt="gaming nest logo" style={{ width: "100%" }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
