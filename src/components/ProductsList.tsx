import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductComponent from "./ProductComponent";
import { Product } from "../models/Product";

interface ProductListProps {
  allProducts: Product[];
}

export default function ProductsList({ allProducts }: ProductListProps) {
  const [spacing] = useState(2);
  const productItems = [];

  for (let i = 0; i < allProducts.length; i++) {
    productItems.push(
      <Grid item key={allProducts[i].id}>
        <ProductComponent product={allProducts[i]} />
      </Grid>
    );
  }
  return (
    <div>
      <Typography variant="h3" component="h1">
        LIST OF ALL PRODUCTS
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={spacing} sx={{ justifyContent: "center" }}>
            {productItems}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
