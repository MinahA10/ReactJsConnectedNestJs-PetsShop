import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Product } from "../models/Product";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
} from "./style/StyledComponent";

interface ProductProps {
  product: Product;
}

export default function ProductComponent({ product }: ProductProps) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <a
        href={`/product/${product.id}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <StyledCard>
          <StyledCardMedia src={product.imageUrl} alt={product.name} />
          <StyledCardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              ${Number(product.price).toLocaleString()}
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </a>
    </Card>
  );
}
