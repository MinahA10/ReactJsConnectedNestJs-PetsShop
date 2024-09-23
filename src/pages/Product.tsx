import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles/index.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselPage from "../components/Carousel";
import ProductDetailContainer from "../container/ProductDetailContainer";

const defaultTheme = createTheme();

export default function Product() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <CarouselPage />
        <ProductDetailContainer />
        <Footer />
      </ThemeProvider>
    </>
  );
}
