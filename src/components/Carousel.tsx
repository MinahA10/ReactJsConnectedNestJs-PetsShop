import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles/index.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import carousel1 from "../assets/images/carousel/carousel_1.jpg";
import carousel2 from "../assets/images/carousel/carousel_2.jpg";
import carousel3 from "../assets/images/carousel/carousel_3.jpg";

interface ItemProps {
  item: {
    name: string;
    description: string;
    image: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${item.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: isSmallScreen ? "100px" : "200px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "600px",
      }}
    >
      <Typography variant="h4" gutterBottom color="black">
        {item.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom color="black">
        {item.description}
      </Typography>
      <Link href="/produit" underline="none">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            mt: isSmallScreen ? 2 : 4,
            maxWidth: isSmallScreen ? "150px" : "200px",
          }}
        >
          Voir plus
        </Button>
      </Link>
    </Box>
  );
};

const CarouselPage: React.FC = () => {
  const items = [
    {
      name: "Pets Shop",
      description: "Welcome!!!!",
      image: carousel1,
    },
    {
      name: "Pets Shop",
      description: "All needs for your pets!",
      image: carousel2,
    },
    {
      name: "Pets shop",
      description: "we help you!",
      image: carousel3,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselPage;
