import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles/index.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselPage from "../components/Carousel";
import ProductsListContainer from "../container/ProductsListContainer";

const defaultTheme = createTheme();

function Homepage() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <CarouselPage />
        <ProductsListContainer />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Homepage;
