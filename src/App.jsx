import Header from "./components/Header";
import "./App.css";
import { Box } from "@mui/material";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: { md: "6rem", xs: "1rem" } }}>
        <Welcome />
        <Gallery />
      </Box>
    </>
  );
}

export default App;
