import * as React from "react";
import { Product } from "../models/Product";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
} from "./style/StyledComponent";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

interface ProductProps {
  productDetail: Product;
}

export default function ProductDetail({ productDetail }: ProductProps) {
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <StyledCard>
          <StyledCardMedia
            src={productDetail.imageUrl}
            alt={productDetail.name}
          />
          <StyledCardContent>
            <Typography variant="h5" component="div">
              {productDetail.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productDetail.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              ${Number(productDetail.price).toLocaleString()}
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </Card>
    </>
  );
}
