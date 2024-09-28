import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import image1 from "../assets/216447588_117110607298670_3041758502878189163_n.jpg";
import image2 from "../assets/216965255_117110700631994_7007611644348798561_n.jpg";
import image3 from "../assets/217016292_117110557298675_2544641575911821655_n.jpg";
import image4 from "../assets/217266962_117110720631992_1110740022723892101_n.jpg";
import image5 from "../assets/218320731_117110693965328_8861152703226441733_n.jpg";
import image6 from "../assets/262514202_183724347303962_5624492614044621105_n.jpg";
import image7 from "../assets/262606977_183724320637298_2717593023724540245_n.jpg";
import image8 from "../assets/262915413_183724237303973_3935209534692528296_n.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  const theme = useTheme();
  return (
    <Box sx={{ marginBlock: "7rem" }}>
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontWeight: 400,
            fontSize: { md: "3.5rem", xs: "2.5rem" },
            color: "#715f25",
          }}
          mb="0.5rem"
        >
          Our Nest
        </Typography>
        <Typography
          sx={{ color: theme.palette.primary.dark, fontSize: "1.1rem" }}
        >
          Gaming Nest offers a diverse selection of the latest titles,
          comfortable seating, and a vibrant community atmosphere.
        </Typography>
      </Stack>
      <Stack
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        ref={ref}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 3, delay: 0.5 }}
        component={motion.div}
        direction={{ xs: "column", md: "row" }}
        flexWrap="wrap"
        spacing={1}
        alignItems="center"
        sx={{ mb: "3rem", mt: "2.5rem", gap: 1 }}
      >
        {images.map((image) => (
          <Box
            key={image}
            sx={{
              width: 350,
              height: 300,
              borderRadius: 1,
              flexGrow: 1,
            }}
          >
            <img
              src={image}
              alt={image}
              width="100%"
              height="300px"
              style={{ borderRadius: "inherit", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Gallery;
